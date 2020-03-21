import { FieldsDto } from './../src/plugin/dto/fields.dto';
import { UpdateComponentsDto } from "./../src/plugin/dto/update-components.dto";
import { ComponentsDto } from "./../src/plugin/dto/components.dto";
import { NewFieldsDto } from "./../src/plugin/dto/new-fields.dto";
import { RequestContextMiddleware } from "../src/middlewares/request-context-middleware";
import { Pagination } from "nestjs-typeorm-paginate";
import { Plugin } from "./../src/plugin/entity/plugin.entity";
import { PluginDto } from "./../src/plugin/dto/plugin.dto";
import { ScopeEnum } from "./../src/security/enum/scope.enum";
import { ScopeEnum as PluginScopeEnum } from "./../src/plugin/enum/scope.enum";

import { Scope } from "./../src/security/entity/scope.entity";
import { HttpExceptionFilter } from "./../src/commons/filters/http-exception.filter";
import { PluginTypeEnum } from "../src/commons/enum/plugin-type.enum";
import { NewComponentsDto } from "./../src/plugin/dto/new-components.dto";
import { NewPluginDto } from "./../src/plugin/dto/new-plugin.dto";
import { PluginConstants } from "./../src/plugin/constants";
import { AppModule } from "./../src/app.module";
import request = require("supertest");
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { QueryRunner, Repository } from "typeorm";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";

import { Constants } from "../src/commons";
import { initializeTransactionalContext } from "typeorm-transactional-cls-hooked";
import { ClientCredentials } from "../src/security/entity/client-credentials.entity";
import { ClientCredentialsEnum } from "../src/security/enum/client-credentials.enum";
import { GrantTypeEnum } from "../src/security/enum/grant-type.enum";
import { PluginEnvironmentEnum } from "../src/plugin/enum/environment.enum";
import { v4 as uuidv4 } from "uuid";
const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString("base64");
};

