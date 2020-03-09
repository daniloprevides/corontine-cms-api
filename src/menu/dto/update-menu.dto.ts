import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";
import { Menu } from "../entity/menu.entity";

export class UpdateMenuDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Menu["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Menu["name"];

  @ApiProperty()
  @IsString()
  @Expose()
  label: Menu["label"];

  @ApiProperty()
  @IsString()
  @Expose()
  requiredPermission: Menu["requiredPermission"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description?: Menu["description"];

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Expose()
  order?: Menu["order"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  link: Menu["link"];

  @ApiProperty({ type: () => Menu })
  @IsOptional()
  @Expose()
  children: Menu["children"];

  @ApiProperty({ type: () => Menu })
  @IsOptional()
  @Expose()
  parent: Menu["parent"];
}
