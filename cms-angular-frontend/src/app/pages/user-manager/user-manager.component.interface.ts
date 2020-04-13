import { PaginatorDTO } from 'src/app/dto/paginator.dto';
import { UserDTO } from 'src/app/dto/user.dto';
import { GroupDTO } from 'src/app/dto/group.dto';

export interface UserManagerComponentInterface {
  columns: Array<any>;
  data: PaginatorDTO<UserDTO>;
  groups?: GroupDTO[],
  i18n?: any;
}
