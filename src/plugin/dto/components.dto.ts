import { NewPluginDto } from './new-plugin.dto';
import { NewFieldsDto } from './new-fields.dto';
import { Components } from './../entity/components.entity';
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class ComponentsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  id: Components["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Components["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description: Components["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  informationUrl: Components["informationUrl"];

  @ApiProperty({ type: () => NewFieldsDto })
  @Expose()
  fields: NewFieldsDto[];

  @ApiProperty({ type: () => NewPluginDto })
  @Expose()
  plugin: NewPluginDto;


}
