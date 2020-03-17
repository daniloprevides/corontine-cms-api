import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsObject } from "class-validator";
import { Page } from "../entity/page.entity";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition } from "../../commons/annotations/expose-field-name.decorator";

export class NewPageDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  name: Page["name"];

  @ApiProperty()
  @IsObject()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea", isJoson: true}))
  content: Page["content"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text", isJoson: true, defaultPropertyBind: "name"}))
  pluginId: Page["pluginId"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  description?: Page["description"];
}
