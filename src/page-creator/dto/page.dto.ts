import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, ListComponent } from "../../commons/annotations/expose-field-name.decorator";
import { Page } from "./../entity/page.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsObject } from "class-validator";
@ListComponent("edit-page", "pages_api")
export class PageDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text", readonly: true}))
  id: Page["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  name: Page["name"];

  @ApiProperty()
  @IsObject()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea", isJson: true}))
  content: Page["content"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  pluginId: Page["pluginId"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  description?: Page["description"];
}
