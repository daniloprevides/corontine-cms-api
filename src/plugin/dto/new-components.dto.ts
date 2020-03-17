import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";
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
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  name: Components["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "textarea" })
  )
  @ExposeFieldName
  description: Components["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @ExposeFieldName
  informationUrl: Components["informationUrl"];

  @ApiProperty()
  @IsString()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("input-data", { type: "text" })
  )
  @ExposeFieldName
  url: Components["url"];

  @ApiProperty({ type: () => NewFieldsDto })
  @IsOptional()
  @ExposeFieldName
  fields: NewFieldsDto[];

  @ApiProperty({ type: () => String })
  @ExposeFieldNamesForPage(
    new ComponentDefinition("select-data", {
      api: "Plugins",
      field: "id",
      displayLabel: "name"
    })
  )
  @ExposeFieldName
  plugin: string;
}
