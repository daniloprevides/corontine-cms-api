export class PaginatorDTO<T>{
  items: Array<T>;
  itemCount: number;
  totalItems:number;
  pageCount:number;
  next?:string;
  previous?:string;
}
