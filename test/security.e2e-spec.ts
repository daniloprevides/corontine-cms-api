import { ScopeEnum } from './../src/security/enum/scope.enum';
import { AppModule } from './../src/app.module';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

import { Constants } from '../src/commons';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { ClientCredentials } from '../src/security/entity/client-credentials.entity';
import { NewUserDTO } from '../src/security/dto/new-user.dto';
import { ClientCredentialsEnum } from '../src/security/enum/client-credentials.enum';
import { GrantTypeEnum } from '../src/security/enum/grant-type.enum';


const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString('base64');
};

describe('SecurityController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const userUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.USER_ENDPOINT}`;
  const credentialUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.CLIENT_CREDENTIALS_ENDPOINT}`;

  let server = null;

  const getRawClientCredentials = async (credential:ClientCredentialsEnum) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<Repository<ClientCredentials>>(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({name: credential});

    return clientCredentials;
  }

  const getUserClientCredentials = async (credential:ClientCredentialsEnum) => {
    const clientCredentials = await getRawClientCredentials(credential);
    return stringToBase64(
      `${clientCredentials.name}:${clientCredentials.secret}`,
    );
  }

  const postRequest = (token:string, url:string) => {
    return request(app.getHttpServer())
    .post(url)
    .set('Authorization', `Bearer ${token}`)
    .send();          
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

  const authorizationCodeStep1 = (state:string,scope:string,clientId:string,redirectUri:string) => {
    let url = `/oauth/code?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    return request(server)
      .get(url)      
  }

  const authorizationCodeStep2 = (auth:string, code:string,redirectUri:string,clientId:string, clientSecret:string) => {
    return request(server)
    .post('/oauth/token')
      .set('Authorization', `Basic ${auth ? auth : authorization }`)
      .set('Content-Type', 'multipart/form-data')
      .field('grant_type', GrantTypeEnum.AUTHORIZATION_CODE)
      .field('code', code)
      .field('redirect_uri', redirectUri)
      .field('client_id', clientId)
      .field('client_secret', clientSecret)
            
  }

  const createUserRequest = (data:any, token:string) => {
    return request(app.getHttpServer())
    .post(userUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(data);          
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

  it('Should grant using user permissions', async done => {
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["USER@APP"]))
      .expect(200)  
      .then(res => {
        expect(res.body.accessToken);
        done();
      });
  });  

  it('Should fail grant using wrong permissions', async done => {
    return defaultGrantRequest("wrong permissions")
      .expect(404)  
      .then(res => {
        //console.log(res.body);
        expect(res.body.message === 'Client credentials not found');
        done();
      });
  });  

  it('should login using admin credentials', async done => {
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .expect(200)
      .then(() => done());
  });  

  it('should add user', async done => {
    let user = {
      email: 'admin@email.com',
      password: 'password',
      name: 'name',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then((res) => {
          expect(res.body.name === user.name);
          done();
        });
      });
  });  

  it('should fail adding user using wrong permission scope', async done => {
    let user = {
      email: 'admin@email.com',
      password: 'password',
      name: 'name',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["USER@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(403)
        .then((res) => {
          done();
        });
      });
  });  

  it('should login using credentials', async done => {
    let user = {
      email: 'superadmin@email.com',
      password: 'password',
      name: 'name',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then(async (res) => {
          return passwordGrantRequest((await getUserClientCredentials(ClientCredentialsEnum["USER@APP"])),user.email,user.password)
          .expect(200)
          .then(_res => {
            expect(_res.body.accessToken);
            done();
          });

        });
      });
  }); 

  it('should fail login using all wrong credentials', async done => {
    return passwordGrantRequest((await getUserClientCredentials(ClientCredentialsEnum["USER@APP"])),'nome','senha')
    .expect(404)
    .then(_res => {
      expect(_res.body.accessToken);
      done();
    });
  }); 


  it('should fail login using all wrong password', async done => {
    let user = {
      email: 'wrongadmin@email.com',
      password: 'password',
      name: 'name',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then(async (res) => {
          return passwordGrantRequest((await getUserClientCredentials(ClientCredentialsEnum["USER@APP"])),user.email,'wrongpass')
          .expect(404)
          .then(_res => {
            expect(_res.body.accessToken);
            done();
          });

        });
      });  
  }); 

  it('should get code using code flow (authorization_code)', async done => {
    const state = "RANDOMADOHDUSHDUOSDS";
    const uri = "http://localhost:3000/callback";
    const redirectUri = encodeURIComponent(uri);
    const scope = `${ScopeEnum.CLIENT_CREDENTIALS_CREATE}+${ScopeEnum.GROUP_CREATE}`;
    const clientId=ClientCredentialsEnum["PLUGIN@APP"];

    await authorizationCodeStep1(state,scope,clientId,redirectUri)
    .expect(200)
    .then(data => {
      let item = data.body;
      expect(item.state).toBe(state);
      expect(item.scopes.length).toBe(2);
      expect(item.scopes.find(f => f.name == ScopeEnum.CLIENT_CREDENTIALS_CREATE) != null).toBeTruthy();
      expect(item.scopes.find(f => f.name == ScopeEnum.GROUP_CREATE) != null).toBeTruthy();
      expect(item.redirect_uri).toBe(uri);
      expect(item.code).toBeTruthy();
      expect(item.consumed).toBeFalsy();
      done();
    })
  },30000); 

  it('should exchange code for token using authorization_code flow', async done => {
    const state = "RANDOMADOHDUSHDUOSDS";
    const uri = "http://localhost:3000/callback";
    const redirectUri = encodeURIComponent(uri);
    const scope = `${ScopeEnum.CLIENT_CREDENTIALS_CREATE}+${ScopeEnum.GROUP_CREATE}`;
    const clientId=ClientCredentialsEnum["PLUGIN@APP"];

    await authorizationCodeStep1(state,scope,clientId,redirectUri)
    .expect(200)
    .then(async data => {
      let item = data.body;
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(async res => {
        let clientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
        return authorizationCodeStep2(res.body.accessToken,item.code,item.redirect_uri,clientCredential.name,clientCredential.secret)
        .expect(200)
        .then(data => {
          let item = data.body;
          expect(item.accessToken).toBeTruthy();
          expect(item.refreshToken).toBeTruthy();
          expect(item.tokenType).toBe("bearer");
          expect(item.scope != null && item.scope.trim() != "").toBeTruthy();
          done();
        })
      });
    })
  },10000); 

  it('should fail exchange code on wrong code', async done => {
    const state = "RANDOMADOHDUSHDUOSDS";
    const uri = "http://localhost:3000/callback";
    const redirectUri = encodeURIComponent(uri);
    const scope = `${ScopeEnum.CLIENT_CREDENTIALS_CREATE}+${ScopeEnum.GROUP_CREATE}`;
    const clientId=ClientCredentialsEnum["PLUGIN@APP"];

    await authorizationCodeStep1(state,scope,clientId,redirectUri)
    .expect(200)
    .then(async data => {
      let item = data.body;
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(async res => {
        let clientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
        return authorizationCodeStep2(res.body.accessToken,"Wrong Code",item.redirect_uri,clientCredential.name,clientCredential.secret)
        .expect(400)
        .then(data => {       
          done();
        })
      });
    })
  },10000); 

  it('should fail exchange code on wrong client id', async done => {
    const state = "RANDOMADOHDUSHDUOSDS";
    const uri = "http://localhost:3000/callback";
    const redirectUri = encodeURIComponent(uri);
    const scope = `${ScopeEnum.CLIENT_CREDENTIALS_CREATE}+${ScopeEnum.GROUP_CREATE}`;
    const clientId=ClientCredentialsEnum["PLUGIN@APP"];

    await authorizationCodeStep1(state,scope,clientId,redirectUri)
    .expect(200)
    .then(async data => {
      let item = data.body;
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(async res => {
        let clientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
        return authorizationCodeStep2(res.body.accessToken,item.code,item.redirect_uri,"unknow",clientCredential.secret)
        .expect(404)
        .then(data => {       
          done();
        })
      });
    })
  },10000); 

  it('should fail exchange code on wrong client secret', async done => {
    const state = "RANDOMADOHDUSHDUOSDS";
    const uri = "http://localhost:3000/callback";
    const redirectUri = encodeURIComponent(uri);
    const scope = `${ScopeEnum.CLIENT_CREDENTIALS_CREATE}+${ScopeEnum.GROUP_CREATE}`;
    const clientId=ClientCredentialsEnum["PLUGIN@APP"];

    await authorizationCodeStep1(state,scope,clientId,redirectUri)
    .expect(200)
    .then(async data => {
      let item = data.body;
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(async res => {
        let clientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
        return authorizationCodeStep2(res.body.accessToken,item.code,item.redirect_uri,clientCredential.name,"wrong_pass")
        .expect(404)
        .then(data => {       
          done();
        })
      });
    })
  },10000); 

  it('should return token details', async done => {
    const state = "RANDOMADOHDUSHDUOSDS";
    const uri = "http://localhost:3000/callback";
    const redirectUri = encodeURIComponent(uri);
    const scope = `${ScopeEnum.CLIENT_CREDENTIALS_CREATE}+${ScopeEnum.GROUP_CREATE}+${ScopeEnum.TOKEN_INFO}`;
    const clientId=ClientCredentialsEnum["PLUGIN@APP"];

    await authorizationCodeStep1(state,scope,clientId,redirectUri)
    .expect(200)
    .then(async data => {
      let item = data.body;
      return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(async res => {
        let clientCredential = await getRawClientCredentials(ClientCredentialsEnum["ADMIN@APP"]);
        return authorizationCodeStep2(res.body.accessToken,item.code,item.redirect_uri,clientCredential.name,clientCredential.secret)
        .expect(200)
        .then(data => {
          let token = data.body.accessToken;
          postRequest(token,`/oauth/token/details`)
          .expect(200)
          .then(data => {
            expect(data.body.scope.split(" ").length).toBe(3);
            done();
          })
          
        })
      });
    })
  },10000); 

  it('should get token info from logged user (User_password_flow)', async done => {   
    let user = {
      email: 'user_for_testing_upf@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
    .then(res => {      
      return createUserRequest(user,res.body.accessToken)
      .expect(201)
      .then(async (res) => {
        return passwordGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]),user.email,user.password)
        .expect(200)
        .then(res => {       
          let token = res.body.accessToken;
          postRequest(token,`/oauth/token/details`)
            .expect(200)
            .then((response) => {
              expect(response.body.scope != null && response.body.scope.trim() != "").toBeTruthy();
              done();
            })
        })
      });
    });
  },3000); 


  afterAll(async () => {
    await app.close();
  });
});
