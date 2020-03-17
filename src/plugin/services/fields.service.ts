import { AttributesRepository } from './../repository/attributes.repository';
import { NewFieldsDto } from "./../dto/new-fields.dto";
import { FieldsRepository } from "./../repository/fields.repository";
import {GenericService} from "../../commons/services/generic.service";
import { Fields } from "../entity/fields.entity";
import { UpdateFieldsDto } from "../dto/update-fields.dto";
import { Injectable, Inject, forwardRef } from "@nestjs/common";

@Injectable()
export class FieldsService extends GenericService<
  Fields,
  FieldsRepository,
  NewFieldsDto,
  UpdateFieldsDto
> {
  constructor(
    @Inject(forwardRef(() => FieldsRepository))
    public readonly fieldsRepository: FieldsRepository,
    @Inject(forwardRef(() => AttributesRepository))
    public readonly attributesRepository: AttributesRepository    
    ) {
    super(fieldsRepository, "Fields");
  }

  setNeededFieldsOnChildren(clientId:string, item:Fields){
    item?.attributes?.forEach(f => f.clientId = clientId);
  }

  public async validateParent(clientId:string, id:string): Promise<boolean>{
    return await this.attributesRepository.findOne({where: {clientId: clientId, id: id}}) != null;
  }

  protected getRelations(): Array<string> {
    return ["attributes","events"];
  }
}
