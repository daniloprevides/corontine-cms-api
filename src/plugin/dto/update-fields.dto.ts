import { ExposeFieldName } from '../../commons/annotations/expose-field-name.decorator';
import { NewComponentsDto } from "./new-components.dto";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";

export class UpdateFieldsDto {
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

  @ApiProperty({ type: () => NewAttributesDto })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  attributes: NewAttributesDto[];

  @ApiProperty({ type: () => String })
  @Expose()
  @ExposeFieldName
  component: String;
}
