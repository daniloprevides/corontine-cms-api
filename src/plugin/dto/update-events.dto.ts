import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition } from "../../commons/annotations/expose-field-name.decorator";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Events } from "../entity/events.entity";

export class UpdateEventsDto {
  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text", readonly: true}))
  @ExposeFieldName
  id: Events["id"];

  @ApiProperty()
  @IsString()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  name: Events["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "description"}))
  @ExposeFieldName
  description?: Events["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  outputObjectDefinition?: Events["outputObjectDefinition"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  @ExposeFieldName
  outputType?: Events["outputType"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  @ExposeFieldName
  defaultValue?: Events["defaultValue"];

  @ApiProperty({ type: () => String })
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 7, visible: false, field: "name"}))
  @ExposeFieldName
  field: String;
}
