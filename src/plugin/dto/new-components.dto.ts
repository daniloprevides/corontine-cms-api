import {
  ExposeFieldName,
  ExposeFieldNamesForPage,
  ComponentDefinition,
  PageRequirePermission,
  PermissionsDefinition
} from "../../commons/annotations/expose-field-name.decorator";
import { NewFieldsDto } from "./new-fields.dto";
import { Components } from "./../entity/components.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { PluginDto } from "./plugin.dto";
import { ScopeEnum } from "../enum/scope.enum";
@PageRequirePermission(new PermissionsDefinition(ScopeEnum.COMPONENTS_CREATE,ScopeEnum.COMPONENTS_CREATE, ScopeEnum.COMPONENTS_DELETE))
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

  @ApiProperty({ type: () => PluginDto })
  @ExposeFieldNamesForPage(
    new ComponentDefinition("select-data", {
      api: "Plugins",
      field: "id",
      displayLabel: "name"
    })
  )
  @ExposeFieldName
  plugin: PluginDto;
}
