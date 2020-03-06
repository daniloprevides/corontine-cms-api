import { Plugin } from './../entity/plugin.entity';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import { NewComponentsDto } from './new-components.dto';

export class UpdatePluginDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Plugin["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Plugin["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description: Plugin["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  componentsUrl: Plugin["componentsUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  apiUrl: Plugin["apiUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  addUrl: Plugin["addUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  removeUrl: Plugin["removeUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  updateUrl: Plugin["updateUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  getUrl: Plugin["getUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  getAllUrl: Plugin["getAllUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @IsOptional()
  accessToken: Plugin["accessToken"];

  @ApiProperty()
  @IsString()
  @Expose()
  pluginType: Plugin["pluginType"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  tokenType: Plugin["tokenType"];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Expose()
  enabled: Plugin["enabled"];

  @ApiProperty()
  @IsString()
  @Expose()
  environment: Plugin["environment"];

  @ApiProperty({ type: () => NewComponentsDto })
  @IsOptional()
  @Expose()  
  components: NewComponentsDto[];
}
