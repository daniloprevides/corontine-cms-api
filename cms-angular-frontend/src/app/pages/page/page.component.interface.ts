import { FindParamsDto } from 'src/app/dto/find-params.dto';
import { PaginatorDTO } from 'src/app/dto/paginator.dto';
import { PageDTO } from 'src/app/dto/page.dto';

type getList<T = any> = (url:string, params:FindParamsDto, apiId: string) => Promise<PaginatorDTO<T>>;
type AddEventListener = (eventName:string, data:Function) => void;

export interface PageComponentInterface{
  getData: getList;
  data: PageDTO;
  permissions: Array<string>;
  applyValues: (model:any) => {};
  addEventListener:AddEventListener;
  validateData: () => any;
  getDataForSave: () => Promise<any>;
}
