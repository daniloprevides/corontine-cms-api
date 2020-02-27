import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { Components } from '../entity/components.entity';
import { ComponentsDto } from '../dto/components.dto';

@Injectable()
export class ComponentsMapper extends Mapper<Components, ComponentsDto> {
  constructor() {
    super(Components, ComponentsDto);
  }

  toDto(entityObject: Components): ComponentsDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Components[]): ComponentsDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: ComponentsDto): Components {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: ComponentsDto[]): Components[] {
    return super.toEntityList(dtoArray);
  }
}
