import { Events } from "./../entity/events.entity";
import { FieldsDto } from "./fields.dto";
import { NewFieldsDto } from "./new-fields.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";

export class EventsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  id: Events["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Events["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description?: Events["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  outputObjectDefinition?: Events["outputObjectDefinition"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  outputType?: Events["outputType"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  defaultValue?: Events["defaultValue"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  @ExposeFieldName
  FieldsDto: FieldsDto;
}
