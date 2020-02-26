import { ForgotPasswordDTO } from './../src/security/dto/forgot-password';
import { AdminChangePasswordDTO } from './../src/security/dto/admin-change-password.dto';
import { User } from './../src/security/entity/user.entity';
import { UserDTO } from './../src/security/dto/user.dto';
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
import { UserUpdateDTO } from '../src/security/dto/user-update.dto';
import { ClientCredentialsEnum } from '../src/security/enum/client-credentials.enum';
import { GrantTypeEnum } from '../src/security/enum/grant-type.enum';
import { v4 as uuidv4 } from 'uuid';


const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString('base64');
};

describe('UserController', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const userUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.USER_ENDPOINT}`;
  const credentialUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.CLIENT_CREDENTIALS_ENDPOINT}`;

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


  it('should fail adding user with missing properties', async done => {
    let user = {
      email: 'admin@email.com',
      password: 'password',
      //name: 'name',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(400)
        .then((res) => {
          done();
        });
      });
  });  

  it('should update user', async done => {
    let user = {
      email: 'adminanother@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then((newUserResponse) => {
          const user = newUserResponse.body as UserDTO;
          let updateDto = new UserUpdateDTO();
          updateDto.email = user.email;
          updateDto.id = user.id;
          updateDto.name = user.name;
          updateDto.urlFacebook = user.urlFacebook;
          updateDto.urlInstagram = user.urlInstagram;

          updateDto.name = "another_name_FOR_USER";
          return updateRequest(updateDto,res.body.accessToken,`${userUrl}/${user.id}`)
          .expect(200)
          .then(updatedUserResponse => {
            expect(updatedUserResponse.body.name).toBe(updateDto.name);
            done();
          })

        });
      });
  },30000);  

  it('should fail updating user with wrong permissions', async done => {
    let user = {
      email: 'adminanother@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["USER@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(403)
        .then((newUserResponse) => {
            done();
        });
      });
  },1000);  

  it('should find user by id', async done => {
    let user = {
      email: 'adminanother2@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then((newUserResponse) => {
            getRequest(res.body.accessToken,`${userUrl}/${newUserResponse.body.id}`)
            .expect(200)
            .then((response) => {
              expect(response.body.email).toBe('adminanother2@email.com');
              done();
            })
        });
      });
  },1000);  

  it('should fail finding user by wrong id', async done => {
    let user = {
      email: 'adminanother3@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then((newUserResponse) => {
            getRequest(res.body.accessToken,`${userUrl}/${uuidv4()}`)
            .expect(404)
            .then((response) => {
              done();
            })
        });
      });
  },1000);  

  it('should find all users', async done => {
    let user = {
      email: 'adminanother4@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
            getRequest(res.body.accessToken,`${userUrl}`)
            .expect(200)
            .then(async (response) => {
              const userRepository: Repository<User> = moduleFixture.get<Repository<User>>(getRepositoryToken(User));
              let totalItems = await userRepository.count();
              expect(response.body.length).toBe(totalItems);
              done();
            });
        });
  },1000);  

  it('should delete user', async done => {
    let user = {
      email: 'user_for_delete@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then((newUserResponse) => {
            deleteRequest(res.body.accessToken,`${userUrl}/${newUserResponse.body.id}`)
            .expect(200)
            .then((response) => {
              done();
            })
        });
      });
  },1000);  

  it('should fail deleting user by wrong id', async done => {
    let user = {
      email: 'user_for_delete_fail@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(201)
        .then((newUserResponse) => {
            deleteRequest(res.body.accessToken,`${userUrl}/${uuidv4()}`)
            .expect(404)
            .then((response) => {
              done();
            })
        });
      });
  },1000);  

  it('should fail getting user from token using client credential token', async done => {   
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {       
          getRequest(res.body.accessToken,`${userUrl}/me`)
          .expect(404)
          .then((response) => {
            done();
          })
      });
  },1000);  

  it('should get user from token (logged user)', async done => {   
    let user = {
      email: 'user_for_testing_me@email.com',
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
            getRequest(res.body.accessToken,`${userUrl}/me`)
            .expect(200)
            .then((response) => {
              expect(response.body.name).toBe(user.name);
              expect(response.body.email).toBe(user.email);
              //Checking if sensitive fields are not coming
              expect(response.body.secret).toBeFalsy();
              expect(response.body.salt).toBeFalsy();
              done();
            })
        })
      });
    });
  },3000);  

  it('should update user from token (logged user)', async done => {   
    let user = {
      email: 'user_for_testing_me_2@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
    .then(res => {      
      return createUserRequest(user,res.body.accessToken)
      .expect(201)
      .then(async (userResponse) => {
        return passwordGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]),user.email,user.password)
        .expect(200)
        .then(res => {       
          userResponse.body.name = "user_for_testing_me_2";
          userResponse.body.name = "user_for_testing_me_2@email.com";

          // user.email = "user_for_testing_me_2@email.com"
            updateRequest(userResponse.body,res.body.accessToken,`${userUrl}/me`)
            .expect(200)
            .then((response) => {
              expect(response.body.name).toBe(userResponse.body.name);
              expect(response.body.email).toBe(userResponse.body.email);
              //Checking if sensitive fields are not coming
              expect(response.body.secret).toBeFalsy();
              expect(response.body.salt).toBeFalsy();
              done();
            })
        })
      });
    });
  },3000);  

  it('should change password for user', async done => {   
    let user = {
      email: 'user_for_testing_me_3@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
    .then(res => {      
      return createUserRequest(user,res.body.accessToken)
      .expect(201)
      .then(async (userResponse) => {
        return passwordGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]),user.email,user.password)
        .expect(200)
        .then(res => {       
            let request = {
              newPassword: "MyNewPass",
              confirmNewPassword: "MyNewPass"
            } as AdminChangePasswordDTO
            updateRequest(request,res.body.accessToken,`${userUrl}/${userResponse.body.id}/change-password`)
            .expect(200)
            .then((response) => {             
              done();
            })
        })
      });
    });
  },1000);  

  it('should throw error on password change (differente passwords)', async done => {   
    let user = {
      email: 'user_for_testing_me_4@email.com',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
    .then(res => {      
      return createUserRequest(user,res.body.accessToken)
      .expect(201)
      .then(async (userResponse) => {
        return passwordGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]),user.email,user.password)
        .expect(200)
        .then(res => {       
            let request = {
              newPassword: "MyNewPass",
              confirmNewPassword: "MyNewPass2"
            } as AdminChangePasswordDTO
            updateRequest(request,res.body.accessToken,`${userUrl}/${userResponse.body.id}/change-password`)
            .expect(400)
            .then((response) => {             
              done();
            })
        })
      });
    });
  },1000); 

  it('should create forgot password request', async done => {   
    let user = {
      email: 'danilo@sysplan.com.br',
      password: 'password',
      name: 'myname',
      groups: ['admin']
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
    .then(res => {      
      return createUserRequest(user,res.body.accessToken)
      .expect(201)
      .then(async (userResponse) => {
        return passwordGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]),user.email,user.password)
        .expect(200)
        .then(res => {       
            let request = {
             email: user.email
            } as ForgotPasswordDTO
            createRequest(request,res.body.accessToken,`${userUrl}/forgot-password`)
            .expect(200)
            .then((response) => {  
              const id = response.body.id;
              expect(id).toBeTruthy();
              return getRequest(res.body.accessToken,`${userUrl}/forgot-password/${id}/validate`)
              .expect(200)
              .then(data => {
                done();
              })
            })
        })
      });
    });
  },30000); 


  afterAll(async () => {
    await app.close();
  });
});
