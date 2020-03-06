import { ComponentsDto } from './components.dto';
import { AttributesDto } from './attributes.dto';
import { NewAttributesDto } from './new-attributes.dto';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";

export class FieldsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Fields["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Fields["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description: Fields["description"];

  @ApiProperty({ type: () => AttributesDto })
  @Expose()
  attributes: AttributesDto[];

  @ApiProperty({ type: () => ComponentsDto })
  @IsOptional()
  @Expose()
  component: ComponentsDto;
}
