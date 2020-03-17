import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition } from "../../commons/annotations/expose-field-name.decorator";
import { NewComponentsDto } from "./new-components.dto";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";

export class UpdateFieldsDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text", readonly: true}))
  @ExposeFieldName
  id: Fields["id"];

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  name: Fields["name"];

  @ApiProperty()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  type: Fields["type"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  description: Fields["description"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @IsOptional()
  @ExposeFieldName
  defaultEvent: Fields["defaultEvent"];

  @ApiProperty()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @IsOptional()
  @ExposeFieldName
  defaultEventPath: Fields["defaultEventPath"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @IsOptional()
  @ExposeFieldName
  defaultPropertyBind: Fields["defaultPropertyBind"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  @ExposeFieldName
  needApi: Fields["needApi"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  @ExposeFieldName
  allowInComposer: Fields["allowInComposer"];

  @ApiProperty({ type: () => NewAttributesDto })
  @IsOptional()
  @ExposeFieldName
  attributes: NewAttributesDto[];

  @ApiProperty({ type: () => String })
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 10, visible: false, field: "name"}))
  @ExposeFieldName
  component: String;
}
