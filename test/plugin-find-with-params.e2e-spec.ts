import { FindParamsDto } from '../src/commons/dto/find-params.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Plugin } from '../src/plugin/entity/plugin.entity';
import { PluginDto } from '../src/plugin/dto/plugin.dto';
import { ScopeEnum } from "../src/security/enum/scope.enum";
import { Scope } from "../src/security/entity/scope.entity";
import { HttpExceptionFilter } from "../src/commons/filters/http-exception.filter";
import { PluginTypeEnum } from "../src/commons/enum/plugin-type.enum";
import { NewComponentsDto } from "../src/plugin/dto/new-components.dto";
import { NewPluginDto } from "../src/plugin/dto/new-plugin.dto";
import { PluginConstants } from "../src/plugin/constants";
import { AppModule } from "../src/app.module";
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

describe("Plugin(Find With Filters) (e2e)", () => {
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
      await app.init();

      setTimeout(async () => {
        await createDefaultClientCredentialsForTesting();
        authorization = await getUserClientCredentials(
          ClientCredentialsEnum["USER@APP"]
        );
        server = app.getHttpServer();
        resolve();
      }, 1000);
    });
  });

  it("Query Plugin using field=value", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      let plugin = {
        name: "PluginForSearchWithFilters",
        apiUrl: "http://localhost",
        environment: PluginEnvironmentEnum.STAGE,
        pluginType: PluginTypeEnum.CLIENT,
        components : [
          {
            name: "component"
          } as NewComponentsDto
        ]     
      } as NewPluginDto;
      return createRequest(plugin,res.body.accessToken,pluginUrl)
      .expect(201)
      .then(newPluginResponse => {
        let newPluginItem = newPluginResponse.body as PluginDto;
        const filter = {
          name: newPluginItem.name
        };
        return getRequest(res.body.accessToken, `${pluginUrl}?q=${JSON.stringify(filter)}`)
          .expect(200)
          .then(async data => {
            let pagination = data.body as Pagination<PluginDto>;
            expect(pagination.itemCount).toBe(1);
            expect(pagination.items[0].name).toBe(newPluginItem.name);           
            done();        
        });  
      });

    });
  });

  it("Query Plugin using field={$eq: value}", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      let plugin = {
        name: "PluginForSearchWithFilters$Eq",
        apiUrl: "http://localhost",
        environment: PluginEnvironmentEnum.STAGE,
        pluginType: PluginTypeEnum.CLIENT,
        components : [
          {
            name: "component"
          } as NewComponentsDto
        ]     
      } as NewPluginDto;
      return createRequest(plugin,res.body.accessToken,pluginUrl)
      .expect(201)
      .then(newPluginResponse => {
        let newPluginItem = newPluginResponse.body as PluginDto;
        const filter = {
          name: {$eq: newPluginItem.name}
        };
        return getRequest(res.body.accessToken, `${pluginUrl}?q=${JSON.stringify(filter)}`)
          .expect(200)
          .then(async data => {
            let pagination = data.body as Pagination<PluginDto>;
            expect(pagination.itemCount).toBe(1);
            expect(pagination.items[0].name).toBe(newPluginItem.name);           
            done();        
        });  
      });

    });
  });

  it("Query Plugin using field={$not: value}", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      let plugin = {
        name: "PluginForSearchWithFilters$Not",
        apiUrl: "http://localhost",
        environment: PluginEnvironmentEnum.STAGE,
        pluginType: PluginTypeEnum.CLIENT,
        components : [
          {
            name: "component"
          } as NewComponentsDto
        ]     
      } as NewPluginDto;
      return createRequest(plugin,res.body.accessToken,pluginUrl)
      .expect(201)
      .then(newPluginResponse => {
        let newPluginItem = newPluginResponse.body as PluginDto;
        const filter = {
          name: {$not: newPluginItem.name}
        };
        return getRequest(res.body.accessToken, `${pluginUrl}?q=${JSON.stringify(filter)}`)
          .expect(200)
          .then(async data => {
            let pagination = data.body as Pagination<PluginDto>;
            expect(pagination.items.find(i => i.name === newPluginItem.name)).toBeFalsy();           
            done();        
        });  
      });

    });
  });

  it("Query Plugin using field={$in: [value]}", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      let plugin = {
        name: "PluginForSearchWithFilters$In",
        apiUrl: "http://localhost",
        environment: PluginEnvironmentEnum.STAGE,
        pluginType: PluginTypeEnum.CLIENT,
        components : [
          {
            name: "component"
          } as NewComponentsDto
        ]     
      } as NewPluginDto;
      return createRequest(plugin,res.body.accessToken,pluginUrl)
      .expect(201)
      .then(newPluginResponse => {
        let newPluginItem = newPluginResponse.body as PluginDto;
        const filter = {
          name: {$in: [newPluginItem.name]}
        };
        return getRequest(res.body.accessToken, `${pluginUrl}?q=${JSON.stringify(filter)}`)
          .expect(200)
          .then(async data => {           
            let pagination = data.body as Pagination<PluginDto>;
            expect(pagination.itemCount).toBe(1);
            expect(pagination.items[0].name).toBe(newPluginItem.name);          
            done();        
        });  
      });

    });
  });


  it("Query Plugin and sort by name ASC", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      let plugin = {
        name: "1PluginForSearchWithSortAsc",
        apiUrl: "http://localhost",
        environment: PluginEnvironmentEnum.STAGE,
        pluginType: PluginTypeEnum.CLIENT,
        components : [
          {
            name: "component"
          } as NewComponentsDto
        ]     
      } as NewPluginDto;
      return createRequest(plugin,res.body.accessToken,pluginUrl)
      .expect(201)
      .then(newPluginResponse => {
        let newPluginItem = newPluginResponse.body as PluginDto;
        const filter = {
          
        };
        const sort = {
          name: "ASC"
        }
        return getRequest(res.body.accessToken, `${pluginUrl}?q=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}`)
          .expect(200)
          .then(async data => {    
            let pagination = data.body as Pagination<PluginDto>;
            expect(pagination.items[0].name).toBe(newPluginItem.name);          
            done();        
        });  
      });

    });
  });

  it("Query Plugin and sort by name DESC", async done => {
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      let plugin = {
        name: "11PluginForSearchWithSortDesc",
        apiUrl: "http://localhost",
        environment: PluginEnvironmentEnum.STAGE,
        pluginType: PluginTypeEnum.CLIENT,
        components : [
          {
            name: "component"
          } as NewComponentsDto
        ]     
      } as NewPluginDto;
      return createRequest(plugin,res.body.accessToken,pluginUrl)
      .expect(201)
      .then(newPluginResponse => {
        let newPluginItem = newPluginResponse.body as PluginDto;
        const filter = {
          
        };
        const sort = {
          name: "DESC"
        }
        return getRequest(res.body.accessToken, `${pluginUrl}?q=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}`)
          .expect(200)
          .then(async data => {    
            let pagination = data.body as Pagination<PluginDto>;
            expect(pagination.items[pagination.items.length -1].name).toBe(newPluginItem.name);          
            done();        
        });  
      });

    });
  });

  afterAll(async () => {
    await app.close();
  });
});
