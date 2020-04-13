import { PaginatorDTO } from 'src/app/dto/paginator.dto';

export interface TableDataComponentInterface<T> {
  data:PaginatorDTO<T>;
  columns: Array<any>;
  selectable: boolean;
}
