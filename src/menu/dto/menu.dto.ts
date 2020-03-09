import { Menu } from "./../entity/menu.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";

export class MenuDto {
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

  @ApiProperty({ type: () => MenuDto })
  @IsOptional()
  @Expose()
  children: MenuDto[];

  @ApiProperty({ type: () => MenuDto })
  @IsOptional()
  @Expose()
  parent: MenuDto;
}
