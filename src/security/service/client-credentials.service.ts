import { ClientCredentialsDTO } from './../dto/client-credentials.dto';
import { ScopeRepository } from './../repository/scope.repository';
import { NewClientCredentialsDTO } from './../dto/new-client-credentials.dto';
import { ClientCredentials } from './../entity/client-credentials.entity';
import { ClientCredentialsRepository } from './../repository/client-credentials.repository';
import {
  BadRequestException,
  ConflictException,
  forwardRef,
  GoneException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { Transactional } from 'typeorm-transactional-cls-hooked';

import { Scope } from '../entity/scope.entity';
import { InvalidClientCredentialsError } from '../exception/invalid-client-credentials.error';
import { UpdateClientCredentialsDTO } from '../dto/update-client-credentials.dto';
import {v4} from 'uuid';

@Injectable()
export class ClientCredentialsService {
  constructor(    
    @Inject(forwardRef(() => ClientCredentialsRepository))
    private readonly repository: ClientCredentialsRepository,
    @Inject(forwardRef(() => ScopeRepository))
    private readonly scopeRepository: ScopeRepository,

    ) {}

  @Transactional()
  public async getAll(): Promise<ClientCredentials[]> {
    return this.repository.find({
      relations: ['scopes']
    });
  }

  @Transactional()
  public async findById(id: ClientCredentials['id']): Promise<ClientCredentials> {
    const credentials: ClientCredentials | undefined = await this.repository.findOne(id, {
      relations: ['scopes'],
    });
    if (!credentials) {
      throw new NotFoundException('Credentials not found');
    }
    return credentials;
  }

  public async generate(credential: NewClientCredentialsDTO, update = false): Promise<ClientCredentials> {
    //Creating the scopes
    try {
      //checking if plugin name already exists
      const addon = await this.repository.findOne({name: credential.name});
      let item = {
        name: credential.name,
        secret: v4(),
        scopes: credential.scopes
      } as ClientCredentials
      if (addon){
        console.debug(`Addon ${credential.name} already exists, updating ${update}`);
        if (update){
          item.id = addon.id;
          //Generating new secret, so if someone try to get secret that already exists wont be able
          item.scopes = credential.scopes as any;
        }
      }

      const savedItem = await this.repository.save(item);

      return savedItem;
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY' || e.code === "SQLITE_CONSTRAINT") {
        throw new ConflictException('Client Credential Already Exists');
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  @Transactional()
  public async add(credential: NewClientCredentialsDTO): Promise<ClientCredentials> {
    //Creating the scopes
    let scopes = new Array<Scope>();
    if (credential.scopes){
      for (let scope of credential.scopes){
        let currentScope = await this.scopeRepository.findOne({where: {name: scope.name}});
        if (!currentScope){
          currentScope = await this.scopeRepository.save(scope);
        }
        scopes.push(currentScope);
      }
    }

    try {
      const savedItem = await this.repository.save({
        name: credential.name,
        secret: credential.secret,
        scopes: scopes
      });

      return savedItem;
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY' || e.code === "SQLITE_CONSTRAINT") {
        throw new ConflictException('Client Credential Already Exists');
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  @Transactional()
  public async delete(id: ClientCredentials['id']): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }

  @Transactional()
  public async update(
    id: ClientCredentials['id'],
    updateInfo: UpdateClientCredentialsDTO,
  ): Promise<ClientCredentialsDTO> {
    const credential: ClientCredentials = await this.findById(id);
    if (!credential){
      throw new InvalidClientCredentialsError();
    }

    let scopes = new Array<Scope>();
    if (updateInfo.scopes){
      for (let scope of updateInfo.scopes){
        let currentScope = await this.scopeRepository.findOne({where: {name: scope.name}});
        if (!currentScope){
          currentScope = await this.scopeRepository.save(scope);
        }
        scopes.push(currentScope);
      }
    }

    return await this.repository.save(
      {
        name: updateInfo.name,
        secret: updateInfo.secret ? updateInfo.secret : credential.secret,
        scopes: scopes
      }
    );
  }


}
