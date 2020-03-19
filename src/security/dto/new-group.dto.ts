import { NewScopeDTO } from "./new-scope.dto";
import { IsEnum, IsOptional, IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Group } from "../entity/group.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.GROUP_CREATE,ScopeEnum.GROUP_CREATE, ScopeEnum.GROUP_DELETE))
export class NewGroupDTO {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  name: Group["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  description: Group["description"];

  @ApiProperty({ type: () => NewScopeDTO })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  scopes: NewScopeDTO[];
}
