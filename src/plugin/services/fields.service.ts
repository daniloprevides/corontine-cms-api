import { NewFieldsDto } from "./../dto/new-fields.dto";
import { FieldsRepository } from "./../repository/fields.repository";
import {GenericService} from "../../commons/services/generic.service";
import { Fields } from "../entity/fields.entity";
import { UpdateFieldsDto } from "../dto/update-fields.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FieldsService extends GenericService<
  Fields,
  FieldsRepository,
  NewFieldsDto,
  UpdateFieldsDto
> {
  constructor(public readonly fieldsRepository: FieldsRepository) {
    super(fieldsRepository, "Fields");
  }

  protected getRelations(): Array<string> {
    return ["attributes"];
  }
}
