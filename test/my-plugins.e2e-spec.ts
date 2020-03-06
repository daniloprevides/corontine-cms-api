import { PluginDto } from './../src/plugin/dto/plugin.dto';
import { UpdatePluginDto } from './../src/plugin/dto/update-plugin.dto';
import { RequestContextMiddleware } from "../src/middlewares/request-context-middleware";
import { ScopeEnum } from "./../src/security/enum/scope.enum";
import { ScopeEnum as PluginScopeEnum } from "./../src/plugin/enum/scope.enum";

import { Scope } from "./../src/security/entity/scope.entity";
import { HttpExceptionFilter } from "./../src/commons/filters/http-exception.filter";
import { PluginTypeEnum } from "../src/commons/enum/plugin-type.enum";
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

describe("My Plugin (e2e)", () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
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

  it("Should create new plugin using PLUGIN_CREATE permission", async done => {
    let plugin = {
      name: "my_plugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return await createCredentialWithPermissions(
      "my-plugin-perm",
      "plugin_pass",
      [PluginScopeEnum.PLUGIN_CREATE, ScopeEnum.TOKEN_INFO] //Token info is necessary
    ).then(async a => {
      let credentialsHeader = await getUserClientCredentials(
        "my-plugin-perm" as any
      );
      return defaultGrantRequest(credentialsHeader).then(res => {
        return createRequest(plugin, res.body.accessToken, pluginUrl)
          .expect(201)
          .then(data => {
            expect(data.body.name).toBe(plugin.name);
            done();
          });
      });
    });
  }, 30000);

    
  it("Should create 2 plugins, one using default plugin permission and other CMS permission, than must return all created with my plugin permission", async done => {
    let plugin = {
      name: "all_plugins_plugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;

    let myPlugin = {
      name: "my_plugins_plugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;



    await createCredentialWithPermissions("all-plugins","password",[ScopeEnum.TOKEN_INFO, PluginScopeEnum.PLUGIN_CREATE,  PluginScopeEnum.CMS]);
    await createCredentialWithPermissions("my-plugins","password",[ScopeEnum.TOKEN_INFO, PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.PLUGIN_READ]);

    const allPluginsPermission = await getUserClientCredentials("all-plugins" as any);
    const myPluginsPermission = await getUserClientCredentials("my-plugins" as any);

    return defaultGrantRequest(allPluginsPermission).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(allPluginsResponse => {
          expect(allPluginsResponse.body.name).toBe(plugin.name);
          return defaultGrantRequest(myPluginsPermission).then(myPluginRes => {
            return createRequest(myPlugin, myPluginRes.body.accessToken, pluginUrl)
            .expect(201)
            .then(myPluginResponse => {
              return getRequest( myPluginRes.body.accessToken,pluginUrl)
              .expect(200)
              .then(dataResponse => {
                expect(dataResponse.body.items.length).toBe(1);
                expect(dataResponse.body.items[0].name).toBe(myPlugin.name);
                done();
              })
            });
          });
        });
    });
  }, 30000);


  it("Should create 2 plugins, one using default plugin permission and other cms permission, than must return only one create with my plugin permission", async done => {
    let plugin = {
      name: "all_plugins_plugin_2",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;

    let myPlugin = {
      name: "my_plugins_plugin_2",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;



    await createCredentialWithPermissions("all-plugins-2","password",[ScopeEnum.TOKEN_INFO, PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS]);
    await createCredentialWithPermissions("my-plugins-2","password",[ScopeEnum.TOKEN_INFO, PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.PLUGIN_READ]);

    const allPluginsPermission = await getUserClientCredentials("all-plugins-2" as any);
    const myPluginsPermission = await getUserClientCredentials("my-plugins-2" as any);

    return defaultGrantRequest(allPluginsPermission).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(allPluginsResponse => {
          expect(allPluginsResponse.body.name).toBe(plugin.name);
          return defaultGrantRequest(myPluginsPermission).then(myPluginRes => {
            return createRequest(myPlugin, myPluginRes.body.accessToken, pluginUrl)
            .expect(201)
            .then(myPluginResponse => {
              return getRequest( myPluginRes.body.accessToken,`${pluginUrl}/${myPluginResponse.body.id}`)
              .expect(200)
              .then(dataResponse => {
                expect(dataResponse.body.name).toBe(myPlugin.name);
                done();
              })
            });
          });
        });
    });
  }, 30000);


  it("Should create 2 plugins, one using default plugin permission and other CMS permission, than must fail trying to retrive the one created using all plugin_create permission", async done => {
    let plugin = {
      name: "all_plugins_plugin_3",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;

    let myPlugin = {
      name: "my_plugins_plugin_3",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;



    await createCredentialWithPermissions("all-plugins-3","password",[ScopeEnum.TOKEN_INFO, PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS]);
    await createCredentialWithPermissions("my-plugins-3","password",[ScopeEnum.TOKEN_INFO, PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.PLUGIN_READ]);

    const allPluginsPermission = await getUserClientCredentials("all-plugins-3" as any);
    const myPluginsPermission = await getUserClientCredentials("my-plugins-3" as any);

    return defaultGrantRequest(allPluginsPermission).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(allPluginsResponse => {
          expect(allPluginsResponse.body.name).toBe(plugin.name);
          return defaultGrantRequest(myPluginsPermission).then(myPluginRes => {
            return createRequest(myPlugin, myPluginRes.body.accessToken, pluginUrl)
            .expect(201)
            .then(myPluginResponse => {
              return getRequest( myPluginRes.body.accessToken,`${pluginUrl}/${allPluginsResponse.body.id}`)
             .expect(404)
              .then(dataResponse => {
                done();
              })
            });
          });
        });
    });
  }, 30000);



  afterAll(async () => {
    await app.close();
  });
});
