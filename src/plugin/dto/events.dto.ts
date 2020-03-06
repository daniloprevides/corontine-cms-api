import { Events } from './../entity/events.entity';
import { FieldsDto } from './fields.dto';
import { NewFieldsDto } from "./new-fields.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class EventsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Events["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Events["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description?: Events["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  outputObjectDefinition?: Events["outputObjectDefinition"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  outputType?: Events["outputType"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  defaultValue?: Events["defaultValue"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  FieldsDto: FieldsDto;
}
