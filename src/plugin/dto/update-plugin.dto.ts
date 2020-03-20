import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, PageRequirePermission, PermissionsDefinition } from '../../commons/annotations/expose-field-name.decorator';
import { Plugin } from "./../entity/plugin.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import { NewComponentsDto } from "./new-components.dto";
import { ScopeEnum } from '../enum/scope.enum';
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.PLUGIN_UPDATE,ScopeEnum.PLUGIN_CREATE, ScopeEnum.PLUGIN_DELETE))
export class UpdatePluginDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {readonly: true}))
  id: Plugin["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
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
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  accessToken: Plugin["accessToken"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  pluginType: Plugin["pluginType"];

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
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  environment: Plugin["environment"];

  @ApiProperty({ type: () => NewComponentsDto })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("table-data", {
      sourcefield: "components",
      api: "Components",
      page: "edit-component",
      sortable: true,
      filterable: true,
      size: 10,
      pageAdd: "add-component",
      targetfield: "plugin",
      isArray: false,
      crud: true,
      fieldDefinition: [
        {
          name: "name",
          value: "Name",
          order: 1,
          visible: true,
          component: "label"
        }
      ]
    })
  )
  @ExposeFieldNamesForPage(
    new ComponentDefinition("title-data", {
      text: "Components", position: "center", description: "Components attached",  titleType: "subtitle"
  }))
  components: NewComponentsDto[];
}
