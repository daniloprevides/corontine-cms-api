import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Menu } from "../entity/menu.entity";

export class NewMenuDto {
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
  @IsString()
  @Expose()
  link: Menu["link"];

  @ApiProperty({ type: () => Menu })
  @Expose()
  menu: Menu["menu"];

  @ApiProperty({ type: () => Menu })
  @Expose()
  parent: Menu["menu"];
}
