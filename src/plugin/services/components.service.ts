import { UpdateComponentsDto } from "./../dto/update-components.dto";
import { NewComponentsDto } from "./../dto/new-components.dto";
import { ComponentsRepository } from "../repository/components.repository";
import { Components } from "./../entity/components.entity";
import {GenericService} from "../../commons/services/generic.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ComponentsService extends GenericService<
  Components,
  ComponentsRepository,
  NewComponentsDto,
  UpdateComponentsDto
> {
  constructor(public readonly componentsRepository: ComponentsRepository) {
    super(componentsRepository, "Components");
  }

  protected getRelations(): Array<string> {
    return ["fields"];
  }
}
