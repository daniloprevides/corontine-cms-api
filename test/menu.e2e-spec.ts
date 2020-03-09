import { Menu } from "./../src/menu/entity/menu.entity";
import { MenuDto } from "./../src/menu/dto/menu.dto";
import { NewMenuDto } from "./../src/menu/dto/new-menu.dto";
import { MenuScopeEnum } from "./../src/menu/enum/menu-scope.enum";
import { MenuConstants } from "./../src/menu/constants";
import { RequestContextMiddleware } from "../src/middlewares/request-context-middleware";
import { Pagination } from "nestjs-typeorm-paginate";
import { ScopeEnum } from "./../src/security/enum/scope.enum";
import { ScopeEnum as PluginScopeEnum } from "./../src/plugin/enum/scope.enum";

import { Scope } from "./../src/security/entity/scope.entity";
import { HttpExceptionFilter } from "./../src/commons/filters/http-exception.filter";
import { AppModule } from "./../src/app.module";
import request = require("supertest");
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";

import { Constants } from "../src/commons";
import { initializeTransactionalContext } from "typeorm-transactional-cls-hooked";
import { ClientCredentials } from "../src/security/entity/client-credentials.entity";
import { ClientCredentialsEnum } from "../src/security/enum/client-credentials.enum";
import { GrantTypeEnum } from "../src/security/enum/grant-type.enum";
import { v4 as uuidv4 } from "uuid";

const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString("base64");
};

