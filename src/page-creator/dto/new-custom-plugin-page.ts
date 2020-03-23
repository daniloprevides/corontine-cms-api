import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsObject } from "class-validator";

export class NewCustomPluginPageDto {
  @ApiProperty()
  @IsString()
  @Expose()
  name: string;

  @ApiProperty()
  @IsString()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  pageApi: any;

  @ApiProperty()
  @Expose()
  api: any;

  @ApiProperty()
  @Expose()
  component: any;

  @ApiProperty()
  @IsString()
  @Expose()
  elementName: string;
}
