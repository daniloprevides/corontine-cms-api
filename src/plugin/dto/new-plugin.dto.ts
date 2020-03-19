import { Plugin } from './../entity/plugin.entity';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean, IsFQDN } from "class-validator";
import { NewComponentsDto } from './new-components.dto';
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, PageRequirePermission, PermissionsDefinition } from '../../commons/annotations/expose-field-name.decorator';
import { ScopeEnum } from '../enum/scope.enum';

@PageRequirePermission(new PermissionsDefinition(ScopeEnum.PLUGIN_CREATE,ScopeEnum.PLUGIN_CREATE, ScopeEnum.PLUGIN_DELETE))
export class NewPluginDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  name: Plugin["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  description: Plugin["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  componentsUrl: Plugin["componentsUrl"];
  
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  apiUrl: Plugin["apiUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  addUrl: Plugin["addUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  removeUrl: Plugin["removeUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  updateUrl: Plugin["updateUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  getUrl: Plugin["getUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  getAllUrl: Plugin["getAllUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  accessToken: Plugin["accessToken"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  tokenType: Plugin["tokenType"];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  enabled: Plugin["enabled"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  environment: Plugin["environment"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  pluginType: Plugin["pluginType"];

  @ApiProperty({ type: () => NewComponentsDto })
  @Expose()  
  @IsOptional()
  @ExposeFieldName
  components: NewComponentsDto[];

  clientId:string;
}
