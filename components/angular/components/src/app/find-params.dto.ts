export class FindParamsDto {
  page = 0;
  limit = 10;
  q: string;
  sort: any;
  relations?: string;
}
