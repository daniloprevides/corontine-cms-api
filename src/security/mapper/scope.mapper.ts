import { UpdateGroupDTO } from "./../dto/update-group.dto";
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { Group } from "../entity/group.entity";
import { GroupDTO } from "../dto/group.dto";
import { ScopeDTO } from "../dto/scope.dto";
import { Scope } from "../entity/scope.entity";

@Injectable()
export class ScopeMapper extends Mapper<Scope, ScopeDTO> {
  constructor() {
    super(Scope, ScopeDTO);
  }

  toDto(entityObject: Scope): ScopeDTO {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Scope[]): ScopeDTO[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: ScopeDTO): Scope {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: ScopeDTO[]): Scope[] {
    return super.toEntityList(dtoArray);
  }
}
