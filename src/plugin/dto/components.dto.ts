import { FieldsDto } from "./fields.dto";
import { PluginDto } from "./plugin.dto";
import { Components } from "./../entity/components.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  ListComponent,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { ScopeEnum } from "../enum/scope.enum";
@ListComponent("edit-component", "Components")
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.COMPONENTS_READ,ScopeEnum.COMPONENTS_CREATE, ScopeEnum.COMPONENTS_DELETE))
export class ComponentsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: Components["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))
  @ExposeFieldName
  name: Components["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))
  @ExposeFieldName
  description: Components["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 4, visible: false}))
  informationUrl: Components["informationUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 5, visible: false}))
  url: Components["url"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  @ExposeFieldName
  fields: FieldsDto[];

  @ApiProperty({ type: () => PluginDto })
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 6, visible: false, field: "name"}))
  plugin: PluginDto;
}