describe("Components (e2e)", () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const componentUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.COMPONENTS_ENDPOINT}`;
  const pluginUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.PLUGIN_ENDPOINT}`;

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

  const createDefaultClientCredentialsForTesting = async () => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const scopeRepository: Repository<Scope> = moduleFixture.get<
      Repository<Scope>
    >(getRepositoryToken(Scope));

    let allScopes = await scopeRepository.find();
    let userReadPermission = allScopes.find(s => s.name == ScopeEnum.USER_READ);

    let userCredential = new ClientCredentials();
    userCredential.name = ClientCredentialsEnum["USER@APP"].toString();
    userCredential.secret = "OIDAIDOAHPDADH3232";
    userCredential.scopes = [userReadPermission];

    let pluginCredential = new ClientCredentials();
    pluginCredential.name = ClientCredentialsEnum["PLUGIN@APP"].toString();
    pluginCredential.secret = "8202ndhdskHauwbxmsksgsiyfewjlda890AAg0";
    pluginCredential.scopes = allScopes; //All Scopes

    let adminCredential = new ClientCredentials();
    adminCredential.name = ClientCredentialsEnum["ADMIN@APP"].toString();
    adminCredential.secret =
      "a3NiYWtpcHFqSVkpOXctcWp3ZcOncW5xdXVUKFQ2NzcpKiYwNzAmKCkqKSnCqCk";
    adminCredential.scopes = allScopes; //All Scopes

    userCredential = await clientCredentialRepository.save(userCredential);
    pluginCredential = await clientCredentialRepository.save(pluginCredential);
    adminCredential = await clientCredentialRepository.save(adminCredential);
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
        await createDefaultClientCredentialsForTesting();
        authorization = await getUserClientCredentials(
          ClientCredentialsEnum["USER@APP"]
        );
        server = app.getHttpServer();
        resolve();
      }, 4000);
    });
  });

  it("Should add new Component", async done => {
    await createCredentialWithPermissions("comp_credential_1", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("plugin_credential_1", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_1" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_1" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add",
      url: "abc",
      plugin: plugin
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(201)
      .then(async data => {
        expect(data.body.name).toBe(component.name);
        expect(data.body.plugin).toStrictEqual(component.plugin);

        done();
      });
  });

  it("Should add new Component with fields", async done => {
    await createCredentialWithPermissions("comp_credential_2", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.FIELDS_CREATE,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("plugin_credential_2", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_2" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_2" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin-2",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add-2",
      plugin: plugin,
      url: "abc",
      fields: [
        { name: "new-field-1", description: "description" } as NewFieldsDto
      ]
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(201)
      .then(async data => {
        expect(data.body.name).toBe(component.name);
        expect(data.body.plugin).toStrictEqual(component.plugin);
        expect(data.body.fields.length).toBe(1);
        done();
      });
  });

  it("Should update Component with fields", async done => {
    const newCredential = await createCredentialWithPermissions("comp_credential_3", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.COMPONENTS_UPDATE,
      PluginScopeEnum.FIELDS_CREATE,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("plugin_credential_3", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_3" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_3" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin-3",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;


    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add-3",
      plugin: plugin,
      url: "abc"
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(201)
      .then(async newComponentRequest => {
        const updatedComponent = newComponentRequest.body as ComponentsDto;
        updatedComponent.name = "new-name-3";
        updatedComponent.fields = [
          { name: "new-field-2", description: "description" } as FieldsDto
        ];
        return updateRequest(
          updatedComponent,
          tokenComponent,
          `${componentUrl}/${updatedComponent.id}`
        )
          .expect(200)
          .then(data => {
            expect(data.body.name).toBe(updatedComponent.name);
            expect(data.body.plugin).toStrictEqual(component.plugin);
            expect(data.body.fields.length).toBe(1);
            // expect(data.body.fields[0].clientId).toBe(newCredential.id);
            done();
          });
      });
  });

  it("Should delete Component", async done => {
    await createCredentialWithPermissions("comp_credential_4", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.COMPONENTS_DELETE,
      PluginScopeEnum.FIELDS_CREATE,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("plugin_credential_4", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_4" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_4" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin-4",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add-4",
      plugin: plugin,
      url: "abc"
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(201)
      .then(async newComponentRequest => {
        return deleteRequest(
          tokenComponent,
          `${componentUrl}/${newComponentRequest.body.id}`
        )
          .expect(200)
          .then(data => {
            done();
          });
      });
  });

  it("Should add new Component and get by id", async done => {
    await createCredentialWithPermissions("comp_credential_5", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.COMPONENTS_READ,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("plugin_credential_5", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_5" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_5" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin-5",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add-5",
      plugin: plugin,
      url: "abc"
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(201)
      .then(async data => {
        return getRequest(tokenComponent, `${componentUrl}/${data.body.id}`)
          .expect(200)
          .then(foundComponent => {
            expect(foundComponent.body.name).toBe(component.name);
            done();
          });
      });
  });

  it("Should fail while adding a new component to a non created by this token me plugin", async done => {
    await createCredentialWithPermissions("comp_credential_6", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.COMPONENTS_READ,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("plugin_credential_6", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_6" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_6" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin-6",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add-6",
      plugin: plugin,
      url: "abc"
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(404)
      .then(async data => {
        done();
      });
  });

  it("Should return all components", async done => {
    await createCredentialWithPermissions("comp_credential_7", "secret", [
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.COMPONENTS_READ,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);
    await createCredentialWithPermissions("comp_credential_7-read", "secret", [
      PluginScopeEnum.COMPONENTS_READ,
      PluginScopeEnum.CMS,
      ScopeEnum.TOKEN_INFO
    ]);

    await createCredentialWithPermissions("plugin_credential_7", "secret", [
      PluginScopeEnum.PLUGIN_CREATE,
      ScopeEnum.TOKEN_INFO
    ]);

    const compCredentials = await getUserClientCredentials(
      "comp_credential_7" as any
    );
    const pluginCredentials = await getUserClientCredentials(
      "plugin_credential_7" as any
    );

    const readCredential = await getUserClientCredentials(
      "comp_credential_7-read" as any
    );

    const defaultRequestComponent = await defaultGrantRequest(compCredentials);
    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestReadComponent = await defaultGrantRequest(readCredential);

    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenRead = defaultRequestReadComponent.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: "component-new-plugin-7",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let component = {
      name: "new-component-add-7-a",
      plugin: plugin,
      url: "abc"
    } as NewComponentsDto;
    let component2 = {
      name: "new-component-add-7-b",
      plugin: plugin,
      url: "abc"
    } as NewComponentsDto;

    return createRequest(component, tokenComponent, componentUrl)
      .expect(201)
      .then(async data => {
        createRequest(component, tokenComponent, componentUrl)
          .expect(201)
          .then(data => {
            return getRequest(tokenRead, `${componentUrl}`)
              .expect(200)
              .then(allItemsResponse => {
                expect(allItemsResponse.body.items.length).toBeGreaterThan(1);
                done();
              });
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
