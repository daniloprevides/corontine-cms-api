import { Events } from "./../entity/events.entity";
import { FieldsDto } from "./fields.dto";
import { NewFieldsDto } from "./new-fields.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, ListComponent } from "../../commons/annotations/expose-field-name.decorator";
@ListComponent("edit-event", "Events")
export class EventsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: Events["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data"))
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))
  name: Events["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))
  @ExposeFieldName
  description?: Events["description"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 4, visible: false}))
  outputObjectDefinition?: Events["outputObjectDefinition"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 5, visible: false}))
  outputType?: Events["outputType"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 6, visible: false}))
  defaultValue?: Events["defaultValue"];

  @ApiProperty({ type: () => FieldsDto })
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 7, visible: false, field: "name"}))
  FieldsDto: FieldsDto;
}
