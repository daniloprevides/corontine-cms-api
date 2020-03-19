import { NewScopeDTO } from "./new-scope.dto";
import { IsEnum, IsOptional, IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.GROUP_UPDATE,ScopeEnum.GROUP_CREATE, ScopeEnum.GROUP_DELETE))
export class UpdateGroupDTO {
  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text", readonly: true })
  )
  @IsString()
  id: string;

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @IsString()
  name: string;

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "textarea" })
  )
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ type: () => NewScopeDTO })
  @IsArray()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("table-data", {
      sourcefield: "scopes",
      api: "scopes_api",
      page: "edit-scope",
      sortable: true,
      filterable: true,
      size: 10,
      pageAdd: "add-scope",
      targetfield: "groups",
      isArray: true,
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
      text: "Scopes", position: "center", description: "Scopes attached to this group",  titleType: "subtitle"
  }))
  @Expose()
  scopes: NewScopeDTO[];
}
