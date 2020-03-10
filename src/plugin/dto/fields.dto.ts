import { ComponentsDto } from "./components.dto";
import { AttributesDto } from "./attributes.dto";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";
import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";

export class FieldsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  id: Fields["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Fields["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description: Fields["description"];

  @ApiProperty({ type: () => AttributesDto })
  @Expose()
  @ExposeFieldName
  attributes: AttributesDto[];

  @ApiProperty({ type: () => ComponentsDto })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  component: ComponentsDto;
}
