import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";
import { Menu } from "../entity/menu.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";

export class MenuAddEntryDTO {
  @ApiProperty()
  @IsString()
  @Expose()
  name: Menu["name"];

  @ApiProperty()
  @IsString()
  @Expose()
  requiredPermission: Menu["requiredPermission"];

  @ApiProperty()
  @IsString()
  @Expose()
  pageName: string;

  @ApiProperty()
  @IsString()
  @Expose()
  pageId: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  children: Menu[]
}
