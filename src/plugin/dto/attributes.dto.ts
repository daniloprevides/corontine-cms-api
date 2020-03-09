import { FieldsDto } from './fields.dto';
import { NewFieldsDto } from "./new-fields.dto";
import { Attributes } from "./../entity/attributes.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class AttributesDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Attributes["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Attributes["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description?: Attributes["description"];

  @ApiProperty()
  @Expose()
  value: Attributes["value"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  required: Attributes["required"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  defaultValue: Attributes["defaultValue"];

  @ApiProperty()
  @IsString()
  @Expose()
  type: Attributes["type"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  FieldsDto: FieldsDto;
}
