import { FieldsDto } from "./fields.dto";
import { NewFieldsDto } from "./new-fields.dto";
import { Attributes } from "./../entity/attributes.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";

export class AttributesDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  id: Attributes["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Attributes["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description?: Attributes["description"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  value: Attributes["value"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  required: Attributes["required"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  defaultValue: Attributes["defaultValue"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  type: Attributes["type"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  attributeType: Attributes["attributeType"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  @ExposeFieldName
  FieldsDto: FieldsDto;
}
