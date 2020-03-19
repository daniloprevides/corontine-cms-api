import { NewFieldsDto } from "./new-fields.dto";
import { Attributes } from "./../entity/attributes.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, PageRequirePermission, PermissionsDefinition } from "../../commons/annotations/expose-field-name.decorator";
import { FieldTypeEnum } from "../enum/field-type.enum";
import { AttributeTypeEnum } from "../enum/attribute-type.enum";
import { FieldsDto } from "./fields.dto";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.ATTRIBUTES_CREATE,ScopeEnum.ATTRIBUTES_CREATE, ScopeEnum.ATTRIBUTES_DELETE))
export class NewAttributesDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  name: Attributes["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  description?: Attributes["description"];

  @ApiProperty()
  @ExposeFieldName
  value: Attributes["value"];

  @ApiProperty()
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  @ExposeFieldName
  removeWhenFalse?: Attributes["removeWhenFalse"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  required?: Attributes["required"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @IsOptional()
  defaultValue?: Attributes["defaultValue"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  @IsOptional()
  possibleValues?: Attributes["possibleValues"];

  @ApiProperty()
  @IsString()
  @ExposeFieldNamesForPage(new ComponentDefinition("select-static-data", {
    options: Object.keys(FieldTypeEnum).map(a => {
      return {field: a, label: FieldTypeEnum[a]};
    })
  }))
  @ExposeFieldName
  type: Attributes["type"];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @ExposeFieldName
  applyAfterSetInComposer?: Attributes["applyAfterSetInComposer"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("select-static-data", {
    options: Object.keys(AttributeTypeEnum).map(a => {
      return {field: a, label: AttributeTypeEnum[a]};
    })
  }))
  @ExposeFieldName
  attributeType?: Attributes["attributeType"];

  @ApiProperty({ type: () => FieldsDto })
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("select-data", {api: "Fields", field: "id", displayLabel: "name"}))
  field?: FieldsDto;
}
