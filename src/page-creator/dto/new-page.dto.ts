import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsObject } from "class-validator";
import { Page } from "../entity/page.entity";
import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";

export class NewPageDto {
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
