import { UpdateGroupDTO } from './../dto/update-group.dto';
import { NewGroupDTO } from './../dto/new-group.dto';
import { GroupRepository } from './../repository/group.repository';
import { ScopeRepository } from './../repository/scope.repository';
import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { Transactional } from 'typeorm-transactional-cls-hooked';

import { Scope } from '../entity/scope.entity';
import { InvalidClientCredentialsError } from '../exception/invalid-client-credentials.error';
import { Group } from '../entity/group.entity';

@Injectable()
export class GroupService {
  constructor(    
    @Inject(forwardRef(() => GroupRepository))
    private readonly repository: GroupRepository,
    @Inject(forwardRef(() => ScopeRepository))
    private readonly scopeRepository: ScopeRepository,

    ) {}

  @Transactional()
  public async getAll(): Promise<Group[]> {
    return this.repository.find({
      relations: ['scopes']
    });
  }

  @Transactional()
  public async findById(id: Group['id']): Promise<Group> {
    const group: Group | undefined = await this.repository.findOne(id, {
      relations: ['scopes'],
    });
    if (!group) {
      throw new NotFoundException('Group not found');
    }
    return group;
  }

  @Transactional()
  public async add(group: NewGroupDTO): Promise<Group> {
    //Creating the scopes
    let scopes = new Array<Scope>();
    if (group.scopes){
      for (let scope of group.scopes){
        let currentScope = await this.scopeRepository.findOne({where: {name: scope}});
        if (!currentScope){
          throw new NotFoundException();
        }
        scopes.push(currentScope);
      }
    }

    try {
      const savedItem = await this.repository.save({
        name: group.name,
        description: group.description,
        scopes: scopes
      });

      return savedItem;
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY' || e.code === "SQLITE_CONSTRAINT") {
        throw new ConflictException('Group Already Exists');
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  @Transactional()
  public async delete(id: Group['id']): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }

  @Transactional()
  public async update(
    id: Group['id'],
    updateInfo: UpdateGroupDTO,
  ): Promise<Group> {
    const group: Group = await this.findById(id);
    if (!group){
      throw new NotFoundException();
    }

    let scopes = new Array<Scope>();
    if (updateInfo.scopes){
      for (let scope of updateInfo.scopes){
        let currentScope = await this.scopeRepository.findOne({where: {name: scope}});
        if (!currentScope){
          throw new NotFoundException();
        }
        scopes.push(currentScope);
      }
    }

    return await this.repository.save(
      {
        name: updateInfo.name,
        description: updateInfo.description,
        scopes: scopes
      }
    );
  }


}
