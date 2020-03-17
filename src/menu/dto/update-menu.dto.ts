import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";
import { Menu } from "../entity/menu.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";

export class UpdateMenuDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {readonly: true}))
  id: Menu["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  name: Menu["name"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "color"}))
  bgColor: Menu["bgColor"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea", isJson: true}))
  content: Menu["content"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  requiredPermission: Menu["requiredPermission"];
}
