import { Constants } from './../../commons/constants';
import { Plugin } from './../entity/plugin.entity';
import { PluginConstants } from "./../constants";
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiParam
} from "@nestjs/swagger";
import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Body,
  Put,
  Delete
} from "@nestjs/common";
import { NewPluginDto } from '../dto/new-plugin.dto';
import { UpdatePluginDto } from '../dto/update-plugin.dto';
import { PluginDto } from '../dto/plugin.dto';
import { PluginMapper } from '../mapper/plugin.mapper';
import { PluginService } from '../services/plugin.service';
import {GenericController} from "../../commons/controller/generic.controller";

@ApiTags("Plugin")
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.PLUGIN_ENDPOINT}`
)
export class PluginController extends GenericController<
  Plugin,
  NewPluginDto,
  UpdatePluginDto,
  PluginDto,
  PluginMapper,
  PluginService
> {
  constructor(service: PluginService, mapper: PluginMapper) {
    super(service, mapper, "Plugin");
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Plugin",
    description: "Get all Plugin"
  })
  @ApiOkResponse({
    type: PluginDto,
    isArray: true,
    description: "All Plugin"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async getAll(): Promise<PluginDto[]> {
    return super.getAll();
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Plugin By Id",
    description: "Get Plugin by Id"
  })
  @ApiOkResponse({
    type: PluginDto,
    isArray: false,
    description: "Get Plugin by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async getById(
    @Param("id") id: Plugin["id"]
  ): Promise<PluginDto> {
    return super.getById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: PluginDto,
    description: "Plugin created"
  })
  @ApiOperation({
    summary: "Add Plugin",
    description: "Creates a new Plugin"
  })
  @ApiBody({ type: NewPluginDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewPluginDto
  ): Promise<PluginDto> {
    return super.add(newItem);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: PluginDto })
  @ApiOperation({
    summary: "Update Plugin",
    description: "Updates the Plugin By ID"
  })
  @ApiNotFoundResponse({ description: "Plugin Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async update(
    @Param("id") id: Plugin["id"],
    @Body() updateInfo: UpdatePluginDto
  ): Promise<PluginDto> {
    return super.update(id, updateInfo);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Plugin id"
  })
  @ApiOperation({
    summary: "Delete Plugin",
    description: "Deletes Plugin By ID"
  })
  @ApiNotFoundResponse({ description: "Plugin Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async delete(@Param("id") id: Plugin["id"]): Promise<void> {
    return super.delete(id);
  }
}
