import { Events } from "./../entity/events.entity";
import { ComponentsDto } from "./components.dto";
import { AttributesDto } from "./attributes.dto";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Fields } from "../entity/fields.entity";
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, ListComponent } from "../../commons/annotations/expose-field-name.decorator";
@ListComponent("edit-field", "Fields")
export class FieldsDto {
  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 1, visible: false}))
  id: Fields["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 2, visible: true}))
  name: Fields["name"];

  @ApiProperty()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 3, visible: true}))
  type: Fields["type"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 4, visible: true}))
  description: Fields["description"];

  @ApiProperty({ type: () => AttributesDto })
  @Expose()
  @ExposeFieldName
  attributes: AttributesDto[];

  @ApiProperty()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 5, visible: true}))
  defaultEvent: Fields["defaultEvent"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 6, visible: true}))
  defaultEventPath: Fields["defaultEventPath"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("label", {order: 7, visible: true}))
  defaultPropertyBind: Fields["defaultPropertyBind"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 8, visible: false}))
  needApi: Fields["needApi"];

  @ApiProperty()
  @Expose()
  @IsOptional()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("boolean", {order: 9, visible: false}))
  allowInComposer: Fields["allowInComposer"];

  @ApiProperty({ type: () => Events })
  @IsOptional()
  @Expose()
  events: Events[];

  @ApiProperty({ type: () => ComponentsDto })
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("object", {order: 10, visible: false, field: "name"}))
  component: ComponentsDto;
}
