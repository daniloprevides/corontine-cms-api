import { FieldsDto } from './fields.dto';
import { PluginDto } from './plugin.dto';
import { Components } from './../entity/components.entity';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class ComponentsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Components["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Components["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description: Components["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  informationUrl: Components["informationUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  url: Components["url"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  fields: FieldsDto[];

  @ApiProperty({ type: () => PluginDto })
  @Expose()
  plugin: PluginDto;


}
