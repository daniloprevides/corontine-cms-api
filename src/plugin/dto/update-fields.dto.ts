import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { NewComponentsDto } from "./new-components.dto";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";
import { FieldSelectionTypeEnum } from "../enum/field-selection.type.enum";
import { ComponentsDto } from "./components.dto";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.FIELDS_UPDATE,ScopeEnum.FIELDS_CREATE, ScopeEnum.FIELDS_DELETE))
export class UpdateFieldsDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", readonly: true })
  )
  @ExposeFieldName
  id: Fields["id"];

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
        }
      ]
    })
  )
  type?: Fields["type"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "textarea" })
  )
  @ExposeFieldName
  description?: Fields["description"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @IsOptional()
  @ExposeFieldName
  defaultEvent?: Fields["defaultEvent"];

  @ApiProperty()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  defaultEventPath?: Fields["defaultEventPath"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @IsOptional()
  @ExposeFieldName
  defaultPropertyBind?: Fields["defaultPropertyBind"];

  @ApiProperty()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("boolean", { type: "text" })
  )
  needApi?: Fields["needApi"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("checkbox-data")
  )
  @IsOptional()
  allowInComposer?: Fields["allowInComposer"];

  @ApiProperty({ type: () => NewAttributesDto })
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("table-data", {
      sourcefield: "attributes",
      api: "Attributes",
      page: "edit-attribute",
      sortable: true,
      filterable: true,
      size: 10,
      pageAdd: "add-attribute",
      targetfield: "field",
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
      text: "Attributes", position: "center", description: "Attributes attached",  titleType: "subtitle"
  }))
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
