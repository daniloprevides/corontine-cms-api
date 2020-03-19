import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { NewPluginDto } from "./new-plugin.dto";
import { NewFieldsDto } from "./new-fields.dto";
import { Components } from "./../entity/components.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { PluginDto } from "./plugin.dto";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.COMPONENTS_UPDATE,ScopeEnum.COMPONENTS_CREATE, ScopeEnum.COMPONENTS_DELETE))
export class UpdateComponentsDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {readonly: true}))
  @ExposeFieldName
  id: Components["id"];

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  name: Components["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  description: Components["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  informationUrl: Components["informationUrl"];

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  url: Components["url"];

  @ApiProperty({ type: () => NewFieldsDto })
  @IsOptional()
  @ExposeFieldName
  @Expose()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("table-data", {
      sourcefield: "fields",
      api: "Fields",
      page: "edit-field",
      sortable: true,
      filterable: true,
      size: 10,
      pageAdd: "add-field",
      targetfield: "component",
      isArray: false,
      crud: true,
      fieldDefinition: [
        {
          name: "name",
          value: "Name",
          order: 1,
          visible: true,
          component: "label"
        },
        {
          name: "description",
          value: "Description",
          order: 2,
          visible: true,
          component: "label"
        }
      ]
    })
  )
  @ExposeFieldNamesForPage(
    new ComponentDefinition("title-data", {
      text: "Fields", position: "center", description: "Fields attached",  titleType: "subtitle"
  }))
  fields: NewFieldsDto[];

  @ApiProperty({ type: () => PluginDto })
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 6, visible: false, field: "name"}))
  plugin: PluginDto;
}
