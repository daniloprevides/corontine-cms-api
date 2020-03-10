import { Plugin } from './../entity/plugin.entity';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean, IsFQDN } from "class-validator";
import { NewComponentsDto } from './new-components.dto';
import { ExposeFieldName } from '../../commons/annotations/expose-field-name.decorator';

export class NewPluginDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Plugin["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description: Plugin["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  componentsUrl: Plugin["componentsUrl"];
  
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  apiUrl: Plugin["apiUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  addUrl: Plugin["addUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  removeUrl: Plugin["removeUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  updateUrl: Plugin["updateUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  getUrl: Plugin["getUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  getAllUrl: Plugin["getAllUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  accessToken: Plugin["accessToken"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  tokenType: Plugin["tokenType"];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  enabled: Plugin["enabled"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  environment: Plugin["environment"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  pluginType: Plugin["pluginType"];

  @ApiProperty({ type: () => NewComponentsDto })
  @Expose()  
  @IsOptional()
  @ExposeFieldName
  components: NewComponentsDto[];

  clientId:string;
}
