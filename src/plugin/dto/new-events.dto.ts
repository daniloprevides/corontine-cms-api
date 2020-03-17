import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Events } from "../entity/events.entity";
import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition
} from "../../commons/annotations/expose-field-name.decorator";

export class NewEventsDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  name: Events["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  description?: Events["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea", isJson: true}))
  @ExposeFieldName
  outputObjectDefinition?: Events["outputObjectDefinition"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  outputType?: Events["outputType"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  defaultValue?: Events["defaultValue"];

  @ApiProperty({ type: () => String })
  @IsOptional()  
  @ExposeFieldName
  @ExposeFieldNamesForPage(
    new ComponentDefinition("select-data", {
      api: "Fields",
      field: "id",
      displayLabel: "name"
    })
  )
  field: String;
}
