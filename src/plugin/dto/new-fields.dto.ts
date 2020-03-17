import { NewComponentsDto } from "./new-components.dto";
import { NewAttributesDto } from "./new-attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { FieldTypeEnum } from "../enum/field-type.enum";

export class NewFieldsDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  name: Fields["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  description: Fields["description"];

  @ApiProperty()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("select-static-data", {
    options: Object.keys(FieldTypeEnum).map(a => {
      return {field: a, label: FieldTypeEnum[a]};
    })
  }))
  @ExposeFieldName
  type: Fields["type"];

  @ApiProperty()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @IsOptional()
  @ExposeFieldName
  defaultEvent: Fields["defaultEvent"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @IsOptional()
  @ExposeFieldName
  defaultEventPath: Fields["defaultEventPath"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  allowInComposer: Fields["allowInComposer"];

  @ApiProperty()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @IsOptional()
  @ExposeFieldName
  defaultPropertyBind: Fields["defaultPropertyBind"];

  @ApiProperty()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("checkbox-data"))
  @IsOptional()
  needApi: Fields["needApi"];

  @ApiProperty({ type: () => NewAttributesDto })
  @IsOptional()
  @ExposeFieldName
  attributes: NewAttributesDto[];

  @ApiProperty({ type: () => NewComponentsDto })
  @IsOptional()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("select-data", {
      api: "Components",
      field: "id",
      displayLabel: "name"
    })
  )
  @ExposeFieldName
  component: NewComponentsDto;
}
