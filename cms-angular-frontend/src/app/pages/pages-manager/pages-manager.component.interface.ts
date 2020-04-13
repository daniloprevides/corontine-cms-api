import { PaginatorDTO } from 'src/app/dto/paginator.dto';
import { PageDTO } from 'src/app/dto/page.dto';

export interface PagesManagerComponentInterface {
  data: PaginatorDTO<PageDTO>
}
