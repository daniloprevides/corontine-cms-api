import { Scope } from "./../entity/scope.entity";
import { Group } from "./../entity/group.entity";
import { NewScopeDTO } from "./new-scope.dto";
import { IsEnum, IsOptional, IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, ListComponent, PageRequirePermission, PermissionsDefinition } from "../../commons/annotations/expose-field-name.decorator";
import { ScopeDTO } from "./scope.dto";
import { ScopeEnum } from "../enum/scope.enum";
@ListComponent("edit-group", "group_api")
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.GROUP_READ,ScopeEnum.GROUP_CREATE, ScopeEnum.GROUP_DELETE))
export class GroupDTO {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: Group["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))
  name: Group["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))
  description: Group["description"];

  @ApiProperty({ type: () => ScopeDTO })
  @IsArray()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @Type(() => ScopeDTO)
  scopes: ScopeDTO[];
}
