import { AttributesDto } from './../dto/attributes.dto';
import { Attributes } from './../entity/attributes.entity';
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";

@Injectable()
export class AttributesMapper extends Mapper<Attributes, AttributesDto> {
  constructor() {
    super(Attributes, AttributesDto);
  }

  toDto(entityObject: Attributes): AttributesDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Attributes[]): AttributesDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: AttributesDto): Attributes {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: AttributesDto[]): Attributes[] {
    return super.toEntityList(dtoArray);
  }
}
