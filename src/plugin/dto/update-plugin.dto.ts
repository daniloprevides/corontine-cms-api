import { Plugin } from './../entity/plugin.entity';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import { NewComponentsDto } from './new-components.dto';

export class UpdatePluginDto {
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
  @Expose()
  apiUrl: Plugin["apiUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  addUrl: Plugin["addUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  removeUrl: Plugin["removeUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  updateUrl: Plugin["updateUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  getUrl: Plugin["getUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  getAllUrl: Plugin["getAllUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @IsOptional()
  accessToken: Plugin["accessToken"];

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
  @IsString()
  @Expose()  
  components: NewComponentsDto[];
}
