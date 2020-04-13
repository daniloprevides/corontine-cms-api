import { PaginatorDTO } from 'src/app/dto/paginator.dto';
import { GroupDTO } from 'src/app/dto/group.dto';
import { MenuDTO } from 'src/app/dto/menu.dto';
import { PageDTO } from 'src/app/dto/page.dto';

export interface AddonManagerComponentInterface {
  menuItems:Array<MenuDTO>;
  permissions:Array<string>;
  pageItems:PaginatorDTO<PageDTO>;
}
