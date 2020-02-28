import { BasicEntity } from "../entity/basic.entity";
import { FindParamsDto } from "../dto/find-params.dto";
import {Pagination} from 'nestjs-typeorm-paginate';

export interface GenericServiceInterface<E extends BasicEntity,NEWDTO,UPDATEDTO> {
    getAll(findParamsDto:FindParamsDto ,url?:string,relations?: Array<string>): Promise<Pagination<E>>
    findById(id: E["id"], relations?: Array<string>): Promise<E>;
    add(group: NEWDTO): Promise<E>;
    delete(id: E["id"]): Promise<void>;
    update(id: E["id"], updateInfo: UPDATEDTO): Promise<E>;
}