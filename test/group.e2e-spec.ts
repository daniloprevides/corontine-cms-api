import { SecurityConstants } from './../src/security/constants';
import { Group } from './../src/security/entity/group.entity';
import { UpdateGroupDTO } from './../src/security/dto/update-group.dto';
import { GroupDTO } from './../src/security/dto/group.dto';
import { NewGroupDTO } from './../src/security/dto/new-group.dto';
import { ScopeEnum } from './../src/security/enum/scope.enum';
import { AppModule } from './../src/app.module';
import request = require('supertest');
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

import { Constants } from '../src/commons';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { ClientCredentials } from '../src/security/entity/client-credentials.entity';
import { ClientCredentialsEnum } from '../src/security/enum/client-credentials.enum';
import { GrantTypeEnum } from '../src/security/enum/grant-type.enum';

const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString('base64');
};

describe('Group (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const userUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.USER_ENDPOINT}`;
  const credentialUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.CLIENT_CREDENTIALS_ENDPOINT}`;
  const groupUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.GROUP_ENDPOINT}`;

  let server = null;

  const getUserClientCredentials = async (credential:ClientCredentialsEnum) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<Repository<ClientCredentials>>(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({name: credential});
    return stringToBase64(
      `${clientCredentials.name}:${clientCredentials.secret}`,
    );
  }

  

  const defaultGrantRequest = (auth?:string) => {
    return request(server)
      .post('/oauth/token')
      .set('Authorization', `Basic ${auth ? auth : authorization }`)
      .set('Content-Type', 'multipart/form-data')
      .field('grant_type', GrantTypeEnum.CLIENT_CREDENTIALS)
  }

  const passwordGrantRequest = (auth:string, user:string,password:string) => {
    return request(server)
      .post('/oauth/token')
      .set('Authorization', `Basic ${auth ? auth : authorization }`)
      .set('Content-Type', 'multipart/form-data')
      .field('grant_type', GrantTypeEnum.PASSWORD)
      .field('username', user)
      .field('password', password)
  }

  const createUserRequest = (data:any, token:string) => {
    return request(app.getHttpServer())
    .post(userUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(data);          
  }

  const createRequest = (data:any, token:string, url:string) => {
    return request(app.getHttpServer())
    .post(url)
    .set('Authorization', `Bearer ${token}`)
    .send(data);          
  }

  const updateRequest = (data:any, token:string, url:string) => {
    return request(app.getHttpServer())
    .put(url)
    .set('Authorization', `Bearer ${token}`)
    .send(data);          
  }

  const   deleteRequest = (token:string, url:string) => {
    return request(app.getHttpServer())
    .delete(url)
    .set('Authorization', `Bearer ${token}`)
    .send();          
  }

  const getRequest = (token:string, url:string) => {
    return request(app.getHttpServer())
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .send();          
  }

  




  beforeAll(async () => {
    jest.setTimeout(30000);
    return new Promise(async (resolve,reject) => {
      moduleFixture = await Test.createTestingModule({
        imports: [
          AppModule
        ],
      }).compile();
  
      initializeTransactionalContext();
      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(new ValidationPipe());
      await app.init();
  
      setTimeout(async () => {
        authorization  = await getUserClientCredentials(ClientCredentialsEnum["USER@APP"]);    
        server = app.getHttpServer();  
        resolve();
      },1000);
  
    });
    
  });

 

    it('Should add new Group using already created permission', async done => {
      let group = {
        name: "NewGroup",
        description: "MyGroup"

      } as NewGroupDTO
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
        .then(res => {
          return createRequest(group,res.body.accessToken, groupUrl)
          .expect(201)  
          .then((data) => {
            expect(data.body.name).toBe(group.name);
            expect(data.body.description).toBe(group.description);
            done();
          });        
        });  
      }); 

      it('Should add group with scopes', async done => {
        let group = {
          name: "NewGroup2",
          description: "MyGroup2",
          scopes: [ScopeEnum.GROUP_CREATE]
  
        } as NewGroupDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(group,res.body.accessToken, groupUrl)
            .expect(201)  
            .then((data) => {
              expect(data.body.name).toBe(group.name);
              expect(data.body.description).toBe(group.description);
              expect(data.body.scopes != null && data.body.scopes.length).toBeTruthy();
              expect(data.body.scopes[0].name).toBe(ScopeEnum.GROUP_CREATE);
              done();
            });        
          });  
        }); 

        it('Should throw error 404 on scope not found', async done => {
          let group = {
            name: "NewGroup2",
            description: "MyGroup2",
            scopes: ["Scope that does not exist"]
    
          } as NewGroupDTO
          return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
            .then(res => {
              return createRequest(group,res.body.accessToken, groupUrl)
              .expect(404)  
              .then((data) => {
                done();
              });        
            });  
          }); 
  
      it('Should fail on missing required property on group', async done => {
        let group = {
          description: "MyGroup"
  
        } as NewGroupDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(group,res.body.accessToken, groupUrl)
            .expect(400)  
            .then((data) => {
              done();
            });        
          });  
      });      
      
      it('Should throw error on group name already exists', async done => {
        let group = {
          name: "NewGroup3",
          description: "MyGroup"
  
        } as NewGroupDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(group,res.body.accessToken, groupUrl)
            .expect(201)  
            .then((data) => {
              return createRequest(group,res.body.accessToken, groupUrl)
              .expect(409 || 501)  
              .then(d => {
                done();
              })
            });        
          });  
      });  

      it('Should update group info', async done => {
        let group = {
          name: "NewGroup5",
          description: "MyGroup"
  
        } as NewGroupDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(group,res.body.accessToken, groupUrl)
            .expect(201)  
            .then((data) => {
              let item = data.body as UpdateGroupDTO;
              item.name = "NewName1Oblll";
              return updateRequest(item,res.body.accessToken, `${groupUrl}/${item.id}`)
              .expect(200)  
              .then((data) => {
                let updatedItem = data.body as GroupDTO;
                expect(updatedItem.name).toBe(item.name);
                expect(updatedItem.description).toBe(item.description);
                done();
              });    
            });        
          });  
        }); 

        it('Should delete group', async done => {
          let group = {
            name: "NewGroup6",
            description: "MyGroup"
    
          } as NewGroupDTO
          return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
            .then(res => {
              return createRequest(group,res.body.accessToken, groupUrl)
              .expect(201)  
              .then((data) => {
                let item = data.body as GroupDTO;
                return deleteRequest(res.body.accessToken, `${groupUrl}/${item.id}`)
                .expect(200)  
                .then((data) => {
                  done();
                });    
              });        
            });  
          }); 

          it('Should find group by id', async done => {
            let group = {
              name: "NewGroup7",
              description: "MyGroup"
      
            } as NewGroupDTO
            return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
              .then(res => {
                return createRequest(group,res.body.accessToken, groupUrl)
                .expect(201)  
                .then((data) => {
                  let item = data.body as GroupDTO;
                  return getRequest(res.body.accessToken, `${groupUrl}/${item.id}`)
                  .expect(200)  
                  .then((data) => {
                    let foundGroup = data.body as GroupDTO;

                    expect(foundGroup.name).toBe(item.name);
                    expect(foundGroup.description).toBe(item.description);
                    done();
                  });    
                });        
              });  
            }); 

        it('Shoud find all groups', async done => {
          return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
            .then(res => {
              return getRequest(res.body.accessToken, groupUrl)
              .expect(200)   
              .then(async (groupResponse) => {
                const groupRepository: Repository<Group> = moduleFixture.get<Repository<Group>>(getRepositoryToken(Group));
                const length = await groupRepository.count();
                expect(length).toBe(groupResponse.body.length);
                done();
              })
            });  
        });   
        
        
//         it('Should find one client credential', async done => {
//           let credential = {
//             name: "NewTest5",
//             scopes: [{name: "another_perm_5", description: "Another new Perm 5"} as NewScopeDTO],
//             secret: "Shhhh_Its_secret!"
//           } as NewClientCredentialsDTO
//           return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
//             .then(res => {
//               return createRequest(credential,res.body.accessToken, credentialUrl)
//               .expect(201)   
//               .then((clientCredentialResponse) => {
//                 let item = clientCredentialResponse.body as ClientCredentialsDTO;
//                 return getRequest(res.body.accessToken,`${credentialUrl}/${item.id}`)
//                 .expect(200)
//                 .then((foundResponse) => {
//                   expect(foundResponse.body.name).toBe(credential.name);
//                   done();
//                 });
//               })
//             });  
//         });  
        
        
  

  afterAll(async () => {
    await app.close();
  });
});
