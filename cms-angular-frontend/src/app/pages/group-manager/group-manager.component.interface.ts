import { PaginatorDTO } from 'src/app/dto/paginator.dto';
import { GroupDTO } from 'src/app/dto/group.dto';
import { ScopeDTO } from 'src/app/dto/scope.dto';

export interface GroupManagerComponentInterface {
  columns: Array<any>;
  data: PaginatorDTO<GroupDTO>;
  allscopes?: PaginatorDTO<ScopeDTO>;
  i18n?:any;
}
