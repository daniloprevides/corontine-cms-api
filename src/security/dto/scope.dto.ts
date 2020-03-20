import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { ScopeEnum } from "../enum/scope.enum";
import { IsEnum, IsString, IsOptional, IsArray } from "class-validator";
import { ListComponent, ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, PageRequirePermission, PermissionsDefinition } from "../../commons/annotations/expose-field-name.decorator";
import { GroupDTO } from "./group.dto";

@ListComponent("edit-scope", "scopes_api")
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.SCOPE_READ,ScopeEnum.SCOPE_CREATE, ScopeEnum.SCOPE_DELETE))
export class ScopeDTO {
  @ApiProperty({ type: String })
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: string;

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))
  name: ScopeEnum | any;

  @ApiProperty({ type: String })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))
  description: string;

  @ApiProperty({ type: () => GroupDTO })
  @IsArray()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 3, visible: true, field: "name" , isArray: true}))
  groups: GroupDTO[];
}
