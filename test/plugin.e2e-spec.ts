import { RequestContextMiddleware } from '../src/middlewares/request-context-middleware';
import { FindParamsDto } from './../src/commons/dto/find-params.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Plugin } from './../src/plugin/entity/plugin.entity';
import { PluginDto } from './../src/plugin/dto/plugin.dto';
import { ScopeEnum } from "./../src/security/enum/scope.enum";
import { ScopeEnum as PluginScopeEnum} from "./../src/plugin/enum/scope.enum";

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
import { v4 as uuidv4 } from 'uuid';
const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString("base64");
};

describe("Plugin (e2e)", () => {
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

  const createCredentialWithPermissions = async (credentialName:string, credentialSecret:string,scopeNames: string[]) : Promise<ClientCredentials> => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<Repository<ClientCredentials>>(getRepositoryToken(ClientCredentials));
    const scopeRepository:Repository<Scope> = moduleFixture.get<Repository<Scope>>(getRepositoryToken(Scope));

    let scopes:Scope[] = [];
    for (let scopeName of scopeNames){
      scopes.push(await scopeRepository.findOne({name: scopeName}));
    }

    let userCredential = new ClientCredentials();
    userCredential.name = credentialName;
    userCredential.secret = credentialSecret;
    userCredential.scopes = scopes;

    return clientCredentialRepository.save(userCredential);

  }

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
      .set("Authorization", `Bearer ${token}`)
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

  it("Should add new Plugin using already created permission", async done => {
    let plugin = {
      name: "NewPlugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"

    } as NewPluginDto;
    const userCredential = await getUserClientCredentials(
      ClientCredentialsEnum["ADMIN@APP"]
    );
    return defaultGrantRequest(userCredential).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(async data => {
          const rawClientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
          expect(data.body.name).toBe(plugin.name);
          expect(data.body.apiUrl).toBe(plugin.apiUrl);
          expect(data.body.environment).toBe(plugin.environment);
          expect(data.body.pluginType).toBe(plugin.pluginType);
          //checking if clientId has been filled with right information
          expect(data.body.clientId).toBe(rawClientCredential.id);
          done();
        });
    });
  });

  it("Should add new Plugin with components", async done => {
    let plugin = {
      name: "NewPluginWithComponents",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      components: [
        {
          name: "component",     
          url: "abc"     
        } as NewComponentsDto
      ]
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const userCredential = await getUserClientCredentials(
      ClientCredentialsEnum["ADMIN@APP"]
    );
    return defaultGrantRequest(userCredential).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(async data => {
          const rawClientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
          expect(data.body.name).toBe(plugin.name);
          expect(data.body.apiUrl).toBe(plugin.apiUrl);
          expect(data.body.environment).toBe(plugin.environment);
          expect(data.body.pluginType).toBe(plugin.pluginType);
          //checking if clientId has been filled with right information
          expect(data.body.clientId).toBe(rawClientCredential.id);
          expect(data.body.components[0].name).toStrictEqual(plugin.components[0].name);
          done();
        });
    });
  });

  it("Should fail creating plugin without credentials", async done => {
    let plugin = {
      name: "NewPlugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["USER@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(401)
        .then(data => {
          done();
        });
    });
  });

  it("Should fail creating plugin with same name", async done => {
    let plugin = {
      name: "NewPlugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(409)
        .then(data => {
          done();
        });
    });
  });

  it("Should fail creating plugin with missing properties", async done => {
    let plugin = {
      //name: "NewPlugin",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(400)
        .then(data => {
          done();
        });
    });
  });

  it("Should update plugin data", async done => {
    let plugin = {
      name: "NewPluginForUpdate",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          let item = data.body as PluginDto;
          item.name = "Gesse";
          return updateRequest(item,res.body.accessToken,`${pluginUrl}/${item.id}`)
          .expect(200)
          .then(updateResponse => {
            expect(updateResponse.body.name).toBe(item.name);
            done();
          })
        });
    });
  });

  it("Should update components of plugin data", async done => {
    let plugin = {
      name: "NewPluginForUpdateWithComponents",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT     
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          let item = data.body as PluginDto;
          item.name = "NewPluginForUpdateWithComponentsUpdated";
          item.components = [
            {
              name: "component",
              url: "abc"
            } as NewComponentsDto
          ]
          return updateRequest(item,res.body.accessToken,`${pluginUrl}/${item.id}`)
          .expect(200)
          .then(updateResponse => {
            expect(updateResponse.body.name).toBe(item.name);
            expect(updateResponse.body.components[0].name).toStrictEqual(item.components[0].name);
            done();
          })
        });
    });
  });

  it("Should delete plugin", async done => {
    let plugin = {
      name: "DeletePluginForUpdateWithComponents",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT  
      ,componentsUrl: "abc"   
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          let item = data.body as PluginDto;
          return deleteRequest(res.body.accessToken,`${pluginUrl}/${item.id}`)
          .expect(200)
          .then(updateResponse => {            
            done();
          })
        });
    });
  });


  it("Should delete plugin with components", async done => {
    let plugin = {
      name: "DeletePluginWithComponents",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      components : [
        {
          name: "component",
          url: "abc"
        } as NewComponentsDto
      ]     
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          let item = data.body as PluginDto;
          return deleteRequest(res.body.accessToken,`${pluginUrl}/${item.id}`)
          .expect(200)
          .then(updateResponse => {            
            done();
          })
        });
    });
  });

  it("Should find plugin by id", async done => {
    let plugin = {
      name: "DeletePluginWithComponents2",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      components : [
        {
          name: "component",
          url: "abc"
        } as NewComponentsDto
      ]    
      ,componentsUrl: "abc" 
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          let item = data.body as PluginDto;
          return getRequest(res.body.accessToken,`${pluginUrl}/${item.id}`)
          .expect(200)
          .then(response => {
            expect(response.body.name).toBe(item.name);            
            done();
          })
        });
    });
  });

  it("Should throw not found when search for plugin id", async done => {
    let plugin = {
      name: "DeletePluginWithComponents3",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      components : [
        {
          name: "component",
          url: "abc"
        } as NewComponentsDto
      ]     
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          let item = data.body as PluginDto;
          return getRequest(res.body.accessToken,`${pluginUrl}/${uuidv4()}`)
          .expect(404)
          .then(response => {               
            done();
          })
        });
    });
  });

  it("Should find all plugins", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return getRequest(res.body.accessToken, pluginUrl)
        .expect(200)
        .then(async data => {
          let pagination = data.body as Pagination<PluginDto>;
          const pluginRepository: Repository<Plugin> = moduleFixture.get<Repository<Plugin>>(getRepositoryToken(Plugin));
          let total = await pluginRepository.count();
          expect(pagination.itemCount).toBe(total);
          expect(pagination.pageCount).toBeFalsy;
          done();        
      });
    });
  });

  it("Should break pagination in one item per page", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return getRequest(res.body.accessToken, `${pluginUrl}?limit=1&page=1`)
        .expect(200)
        .then(async data => {
          let pagination = data.body as Pagination<PluginDto>;
          const pluginRepository: Repository<Plugin> = moduleFixture.get<Repository<Plugin>>(getRepositoryToken(Plugin));
          let total = await pluginRepository.count();
          expect(pagination.itemCount).toBe(1);
          expect(pagination.pageCount).toBe(total);
          done();        
      });
    });
  });

  it("Should fail creating component inside plugin creation withou COMPONENT_CREATE permission", async done => {
    let plugin = {
      name: "NewPluginForDenyCreation",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      components: [
        {
          name: "MyNewCompForDeny",
          url: "abc"
        } as NewComponentsDto
      ]
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return await createCredentialWithPermissions("plugin_perm_create","plugin_pass",[PluginScopeEnum.PLUGIN_CREATE, ScopeEnum.TOKEN_INFO] //Token info is necessary
    ).then(async a => {
      let credentialsHeader = await getUserClientCredentials("plugin_perm_create" as any);
        return defaultGrantRequest(
          credentialsHeader
        ).then(res => {
          return createRequest(plugin, res.body.accessToken, pluginUrl)
          .expect(403)
          .then(data => {
            done();
          });
        });  
    });
  });

  it("Should succeed creating component inside plugin creation with COMPONENT_CREATE permission", async done => {
    let plugin = {
      name: "NewPluginForDenyCreation2",
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT,
      components: [
        {
          name: "MyNewCompForDeny2",
          url: "abc"
        } as NewComponentsDto
      ]
      ,componentsUrl: "abc"
    } as NewPluginDto;
    return await createCredentialWithPermissions("plugin_perm_create2","plugin_pass",[PluginScopeEnum.PLUGIN_CREATE,PluginScopeEnum.COMPONENTS_CREATE, ScopeEnum.TOKEN_INFO] //Token info is necessary
    ).then(async a => {
      let credentialsHeader = await getUserClientCredentials("plugin_perm_create2" as any);
        return defaultGrantRequest(
          credentialsHeader
        ).then(res => {
          return createRequest(plugin, res.body.accessToken, pluginUrl)
          //.expect(201)
          .then(data => {
            expect(data.body.components[0].name).toBe(plugin.components[0].name);
            done();
          });
        });  
    });
  });



  afterAll(async () => {
    await app.close();
  });
});
