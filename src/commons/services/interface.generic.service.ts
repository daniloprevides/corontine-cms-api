import { BasicEntity } from "../entity/basic.entity";

export interface GenericServiceInterface<E extends BasicEntity,NEWDTO,UPDATEDTO> {
    getAll(relations?: Array<string>): Promise<E[]>;
    findById(id: E["id"], relations?: Array<string>): Promise<E>;
    add(group: NEWDTO): Promise<E>;
    delete(id: E["id"]): Promise<void>;
    update(id: E["id"], updateInfo: UPDATEDTO): Promise<E>;
}