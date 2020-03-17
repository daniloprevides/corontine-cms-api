import { NewScopeDTO } from "./new-scope.dto";
import { IsEnum, IsOptional, IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Group } from "../entity/group.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";

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

  @ApiProperty({ type: Array })
  @IsArray()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  scopes: string[];
}
