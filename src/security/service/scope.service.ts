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
import { Group } from '../entity/group.entity';
import { GenericService } from '../../commons/services/generic.service';
import { Scope } from '../entity/scope.entity';
import { NewScopeDTO } from '../dto/new-scope.dto';
import { UpdateScopeDTO } from '../dto/update-scope.dto';

@Injectable()
export class ScopeService extends GenericService<Scope,ScopeRepository,NewScopeDTO, UpdateScopeDTO>{
  
  constructor(    
    @Inject(forwardRef(() => ScopeRepository))
    public readonly scopeRepository: ScopeRepository,
    @Inject(forwardRef(() => GroupRepository))
    public readonly groupRepository : GroupRepository

    ) {
      super(scopeRepository,"Scope")
    }

    public async add(item: NewScopeDTO, clientId?: string): Promise<Scope> {
      //Add new scope, and then add scope to admin group
      const newItem = await super.add(item,clientId);

      const adminGroup = await this.groupRepository.findOne({where: {isAdmin: true}, relations: ["scopes"]});
      if (adminGroup){
        adminGroup.scopes.push(newItem);
        await this.groupRepository.save(adminGroup);
      }

      return newItem;
    }

  
    public async validateParent(clientId:string, id:string): Promise<boolean>{
      return true;
    }
  
    protected getRelations(): Array<string> {
      return ["groups"];
    }

}
