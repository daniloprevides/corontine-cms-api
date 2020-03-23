import { Plugin } from "./../entity/plugin.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import { NewComponentsDto } from "./new-components.dto";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  ListComponent,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { ScopeEnum } from "../enum/scope.enum";
@ListComponent("edit-plugin", "Plugins")
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.PLUGIN_READ,ScopeEnum.PLUGIN_CREATE, ScopeEnum.PLUGIN_DELETE))
export class PluginDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: Plugin["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))  
  name: Plugin["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))  
  description: Plugin["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 4, visible: true}))  
  componentsUrl: Plugin["componentsUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 5, visible: false}))
  apiUrl: Plugin["apiUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 6, visible: false}))
  addUrl: Plugin["addUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 7, visible: false}))
  removeUrl: Plugin["removeUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 8, visible: false}))
  updateUrl: Plugin["updateUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 9, visible: false}))
  getUrl: Plugin["getUrl"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 10, visible: false}))
  getAllUrl: Plugin["getAllUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 11, visible: false}))
  accessToken: Plugin["accessToken"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 12, visible: false}))
  tokenType: Plugin["tokenType"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 13, visible: false}))
  pluginType: Plugin["pluginType"];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 14, visible: false}))
  enabled: Plugin["enabled"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 15, visible: true}))
  environment: Plugin["environment"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 16, visible: false}))
  clientId: Plugin["clientId"];

  @ApiProperty({ type: () => NewComponentsDto })
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  components: NewComponentsDto[];
}
