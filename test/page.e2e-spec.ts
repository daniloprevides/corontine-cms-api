import { Page } from "./../src/page-creator/entity/page.entity";
import { PageDto } from "./../src/page-creator/dto/page.dto";
import { NewPageDto } from "./../src/page-creator/dto/new-page.dto";
import { PageScopeEnum } from "./../src/page-creator/enum/page-scope.enum";
import { PageConstants } from "./../src/page-creator/constants";
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

describe("Page (e2e)", () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const pageUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PageConstants.PAGE_ENDPOINT}`;

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

  it("Should add new Page", async done => {
    const pageCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PageScopeEnum.PAGE_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );

    const pageCredentials = await getUserClientCredentials(
      pageCredential.name as any
    );

    const defaultRequestPage = await defaultGrantRequest(pageCredentials);

    const tokenPage = defaultRequestPage.body.accessToken;

    //Create a plugin
    const newPage = {
      name: uuidv4(),
      description: "blablabla",
      content: {
        title: [{ abc: "abc" }]
      }
    } as NewPageDto;
    const newPageResponse = await createRequest(
      newPage,
      tokenPage,
      pageUrl
    )
    .expect(201);
    const page = newPageResponse.body as PageDto;

    expect(page.id).toBeDefined();
    expect(page.name).toBe(newPage.name);
    expect(page.content).toStrictEqual(newPage.content);
    done();
  });

  it("Should update page", async done => {
    const pageCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PageScopeEnum.PAGE_CREATE,
        PageScopeEnum.PAGE_UPDATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pageCredentials = await getUserClientCredentials(
      pageCredential.name as any
    );

    const defaultRequestpage = await defaultGrantRequest(pageCredentials);

    const tokenPage = defaultRequestpage.body.accessToken;

    const newPage = {
      name: uuidv4(),
      description: "Group Create",
      content: {
        title: [{ abc: "abc" }]
      }
    } as NewPageDto;
    const newPageResponse = await createRequest(
      newPage,
      tokenPage,
      pageUrl
    ).expect(201);
    const page = newPageResponse.body as PageDto;
    page.name = "updated";

    return updateRequest(page, tokenPage, `${pageUrl}/${page.id}`)
      .expect(200)
      .then(dataResponse => {
        expect(dataResponse.body.id).toBeDefined();
        expect(dataResponse.body.name).toBe(page.name);
        done();
      });
  });

  it("Should delete page", async done => {
    const pageCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PageScopeEnum.PAGE_CREATE,
        PageScopeEnum.PAGE_DELETE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pageCredentials = await getUserClientCredentials(
      pageCredential.name as any
    );

    const defaultRequestpage = await defaultGrantRequest(pageCredentials);

    const tokenPage = defaultRequestpage.body.accessToken;

    const newPage = {
      name: uuidv4(),
      description: "Group Create",
      content: {
        title: [{ abc: "abc" }]
      }
    } as NewPageDto;
    const newPageResponse = await createRequest(
      newPage,
      tokenPage,
      pageUrl
    ).expect(201);
    const page = newPageResponse.body as PageDto;

    return deleteRequest(tokenPage, `${pageUrl}/${page.id}`)
      .expect(200)
      .then(dataResponse => {
        done();
      });
  });

  it("Should get page by id", async done => {
    const pageCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PageScopeEnum.PAGE_CREATE,
        PageScopeEnum.PAGE_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pageCredentials = await getUserClientCredentials(
      pageCredential.name as any
    );

    const defaultRequestpage = await defaultGrantRequest(pageCredentials);

    const tokenPage = defaultRequestpage.body.accessToken;

    const newPage = {
      name: uuidv4(),
      description: "Group Create",
      content: {
        title: [{ abc: "abc" }]
      }
    } as NewPageDto;
    const newPageResponse = await createRequest(
      newPage,
      tokenPage,
      pageUrl
    ).expect(201);
    const page = newPageResponse.body as PageDto;

    return getRequest(tokenPage, `${pageUrl}/${page.id}`)
      .expect(200)
      .then(dataResponse => {
        expect(dataResponse.body.id).toBe(page.id);
        expect(dataResponse.body.name).toBe(page.name);
        done();
      });
  });

  it("Should get api data", async done => {
    const pageCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PageScopeEnum.PAGE_CREATE,
        PageScopeEnum.PAGE_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pageCredentials = await getUserClientCredentials(
      pageCredential.name as any
    );

    const defaultRequestpage = await defaultGrantRequest(pageCredentials);

    const tokenPage = defaultRequestpage.body.accessToken;

    return getRequest(tokenPage, `${pageUrl}/api/data`)
      .expect(200)
      .then(dataResponse => {
        expect(dataResponse.body).toBeTruthy();
        expect(dataResponse.body.plugins.length).toBeTruthy();
        done();
      });
  });

  it("Should get all pages", async done => {
    const pageCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PageScopeEnum.PAGE_CREATE,
        PageScopeEnum.PAGE_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pageCredentials = await getUserClientCredentials(
      pageCredential.name as any
    );

    const defaultRequestpage = await defaultGrantRequest(pageCredentials);

    const tokenPage = defaultRequestpage.body.accessToken;

    const newPage = {
      name: uuidv4(),
      description: "Group Create",
      content: {
        title: [{ abc: "abc" }]
      }
    } as NewPageDto;
    const newPageResponse = await createRequest(
      newPage,
      tokenPage,
      pageUrl
    ).expect(201);
    const page = newPageResponse.body as PageDto;

    return getRequest(tokenPage, `${pageUrl}`)
      .expect(200)
      .then(async dataResponse => {
        const pageRepository: Repository<Page> = moduleFixture.get<
          Repository<Page>
        >(getRepositoryToken(Page));
        let total = await pageRepository.count();
        const responseField = dataResponse.body as Pagination<Page>;
        expect(responseField.itemCount).toBe(total);
        done();
      });
  });


  afterAll(async () => {
    await app.close();
  });
});
