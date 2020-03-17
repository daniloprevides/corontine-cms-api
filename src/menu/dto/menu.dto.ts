import { Menu } from "./../entity/menu.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, ListComponent } from "../../commons/annotations/expose-field-name.decorator";
@ListComponent("edit-menu", "menu_api")
export class MenuDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
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
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  bgColor: Menu["bgColor"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  content: Menu["content"];

  @ApiProperty()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  requiredPermission: Menu["requiredPermission"];
}
