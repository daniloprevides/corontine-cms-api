import { NewScopeDTO } from "./new-scope.dto";
import { IsEnum, IsOptional, IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";

export class UpdateGroupDTO {
  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text", readonly: true}))
  @IsString()
  id: string;

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @IsString()
  name: string;

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ type: Array })
  @IsArray()
  scopes: string[];
}
