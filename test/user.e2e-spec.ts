import { ChangePasswordDTO } from './../src/security/dto/change-password.dto';
import { HttpExceptionFilter } from './../src/commons/filters/http-exception.filter';
import { ScopeEnum } from './../src/security/enum/scope.enum';
import { Scope } from './../src/security/entity/scope.entity';
import { SecurityConstants } from './../src/security/constants';
import { ForgotPasswordDTO } from './../src/security/dto/forgot-password';
import { AdminChangePasswordDTO } from './../src/security/dto/admin-change-password.dto';
import { User } from './../src/security/entity/user.entity';
import { UserDTO } from './../src/security/dto/user.dto';
import { AppModule } from './../src/app.module';
import request = require('supertest');
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
import { RequestContextMiddleware } from '../src/middlewares/request-context-middleware';
import { Group } from '../src/security/entity/group.entity';
import { GroupDTO } from '../src/security/dto/group.dto';


const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString('base64');
};

describe('UserController', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const userUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.USER_ENDPOINT}`;
  const credentialUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.CLIENT_CREDENTIALS_ENDPOINT}`;

  let server = null;
  let groupDto;

  const getUserClientCredentials = async (credential:ClientCredentialsEnum) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<Repository<ClientCredentials>>(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({name: credential});
    return stringToBase64(
      `${clientCredentials.name}:${clientCredentials.secret}`,
    );
  }

  const createDefaultClientCredentialsForTesting = async () => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<Repository<ClientCredentials>>(getRepositoryToken(ClientCredentials));
    const scopeRepository:Repository<Scope> = moduleFixture.get<Repository<Scope>>(getRepositoryToken(Scope));

    let allScopes = await scopeRepository.find();
    let userReadPermission = allScopes.find(s => s.name == ScopeEnum.USER_READ);

    let userCredential = new ClientCredentials();
    userCredential.name = ClientCredentialsEnum["USER@APP"].toString();
    userCredential.secret = "OIDAIDOAHPDADH3232";
    userCredential.scopes = [userReadPermission];

    let pluginCredential = new ClientCredentials();
    pluginCredential.name = ClientCredentialsEnum["PLUGIN@APP"].toString();
    pluginCredential.secret = "8202ndhdskHauwbxmsksgsiyfewjlda890AAg0";
    pluginCredential.scopes = allScopes //All Scopes

    let adminCredential = new ClientCredentials();
    adminCredential.name = ClientCredentialsEnum["ADMIN@APP"].toString();
    adminCredential.secret = "a3NiYWtpcHFqSVkpOXctcWp3ZcOncW5xdXVUKFQ2NzcpKiYwNzAmKCkqKSnCqCk";
    adminCredential.scopes = allScopes; //All Scopes

    userCredential = await clientCredentialRepository.save(userCredential);
    pluginCredential = await clientCredentialRepository.save(pluginCredential);
    adminCredential = await clientCredentialRepository.save(adminCredential);
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
    jest.setTimeout(60000);
    return new Promise(async (resolve, reject) => {
      moduleFixture = await Test.createTestingModule({
        imports: [AppModule]
      }).compile();

      initializeTransactionalContext();
      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(new ValidationPipe({
        disableErrorMessages: false
      }));
      app.useGlobalFilters(new HttpExceptionFilter());
      app.use(RequestContextMiddleware);
      await app.init();


    
  
      setTimeout(async () => {
        const groupRepository: Repository<Group> = moduleFixture.get<Repository<Group>>(getRepositoryToken(Group));
        const adminGroup = await groupRepository.findOne({name: "admin"});
        groupDto = adminGroup as GroupDTO;
        
        await createDefaultClientCredentialsForTesting();
        authorization  = await getUserClientCredentials(ClientCredentialsEnum["USER@APP"]);    
        server = app.getHttpServer();  
        resolve();
      },4000);
  
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
      groups: [groupDto]
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
      groups: [groupDto]
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
      groups: [groupDto]
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
      groups: [groupDto]
    } as NewUserDTO;
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["USER@APP"]))
      .then(res => {
        return createUserRequest(user,res.body.accessToken)
        .expect(403)
        .then((newUserResponse) => {
            done();
        });
      });
  });  

  it('should find user by id', async done => {
    let user = {
      email: 'adminanother2@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
  });  

  it('should fail finding user by wrong id', async done => {
    let user = {
      email: 'adminanother3@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
  });  

  it('should find all users', async done => {
    let user = {
      email: 'adminanother4@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
  });  

  it('should delete user', async done => {
    let user = {
      email: 'user_for_delete@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
  });  

  it('should fail deleting user by wrong id', async done => {
    let user = {
      email: 'user_for_delete_fail@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
  });  

  it('should fail getting user from token using client credential token', async done => {   
    return defaultGrantRequest(await getUserClientCredentials(ClientCredentialsEnum["ADMIN@APP"]))
      .then(res => {       
          getRequest(res.body.accessToken,`${userUrl}/me`)
          .expect(404)
          .then((response) => {
            done();
          })
      });
  });  

  it('should get user from token (logged user)', async done => {   
    let user = {
      email: 'user_for_testing_me@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
      groups: [groupDto]
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
      groups: [groupDto]
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
  });  

  it('should throw error on password change (differente passwords)', async done => {   
    let user = {
      email: 'user_for_testing_me_4@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
  }); 

  it('should create forgot password request', async done => {   
    let user = {
      email: 'testforemailcms@gmail.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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


  it('should change my password by username', async done => {   
    let user = {
      email: 'user_chahnge_own_pass@email.com',
      password: 'password',
      name: 'myname',
      groups: [groupDto]
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
             username: user.email,
             password : "password",
             newPassword: "abcdefg",
             confirmNewPassword: "abcdefg"
            } as ChangePasswordDTO
            updateRequest(request,res.body.accessToken,`${userUrl}/me/change-password`)
            .expect(200)
            .then((response) => {  
              expect(response.body.name).toBe(user.name);
              expect(response.body.email).toBe(user.email);
              expect(response.body.mustChangePassword).toBe(false);
              done();
            })
        })
      });
    });
  },30000); 




  afterAll(async () => {
    await app.close();
  });
});
