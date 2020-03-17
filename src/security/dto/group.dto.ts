import { Scope } from "./../entity/scope.entity";
import { Group } from "./../entity/group.entity";
import { NewScopeDTO } from "./new-scope.dto";
import { IsEnum, IsOptional, IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, ListComponent } from "../../commons/annotations/expose-field-name.decorator";
@ListComponent("edit-group", "group_api")
export class GroupDTO {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  id: Group["id"];

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
  @IsArray()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @Type(() => NewScopeDTO)
  scopes: NewScopeDTO[];
}
