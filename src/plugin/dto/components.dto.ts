import { FieldsDto } from "./fields.dto";
import { PluginDto } from "./plugin.dto";
import { Components } from "./../entity/components.entity";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { ExposeFieldName } from "../../commons/annotations/expose-field-name.decorator";

export class ComponentsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  id: Components["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  name: Components["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  description: Components["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  informationUrl: Components["informationUrl"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  url: Components["url"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  @ExposeFieldName
  fields: FieldsDto[];

  @ApiProperty({ type: () => PluginDto })
  @Expose()
  @ExposeFieldName
  plugin: PluginDto;
}
