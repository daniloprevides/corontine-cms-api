import { NewFieldsDto } from "./new-fields.dto";
import { Attributes } from "./../entity/attributes.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { FieldsDto } from "./fields.dto";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.ATTRIBUTES_UPDATE,ScopeEnum.ATTRIBUTES_CREATE, ScopeEnum.ATTRIBUTES_DELETE))
export class UpdateAttributesDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", readonly: true })
  )
  @ExposeFieldName
  id: Attributes["id"];

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @ExposeFieldName
  name: Attributes["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "textarea" })
  )
  @ExposeFieldName
  description?: Attributes["description"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", readonly: true })
  )
  @ExposeFieldName
  value: Attributes["value"];

  @ApiProperty()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @ExposeFieldName
  applyAfterSetInComposer?: Attributes["applyAfterSetInComposer"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  @ExposeFieldName
  removeWhenFalse?: Attributes["removeWhenFalse"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @ExposeFieldName
  @IsOptional()
  required: Attributes["required"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  @IsOptional()
  defaultValue?: Attributes["defaultValue"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { readonly: true })
  )
  @ExposeFieldName
  @IsOptional()
  possibleValues?: Attributes["possibleValues"];

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  type: Attributes["type"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  attributeType?: Attributes["attributeType"];

  @ApiProperty({ type: () => FieldsDto })
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("select-data", {
      api: "Fields",
      field: "id",
      displayLabel: "name"
    })
  )
  @ExposeFieldName
  field: FieldsDto;
}
