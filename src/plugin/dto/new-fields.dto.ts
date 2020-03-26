import { NewComponentsDto } from "./new-components.dto";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { FieldTypeEnum } from "../enum/field-type.enum";
import { FieldSelectionTypeEnum } from "../enum/field-selection.type.enum";
import { ComponentsDto } from "./components.dto";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.FIELDS_CREATE,ScopeEnum.FIELDS_CREATE, ScopeEnum.FIELDS_DELETE))
export class NewFieldsDto {

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  name: Fields["name"];

  @ApiProperty()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("select-static-data", {
      options: [
        {
          field: FieldSelectionTypeEnum.API,
          label: "Api"
        },
        {
          field: FieldSelectionTypeEnum.MULTI,
          label: "Multidata"
        },
        {
          field: FieldSelectionTypeEnum.SINGLE,
          label: "Singledata"
        },
        {
          field: FieldSelectionTypeEnum.CUSTOM,
          label: "Custom"
        }
      ]
    })
  )
  type?: Fields["type"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "textarea", required: false })
  )
  @ExposeFieldName
  description?: Fields["description"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", required: false })
  )
  @IsOptional()
  @ExposeFieldName
  defaultEvent?: Fields["defaultEvent"];

  @ApiProperty()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", required: false })
  )
  defaultEventPath?: Fields["defaultEventPath"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", required: false })
  )
  @IsOptional()
  @ExposeFieldName
  defaultPropertyBind?: Fields["defaultPropertyBind"];

  @ApiProperty()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("checkbox-data")
  )
  needApi?: Fields["needApi"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("checkbox-data", {defaultValue: true})
  )
  @IsOptional()
  allowInComposer?: Fields["allowInComposer"];

  @ApiProperty({ type: () => NewAttributesDto })
  @IsOptional()
  @ExposeFieldName
  // @ExposeFieldNamesForPage(
  //   new ComponentDefinition("select-data", {
  //     api: "Attributes",
  //     field: "id",
  //     displayLabel: "name"
  //   })
  // )
  attributes?: NewAttributesDto[];

  @ApiProperty({ type: () => ComponentsDto })
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("object", {
      order: 10,
      visible: false,
      field: "name"
    })
  )
  @IsOptional()
  component?: ComponentsDto;
}
