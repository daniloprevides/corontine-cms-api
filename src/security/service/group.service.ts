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

@Injectable()
export class GroupService extends GenericService<Group,GroupRepository,NewGroupDTO, UpdateGroupDTO>{
  
  constructor(    
    @Inject(forwardRef(() => GroupRepository))
    public readonly repository: GroupRepository,
    @Inject(forwardRef(() => ScopeRepository))
    public readonly scopeRepository: ScopeRepository,

    ) {
      super(repository,"Group")
    }
  
    public async validateParent(clientId:string, id:string): Promise<boolean>{
      return true;
    }
  
    protected getRelations(): Array<string> {
      return ["scopes"];
    }

}
