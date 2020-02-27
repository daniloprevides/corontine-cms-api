import { UpdateGroupDTO } from "./../dto/update-group.dto";
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { Group } from "../entity/group.entity";
import { GroupDTO } from "../dto/group.dto";

@Injectable()
export class GroupMapper extends Mapper<Group, GroupDTO> {
  constructor() {
    super(Group, GroupDTO);
  }

  toDto(entityObject: Group): GroupDTO {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Group[]): GroupDTO[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: GroupDTO): Group {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: GroupDTO[]): Group[] {
    return super.toEntityList(dtoArray);
  }
}
