import { FieldsDto } from "./fields.dto";
import { NewFieldsDto } from "./new-fields.dto";
import { Attributes } from "./../entity/attributes.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  ListComponent,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { ScopeEnum } from "../enum/scope.enum";
@ListComponent("edit-attribute", "Attributes")
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.ATTRIBUTES_READ,ScopeEnum.ATTRIBUTES_CREATE, ScopeEnum.ATTRIBUTES_DELETE))
export class AttributesDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: Attributes["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))
  @ExposeFieldName
  name: Attributes["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))
  @ExposeFieldName
  description?: Attributes["description"];

  @ApiProperty()
  @Expose()  
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 4, visible: false}))
  value: Attributes["value"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 5, visible: false}))
  required: Attributes["required"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 6, visible: false}))
  defaultValue: Attributes["defaultValue"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 7, visible: false}))
  possibleValues: Attributes["possibleValues"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 8, visible: true}))
  @ExposeFieldName
  type: Attributes["type"];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 9, visible: false}))
  applyAfterSetInComposer: Attributes["applyAfterSetInComposer"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 10, visible: false}))
  removeWhenFalse: Attributes["removeWhenFalse"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 11, visible: true}))
  @ExposeFieldName
  attributeType: Attributes["attributeType"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 11, visible: false, field: "name"}))
  field: FieldsDto;
}
