import { NewComponentsDto } from "./../src/plugin/dto/new-components.dto";
import { NewPluginDto } from "./../src/plugin/dto/new-plugin.dto";
import { PluginConstants } from "./../src/plugin/constants";
import { SecurityConstants } from "./../src/security/constants";
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

  const getRequest = (token: string, url: string) => {
    return request(app.getHttpServer())
      .get(url)
      .set("Authorization", `Bearer ${token}`)
      .send();
  };

  beforeAll(async () => {
    jest.setTimeout(30000);
    return new Promise(async (resolve, reject) => {
      moduleFixture = await Test.createTestingModule({
        imports: [AppModule]
      }).compile();

      initializeTransactionalContext();
      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(new ValidationPipe());
      await app.init();

      setTimeout(async () => {
        authorization = await getUserClientCredentials(
          ClientCredentialsEnum["USER@APP"]
        );
        server = app.getHttpServer();
        resolve();
      }, 1000);
    });
  });

  it("Should add new Plugin using already created permission", async done => {
    let plugin = {
      name: "NewPlugin",
      description: "New test Plugin",
      addUrl: "http://localhost/addUrl",
      apiUrl: "http://localhost",
      getAllUrl: "http://localhost/GetAllUrl",
      removeUrl: "http://localhost/removeUrl",
      updateUrl: "http://localhost/updateUrl",
      getUrl: "http://localhost/getUrl",
      environment: PluginEnvironmentEnum.STAGE
    } as NewPluginDto;
    return defaultGrantRequest(
      await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"])
    ).then(res => {
      return createRequest(plugin, res.body.accessToken, pluginUrl)
        .expect(201)
        .then(data => {
          expect(data.body.name).toBe(plugin.name);
          expect(data.body.description).toBe(plugin.description);
          expect(data.body.addUrl).toBe(plugin.addUrl);
          expect(data.body.apiUrl).toBe(plugin.apiUrl);
          expect(data.body.getAllUrl).toBe(plugin.getAllUrl);
          expect(data.body.removeUrl).toBe(plugin.removeUrl);
          expect(data.body.updateUrl).toBe(plugin.updateUrl);
          expect(data.body.getUrl).toBe(plugin.getUrl);
          expect(data.body.environment).toBe(plugin.environment);

          done();
        });
    });
  });

  //       it('Should add group with scopes', async done => {
  //         let group = {
  //           name: "NewGroup2",
  //           description: "MyGroup2",
  //           scopes: [ScopeEnum.GROUP_CREATE]

  //         } as NewGroupDTO
  //         return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //           .then(res => {
  //             return createRequest(group,res.body.accessToken, groupUrl)
  //             .expect(201)
  //             .then((data) => {
  //               expect(data.body.name).toBe(group.name);
  //               expect(data.body.description).toBe(group.description);
  //               expect(data.body.scopes != null && data.body.scopes.length).toBeTruthy();
  //               expect(data.body.scopes[0].name).toBe(ScopeEnum.GROUP_CREATE);
  //               done();
  //             });
  //           });
  //         });

  //         it('Should throw error 404 on scope not found', async done => {
  //           let group = {
  //             name: "NewGroup2",
  //             description: "MyGroup2",
  //             scopes: ["Scope that does not exist"]

  //           } as NewGroupDTO
  //           return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //             .then(res => {
  //               return createRequest(group,res.body.accessToken, groupUrl)
  //               .expect(404)
  //               .then((data) => {
  //                 done();
  //               });
  //             });
  //           });

  //       it('Should fail on missing required property on group', async done => {
  //         let group = {
  //           description: "MyGroup"

  //         } as NewGroupDTO
  //         return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //           .then(res => {
  //             return createRequest(group,res.body.accessToken, groupUrl)
  //             .expect(400)
  //             .then((data) => {
  //               done();
  //             });
  //           });
  //       });

  //       it('Should throw error on group name already exists', async done => {
  //         let group = {
  //           name: "NewGroup3",
  //           description: "MyGroup"

  //         } as NewGroupDTO
  //         return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //           .then(res => {
  //             return createRequest(group,res.body.accessToken, groupUrl)
  //             .expect(201)
  //             .then((data) => {
  //               return createRequest(group,res.body.accessToken, groupUrl)
  //               .expect(409 || 501)
  //               .then(d => {
  //                 done();
  //               })
  //             });
  //           });
  //       });

  //       it('Should update group info', async done => {
  //         let group = {
  //           name: "NewGroup5",
  //           description: "MyGroup"

  //         } as NewGroupDTO
  //         return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //           .then(res => {
  //             return createRequest(group,res.body.accessToken, groupUrl)
  //             .expect(201)
  //             .then((data) => {
  //               let item = data.body as UpdateGroupDTO;
  //               item.name = "NewName1Oblll";
  //               return updateRequest(item,res.body.accessToken, `${groupUrl}/${item.id}`)
  //               .expect(200)
  //               .then((data) => {
  //                 let updatedItem = data.body as GroupDTO;
  //                 expect(updatedItem.name).toBe(item.name);
  //                 expect(updatedItem.description).toBe(item.description);
  //                 done();
  //               });
  //             });
  //           });
  //         });

  //         it('Should delete group', async done => {
  //           let group = {
  //             name: "NewGroup6",
  //             description: "MyGroup"

  //           } as NewGroupDTO
  //           return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //             .then(res => {
  //               return createRequest(group,res.body.accessToken, groupUrl)
  //               .expect(201)
  //               .then((data) => {
  //                 let item = data.body as GroupDTO;
  //                 return deleteRequest(res.body.accessToken, `${groupUrl}/${item.id}`)
  //                 .expect(200)
  //                 .then((data) => {
  //                   done();
  //                 });
  //               });
  //             });
  //           });

  //           it('Should find group by id', async done => {
  //             let group = {
  //               name: "NewGroup7",
  //               description: "MyGroup"

  //             } as NewGroupDTO
  //             return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //               .then(res => {
  //                 return createRequest(group,res.body.accessToken, groupUrl)
  //                 .expect(201)
  //                 .then((data) => {
  //                   let item = data.body as GroupDTO;
  //                   return getRequest(res.body.accessToken, `${groupUrl}/${item.id}`)
  //                   .expect(200)
  //                   .then((data) => {
  //                     let foundGroup = data.body as GroupDTO;

  //                     expect(foundGroup.name).toBe(item.name);
  //                     expect(foundGroup.description).toBe(item.description);
  //                     done();
  //                   });
  //                 });
  //               });
  //             });

  //         it('Shoud find all groups', async done => {
  //           return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  //             .then(res => {
  //               return getRequest(res.body.accessToken, groupUrl)
  //               .expect(200)
  //               .then(async (groupResponse) => {
  //                 const groupRepository: Repository<Group> = moduleFixture.get<Repository<Group>>(getRepositoryToken(Group));
  //                 const length = await groupRepository.count();
  //                 expect(length).toBe(groupResponse.body.length);
  //                 done();
  //               })
  //             });
  //         });

  // //         it('Should find one client credential', async done => {
  // //           let credential = {
  // //             name: "NewTest5",
  // //             scopes: [{name: "another_perm_5", description: "Another new Perm 5"} as NewScopeDTO],
  // //             secret: "Shhhh_Its_secret!"
  // //           } as NewClientCredentialsDTO
  // //           return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
  // //             .then(res => {
  // //               return createRequest(credential,res.body.accessToken, credentialUrl)
  // //               .expect(201)
  // //               .then((clientCredentialResponse) => {
  // //                 let item = clientCredentialResponse.body as ClientCredentialsDTO;
  // //                 return getRequest(res.body.accessToken,`${credentialUrl}/${item.id}`)
  // //                 .expect(200)
  // //                 .then((foundResponse) => {
  // //                   expect(foundResponse.body.name).toBe(credential.name);
  // //                   done();
  // //                 });
  // //               })
  // //             });
  // //         });

  afterAll(async () => {
    await app.close();
  });
});
