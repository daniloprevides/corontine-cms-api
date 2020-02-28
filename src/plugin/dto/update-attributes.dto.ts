import { NewFieldsDto } from "./new-fields.dto";
import { Attributes } from "./../entity/attributes.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateAttributesDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Attributes["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Attributes["name"];

  @ApiProperty()
  @Expose()
  value: Attributes["value"];

  @ApiProperty()
  @Expose()
  definition: Attributes["definition"];

  @ApiProperty()
  @IsString()
  @Expose()
  type: Attributes["type"];

  @ApiProperty({ type: () => NewFieldsDto })
  @Expose()
  field: NewFieldsDto;
}
