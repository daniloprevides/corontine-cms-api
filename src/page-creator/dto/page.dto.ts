import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";
import { Page } from "./../entity/page.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsObject } from "class-validator";

export class PageDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  id: Page["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Page["name"];

  @ApiProperty()
  @IsObject()
  @Expose()
  @ExposeFieldName
  content: Page["content"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description?: Page["description"];
}
