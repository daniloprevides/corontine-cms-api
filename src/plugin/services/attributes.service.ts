import { ComponentsRepository } from './../repository/components.repository';
import { UpdateAttributesDto } from "./../dto/update-attributes.dto";
import { NewAttributesDto } from "./../dto/new-attributes.dto";
import { AttributesRepository } from "./../repository/attributes.repository";
import { Attributes } from "./../entity/attributes.entity";
import {GenericService} from "../../commons/services/generic.service";
import { Injectable, Inject, forwardRef } from "@nestjs/common";

@Injectable()
export class AttributeService extends GenericService<
  Attributes,
  AttributesRepository,
  NewAttributesDto,
  UpdateAttributesDto
> {

  constructor(
    @Inject(forwardRef(() => AttributesRepository))
    public readonly attributesRepository: AttributesRepository,
    @Inject(forwardRef(() => ComponentsRepository))
    public readonly componentsRepository: ComponentsRepository
    
    ) {
    super(attributesRepository, "Atributes");
  }

  public async validateParent(clientId: string, id: string): Promise<boolean> {
    return await this.componentsRepository.findOne({where: {clientId: clientId, id: id}}) != null;
  }

  protected getRelations(): Array<string> {
    return ["field"];
  }
}
