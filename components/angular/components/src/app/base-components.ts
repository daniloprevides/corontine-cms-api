/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Input } from '@angular/core';
import { FindParamsDto } from './find-params.dto';
import { PluginDto } from './plugin.dto';
import { PageModel } from './page-model.dto';
import { NotificationInterface } from './interfaces/notification.interface';

export interface PaginatedResponse<T = any>{
  items:Array<T>;
  itemCount: number;
  totalItems:number;
  pageCount:number;
  next:string;
  previous:string;
}

type getList<T = any> = (params?:FindParamsDto, url?: string) => Promise<PaginatedResponse<T>>;
type getOne<T = any> = (url?: string) => Promise<T>;
type createItem<T = any> = (item:any, url?: string) => Promise<T>;
type updateItem<T = any> = (item:any, url?: string, ) => Promise<T>;
type deleteItem = (id:string,url?: string) => Promise<void>;

export class BaseComponents {
    @Input()
    public plugins:Array<PluginDto> = [];
    @Input()
    public api:PluginDto = {} as PluginDto;
    @Input()
    public pageapi:PluginDto = {} as  PluginDto;
    @Input()
    public scopes:Array<string> = [];
    @Input()
    public pageModel:PageModel = {} as PageModel;
    @Input()
    public notificationService:NotificationInterface = {info: (message:string) => {}, error: (message:string) => {}} as NotificationInterface;

    @Input()
    public getList:getList;
    @Input()
    public getOne:getOne;
    @Input()
    public createItem:createItem;
    @Input()
    public updateItem:updateItem;
    @Input()
    public deleteItem:deleteItem;



    dispatch(element:any,eventName:string, data:any){
      element.dispatchEvent(
        new CustomEvent(eventName, {
          composed: true,
          // cancelable: true,
          bubbles: true,
          detail: data
        })
      );
    }


}
