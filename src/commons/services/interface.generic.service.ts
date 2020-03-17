import { BasicEntity } from "../entity/basic.entity";
import { FindParamsDto } from "../dto/find-params.dto";
import {Pagination} from 'nestjs-typeorm-paginate';
import { FieldNamesDto } from "../dto/field-names-dto";

export interface GenericServiceInterface<E extends BasicEntity,NEWDTO,UPDATEDTO> {
    getAll(findParamsDto:FindParamsDto ,url?:string,clientId?:string,relations?: Array<string>): Promise<Pagination<E>>
    findById(id: E["id"], clientId?:string, relations?: Array<string>): Promise<E>;
    findByName(name: string, clientId?:string, relations?: Array<string>): Promise<E>;    
    add(item: NEWDTO,clientId:string): Promise<E>;
    delete(id: E["id"],clientId?:string): Promise<void>;
    update(id: E["id"], updateInfo: UPDATEDTO, clientId:string): Promise<E>;
    validateParent(clientId:string, id:string) : Promise<boolean>;
    getFieldNames(newItem:any, updateItem:any, listItem:any) : Promise<FieldNamesDto>;

}