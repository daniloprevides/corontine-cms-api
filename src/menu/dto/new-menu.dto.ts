import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";
import { Menu } from "../entity/menu.entity";
import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";

export class NewMenuDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Menu["name"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  label: Menu["label"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  requiredPermission: Menu["requiredPermission"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description?: Menu["description"];

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  order?: Menu["order"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  link: Menu["link"];

  @ApiProperty({ type: () => Menu })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  children: Menu["children"];

  @ApiProperty({ type: () => Menu })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  parent: Menu["parent"];
}
