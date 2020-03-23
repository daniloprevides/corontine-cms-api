import { AuthorizationCodeDTO } from './../dto/authorization-code.dto';
import { AuthorizationCode } from '../entity/authorization-code.entity';
import { AuthorizationCodeRepository } from './../repository/authorization-code.repository';
import { ClientCredentialsRepository } from './../repository/client-credentials.repository';
import { v4 as uuidv4 } from 'uuid';

import { 
  forwardRef,
  Inject,
  Injectable,
  BadRequestException,
} from '@nestjs/common';

import { Transactional } from 'typeorm-transactional-cls-hooked';
import { ScopeRepository } from '../repository/scope.repository';
import { RequestAuthorizationCodeDTO } from '../dto/request-authorization-code.dto';



@Injectable()
export class AuthorizationCodeService {
  constructor(    
    @Inject(forwardRef(() => AuthorizationCodeRepository))
    private readonly repository: AuthorizationCodeRepository,
    @Inject(forwardRef(() => ScopeRepository))
    private readonly scopeRepository: ScopeRepository,  
    @Inject(forwardRef(() => ClientCredentialsRepository))
    private readonly clientCredentialRepository: ClientCredentialsRepository,          
    ) {}

  @Transactional()
  public async getAll(): Promise<AuthorizationCode[]> {
    return this.repository.find({
      relations: ['scopes']
    });
  }

  @Transactional()
  public async getById(id:string): Promise<AuthorizationCode> {
    return this.repository.findOne(id,{
      relations: ['scopes']
    });
  }

  @Transactional()
  public async addNewCode(name:string, state:string, url:string): Promise<AuthorizationCode> {
    const authorizationCode = new AuthorizationCode();
    authorizationCode.app_name = name;
    authorizationCode.code = uuidv4();
    authorizationCode.consumed = false;
    authorizationCode.redirect_uri = url;
    authorizationCode.state = state;
    return this.repository.save(authorizationCode);
  }




  @Transactional()
  public async add(authorizationCode:RequestAuthorizationCodeDTO): Promise<AuthorizationCode> {
    const code = uuidv4();
    let clientCredential = await this.clientCredentialRepository.findOne({where: {name: authorizationCode.client_id}});
    if (!clientCredential) throw new BadRequestException("Client credentials not found");
    let scopesArray = authorizationCode.scope.split(" ");
    
    //finding all scopes by name
    const scopes = [];
    for (let scope of scopesArray){
      const currentScope = await this.scopeRepository.findOne({where: {name: scope}});
      if (currentScope) scopes.push(currentScope);
      //IF SCOPE NOT FOUND, IN THIS CASE, ONLY NOT ADDING
    }    

    return this.repository.save({
      code: code,
      state: authorizationCode.state,
      redirect_uri: authorizationCode.redirect_uri,
      scopes: scopes ,
      app_name: clientCredential.name
    })
  }



}
