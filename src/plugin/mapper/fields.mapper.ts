import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { Fields } from '../entity/fields.entity';
import { FieldsDto } from '../dto/fields.dto';

@Injectable()
export class FieldsMapper extends Mapper<Fields, FieldsDto> {
  constructor() {
    super(Fields, FieldsDto);
  }

  toDto(entityObject: Fields): FieldsDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Fields[]): FieldsDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: FieldsDto): Fields {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: FieldsDto[]): Fields[] {
    return super.toEntityList(dtoArray);
  }
}
