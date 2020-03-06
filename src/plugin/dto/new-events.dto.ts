import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Events } from "../entity/events.entity";

export class NewEventsDto {
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

  @ApiProperty({ type: () => String })
  @IsOptional()
  @Expose()
  field: String;
}
