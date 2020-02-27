import { UpdateAttributesDto } from "./../dto/update-attributes.dto";
import { NewAttributesDto } from "./../dto/new-attributes.dto";
import { AttributesRepository } from "./../repository/attributes.repository";
import { Attributes } from "./../entity/attributes.entity";
import {GenericService} from "../../commons/services/generic.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AttributeService extends GenericService<
  Attributes,
  AttributesRepository,
  NewAttributesDto,
  UpdateAttributesDto
> {
  constructor(public readonly attributesRepository: AttributesRepository) {
    super(attributesRepository, "Atributes");
  }

  protected getRelations(): Array<string> {
    return ["field"];
  }
}
