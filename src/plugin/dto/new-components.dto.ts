import { ExposeFieldName } from '../../commons/annotations/expose-field-name.decorator';
import { UpdatePluginDto } from "./update-plugin.dto";
import { NewPluginDto } from "./new-plugin.dto";
import { NewFieldsDto } from "./new-fields.dto";
import { Components } from "./../entity/components.entity";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class NewComponentsDto {
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

  @ApiProperty({ type: () => NewFieldsDto })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  fields: NewFieldsDto[];

  @ApiProperty({ type: () => String })
  @Expose()
  @ExposeFieldName
  plugin: string;
}
