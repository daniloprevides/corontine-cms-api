import { NewComponentsDto } from './new-components.dto';
import { NewAttributesDto } from './new-attributes.dto';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";

export class UpdateFieldsDto {
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

  @ApiProperty({ type: () => NewAttributesDto })
  @IsOptional()
  @Expose()
  attributes: NewAttributesDto[];

  @ApiProperty({ type: () => String })
  @Expose()
  component: String;
}
