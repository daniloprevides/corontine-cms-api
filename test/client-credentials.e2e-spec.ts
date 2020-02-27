import { SecurityConstants } from './../src/security/constants';
import { ClientCredentialsDTO } from './../src/security/dto/client-credentials.dto';
import { ScopeEnum } from './../src/security/enum/scope.enum';
import { NewClientCredentialsDTO } from './../src/security/dto/new-client-credentials.dto';
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
import { NewScopeDTO } from 'src/security/dto/new-scope.dto';
import { UpdateClientCredentialsDTO } from 'src/security/dto/update-client-credentials.dto';


const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString('base64');
};

describe('ClientCredentials (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const userUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.USER_ENDPOINT}`;
  const credentialUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.CLIENT_CREDENTIALS_ENDPOINT}`;

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

  const   deleteRequest = (data:any, token:string, url:string) => {
    return request(app.getHttpServer())
    .delete(url)
    .set('Authorization', `Bearer ${token}`)
    .send(data);          
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

 

    it('Should add new Credential using already created permission', async done => {
      let credential = {
        name: "Test",
        scopes: [{name: ScopeEnum.USER_CREATE, description: "User Creation"} as NewScopeDTO],
        secret: "obladioblada"
      } as NewClientCredentialsDTO
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
        .then(res => {
          return createRequest(credential,res.body.accessToken, credentialUrl)
          .expect(201)  
          .then((data) => {
            expect(data.body.scopes.length > 0);
            expect(data.body.scopes[0].name).toBe(ScopeEnum.USER_CREATE);
            expect(data.body.scopes[0].description !== credential.scopes[0].description).toBeTruthy(); //Credential must have reutilized scope by name, so description is different
            // expect(data.body.secret).toBe(credential.secret); /Field should not be retrieved
            expect(data.body.name).toBe(credential.name);
            done();
          });        
        });  
      }); 
  
      it('Should add new Credential using new permission', async done => {
        let credential = {
          name: "NewTest",
          scopes: [{name: "another_perm", description: "New Permission"} as NewScopeDTO],
          secret: "Shhhh_Its_secret!"
        } as NewClientCredentialsDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(credential,res.body.accessToken, credentialUrl)
            .expect(201)  
            .then((data) => {
              expect(data.body.scopes.length > 0).toBe(true);
              expect(data.body.scopes[0].name).toBe(credential.scopes[0].name);
              expect(data.body.scopes[0].description).toBe(credential.scopes[0].description); //Credential must have reutilized scope by name, so description is different
              expect(data.body.name).toBe(credential.name);
              done();
            });        
          });  
      }); 

      it('Should fail on missing required property in client credential', async done => {
        let credential = {
//          name: "NewTest",
          scopes: [{name: "another_perm", description: "New Permission"} as NewScopeDTO],
          //secret: "Shhhh_Its_secret!"
        } as NewClientCredentialsDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(credential,res.body.accessToken, credentialUrl)
            .expect(400)  
            .then((data) => {
              done();
            });        
          });  
      });       

      it('Should Throw Error if permission already exists', async done => {
        let credential = {
          name: "NewTest",
          scopes: [{name: "another_perm", description: "New Permission"} as NewScopeDTO],
          secret: "Shhhh_Its_secret!"
        } as NewClientCredentialsDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(credential,res.body.accessToken, credentialUrl)
            .expect(409) //Conflict  
            .then(() => done())
          });  
        }); 

      it('Should update client Credential', async done => {
        let credential = {
          name: "NewTest3",
          scopes: [{name: "another_perm", description: "Another new Perm"} as NewScopeDTO],
          secret: "Shhhh_Its_secret!"
        } as NewClientCredentialsDTO
        return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
          .then(res => {
            return createRequest(credential,res.body.accessToken, credentialUrl)
            .expect(201) 
            .then((permission) => {
              let item = permission.body as UpdateClientCredentialsDTO;
              item.name = "plus_another_name";
              return updateRequest(item,res.body.accessToken,`${credentialUrl}/${item.id}`)
              .expect(200)
              .then((updatedItem => {
                expect(updatedItem.body.name).toBe(item.name);
                done();
              }));
            })
          });  
        });    
        
        it('Should delete client Credential', async done => {
          let credential = {
            name: "NewTest4",
            scopes: [{name: "another_perm_4", description: "Another new Perm4"} as NewScopeDTO],
            secret: "Shhhh_Its_secret!"
          } as NewClientCredentialsDTO
          return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
            .then(res => {
              return createRequest(credential,res.body.accessToken, credentialUrl)
              .expect(201)   
              .then((permission) => {
                let item = permission.body as ClientCredentialsDTO;
                return deleteRequest(item,res.body.accessToken,`${credentialUrl}/${item.id}`)
                .expect(200)
                .then(() => {
                  done();
                });
              })
            });  
        });              

        it('Shoud find all client credentials', async done => {
          return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
            .then(res => {
              return getRequest(res.body.accessToken, credentialUrl)
              .expect(200)   
              .then(async (credentialsResponse) => {
                const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<Repository<ClientCredentials>>(getRepositoryToken(ClientCredentials));
                const length = await clientCredentialRepository.count();
                expect(length).toBe(credentialsResponse.body.length);
                done();
              })
            });  
        });   
        
        
        it('Should find one client credential', async done => {
          let credential = {
            name: "NewTest5",
            scopes: [{name: "another_perm_5", description: "Another new Perm 5"} as NewScopeDTO],
            secret: "Shhhh_Its_secret!"
          } as NewClientCredentialsDTO
          return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
            .then(res => {
              return createRequest(credential,res.body.accessToken, credentialUrl)
              .expect(201)   
              .then((clientCredentialResponse) => {
                let item = clientCredentialResponse.body as ClientCredentialsDTO;
                return getRequest(res.body.accessToken,`${credentialUrl}/${item.id}`)
                .expect(200)
                .then((foundResponse) => {
                  expect(foundResponse.body.name).toBe(credential.name);
                  done();
                });
              })
            });  
        });  
        
        
  

  afterAll(async () => {
    await app.close();
  });
});