describe("Menu (e2e)", () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const menuUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${MenuConstants.MENU_ENDPOINT}`;

  let server = null;

  const getUserClientCredentials = async (
    credential: ClientCredentialsEnum
  ) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({
      name: credential
    });
    return stringToBase64(
      `${clientCredentials.name}:${clientCredentials.secret}`
    );
  };

  const getRawClientCredentials = async (credential: ClientCredentialsEnum) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({
      name: credential
    });

    return clientCredentials;
  };

  const createCredentialWithPermissions = async (
    credentialName: string,
    credentialSecret: string,
    scopeNames: string[]
  ): Promise<ClientCredentials> => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const scopeRepository: Repository<Scope> = moduleFixture.get<
      Repository<Scope>
    >(getRepositoryToken(Scope));

    let scopes: Scope[] = [];
    for (let scopeName of scopeNames) {
      scopes.push(await scopeRepository.findOne({ name: scopeName }));
    }

    let userCredential = new ClientCredentials();
    userCredential.name = credentialName;
    userCredential.secret = credentialSecret;
    userCredential.scopes = scopes;

    return clientCredentialRepository.save(userCredential);
  };

  const defaultGrantRequest = (auth?: string) => {
    return request(server)
      .post("/oauth/token")
      .set("Authorization", `Basic ${auth ? auth : authorization}`)
      .set("Content-Type", "multipart/form-data")
      .field("grant_type", GrantTypeEnum.CLIENT_CREDENTIALS);
  };

  const passwordGrantRequest = (
    auth: string,
    user: string,
    password: string
  ) => {
    return request(server)
      .post("/oauth/token")
      .set("Authorization", `Basic ${auth ? auth : authorization}`)
      .set("Content-Type", "multipart/form-data")
      .field("grant_type", GrantTypeEnum.PASSWORD)
      .field("username", user)
      .field("password", password);
  };

  const createRequest = (data: any, token: string, url: string) => {
    return request(app.getHttpServer())
      .post(url)
      .set("Authorization", `Bearer ${token}`)
      .send(data);
  };

  const updateRequest = (data: any, token: string, url: string) => {
    return request(app.getHttpServer())
      .put(url)
      .set("Authorization", `Bearer ${token}`)
      .send(data);
  };

  const deleteRequest = (token: string, url: string) => {
    return request(app.getHttpServer())
      .delete(url)
      .set("Authorization", `Bearer ${token}`)
      .send();
  };

  const getRequest = (token: string, url: string, limit = 10, page = 0) => {
    return request(app.getHttpServer())
      .get(url)
      .set("Authorization", `Bearer ${token}`);
  };

  beforeAll(async () => {
    jest.setTimeout(30000);
    return new Promise(async (resolve, reject) => {
      moduleFixture = await Test.createTestingModule({
        imports: [AppModule]
      }).compile();

      initializeTransactionalContext();
      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(
        new ValidationPipe({
          disableErrorMessages: false
        })
      );
      app.useGlobalFilters(new HttpExceptionFilter());
      app.use(RequestContextMiddleware);

      await app.init();

      setTimeout(async () => {
        server = app.getHttpServer();
        resolve();
      }, 4000);
    });
  });

  it("Should add new Menu", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [MenuScopeEnum.MENU_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "blablabla",
      label: "My Menu 1",
      link: "/add/menu1",
      requiredPermission: ScopeEnum.GROUP_CREATE
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    expect(menu.id).toBeDefined();
    expect(menu.requiredPermission).toBe(newMenu.requiredPermission);
    done();
  });

  it("Should add new Menu with children", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [MenuScopeEnum.MENU_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "Group Create",
      label: "Group Create",
      link: "/add/group",
      requiredPermission: ScopeEnum.GROUP_CREATE,
      children: [
        {
          name: uuidv4(),
          description: "Group Delete",
          label: "Group Delete",
          requiredPermission: ScopeEnum.GROUP_DELETE
        } as NewMenuDto
      ]
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    expect(menu.id).toBeDefined();
    expect(menu.requiredPermission).toBe(newMenu.requiredPermission);
    expect(menu.children.length).toBe(1);
    done();
  });

  it("Should update Menu with children", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        MenuScopeEnum.MENU_CREATE,
        MenuScopeEnum.MENU_UPDATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "Group Create",
      label: "Group Create",
      link: "/add/group",
      requiredPermission: ScopeEnum.GROUP_CREATE,
      children: [
        {
          name: uuidv4(),
          description: "Group Delete",
          label: "Group Delete",
          requiredPermission: ScopeEnum.GROUP_DELETE
        } as NewMenuDto
      ]
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    menu.label = "updated";

    return updateRequest(menu, tokenMenu, `${menuUrl}/${menu.id}`)
      .expect(200)
      .then(dataResponse => {
        expect(dataResponse.body.id).toBeDefined();
        expect(dataResponse.body.requiredPermission).toBe(
          newMenu.requiredPermission
        );
        expect(dataResponse.body.label).toBe(menu.label);
        expect(dataResponse.body.children.length).toBe(1);
        done();
      });
  });

  //Deactivated because of a sqlite bug
  // it("Should delete Menu with children", async done => {
  //   const menuCredential = await createCredentialWithPermissions(
  //     uuidv4(),
  //     "secret",
  //     [
  //       MenuScopeEnum.MENU_CREATE,
  //       MenuScopeEnum.MENU_DELETE,
  //       PluginScopeEnum.CMS,
  //       ScopeEnum.TOKEN_INFO
  //     ]
  //   );

  //   const menuCredentials = await getUserClientCredentials(
  //     menuCredential.name as any
  //   );

  //   const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

  //   const tokenMenu = defaultRequestMenu.body.accessToken;

  //   //Create a plugin
  //   const newMenu = {
  //     name: uuidv4(),
  //     description: "Group Create",
  //     label: "Group Create",
  //     link: "/add/group",
  //     requiredPermission: ScopeEnum.GROUP_CREATE,
  //     children: [
  //       {
  //         name: uuidv4(),
  //         description: "Group Delete",
  //         label: "Group Delete",
  //         requiredPermission: ScopeEnum.GROUP_DELETE
  //       } as NewMenuDto
  //     ]
  //   } as NewMenuDto;
  //   const newMenuResponse = await createRequest(
  //     newMenu,
  //     tokenMenu,
  //     menuUrl
  //   ).expect(201);
  //   const menu = newMenuResponse.body as MenuDto;

  //   return deleteRequest(tokenMenu, `${menuUrl}/${menu.id}`)
  //     .expect(200)
  //     .then(dataResponse => {
  //       console.log(dataResponse.body);
  //       done();
  //     });
  // });

  it("Should delete children item", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        MenuScopeEnum.MENU_CREATE,
        MenuScopeEnum.MENU_DELETE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "Group Create",
      label: "Group Create",
      link: "/add/group",
      requiredPermission: ScopeEnum.GROUP_CREATE,
      children: [
        {
          name: uuidv4(),
          description: "Group Delete",
          label: "Group Delete",
          requiredPermission: ScopeEnum.GROUP_DELETE
        } as NewMenuDto
      ]
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    return deleteRequest(tokenMenu, `${menuUrl}/${menu.children[0].id}`)
      .expect(200)
      .then(dataResponse => {
        done();
      });
  });

  it("Should get by id Menu", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        MenuScopeEnum.MENU_CREATE,
        MenuScopeEnum.MENU_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "Group Create",
      label: "Group Create",
      link: "/add/group",
      requiredPermission: ScopeEnum.GROUP_CREATE,
      children: [
        {
          name: uuidv4(),
          description: "Group Delete",
          label: "Group Delete",
          requiredPermission: ScopeEnum.GROUP_DELETE
        } as NewMenuDto
      ]
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    return getRequest(tokenMenu, `${menuUrl}/${menu.id}`)
      .expect(200)
      .then(dataResponse => {
        expect(menu.id).toBeDefined();
        expect(menu.requiredPermission).toBe(newMenu.requiredPermission);
        expect(menu.children.length).toBe(1);
        done();
      });
  });

  it("Should get all Menu", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        MenuScopeEnum.MENU_CREATE,
        MenuScopeEnum.MENU_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "Group Create",
      label: "Group Create",
      link: "/add/group",
      requiredPermission: ScopeEnum.GROUP_CREATE,
      children: [
        {
          name: uuidv4(),
          description: "Group Delete",
          label: "Group Delete",
          requiredPermission: ScopeEnum.GROUP_DELETE
        } as NewMenuDto
      ]
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    return getRequest(tokenMenu, `${menuUrl}`)
      .expect(200)
      .then(async data => {
        const menuRepository: Repository<Menu> = moduleFixture.get<
          Repository<Menu>
        >(getRepositoryToken(Menu));
        let total = await menuRepository.count();
        const responseField = data.body as Pagination<Menu>;
        expect(responseField.itemCount).toBe(total);

        done();
      });
  });

  it("Should get my menu", async done => {
    const menuCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        MenuScopeEnum.MENU_CREATE,
        MenuScopeEnum.MENU_READ,
        ScopeEnum.GROUP_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const menuCredentials = await getUserClientCredentials(
      menuCredential.name as any
    );

    const defaultRequestMenu = await defaultGrantRequest(menuCredentials);

    const tokenMenu = defaultRequestMenu.body.accessToken;

    //Create a plugin
    const newMenu = {
      name: uuidv4(),
      description: "Group Create",
      label: "Group Create",
      link: "/add/group",
      requiredPermission: ScopeEnum.GROUP_CREATE,
      children: [
        {
          name: uuidv4(),
          description: "Group Delete",
          label: "Group Delete",
          requiredPermission: ScopeEnum.GROUP_DELETE
        } as NewMenuDto
      ]
    } as NewMenuDto;
    const newMenuResponse = await createRequest(
      newMenu,
      tokenMenu,
      menuUrl
    ).expect(201);
    const menu = newMenuResponse.body as MenuDto;

    return getRequest(tokenMenu, `${menuUrl}/my-menu`)
      .expect(200)
      .then(dataResponse => {
        const responseItem = dataResponse.body as MenuDto[];

        expect(menu.id).toBeDefined();
        expect(menu.requiredPermission).toBe(newMenu.requiredPermission);
        expect(responseItem[0].children.length).toBe(3);

        // expect(responseItem[0].children[0].requiredPermission).toBe(
        //   MenuScopeEnum.MENU_CREATE
        // );
        // expect(responseItem[0].children[1].requiredPermission).toBe(
        //   MenuScopeEnum.MENU_READ
        // );
        // expect(responseItem[0].children[2].requiredPermission).toBe(
        //   MenuScopeEnum.MENU_READ
        // );

        // //validating items
        // expect(responseItem[1].children[0].requiredPermission).toBe(
        //   ScopeEnum.GROUP_CREATE
        // );

        done();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
