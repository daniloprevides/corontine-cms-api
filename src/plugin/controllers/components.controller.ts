import { ComponentsService } from "./../services/components.service";
import { ComponentsMapper } from "./../mapper/components.mapper";
import { ComponentsDto } from "./../dto/components.dto";
import { UpdateComponentsDto } from "./../dto/update-components.dto";
import { NewComponentsDto } from "./../dto/new-components.dto";
import { Components } from "./../entity/components.entity";
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
import { Constants } from "../../commons";
import { GenericController } from "../../commons/controller/generic.controller";

@ApiTags("Components")
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.COMPONENTS_ENDPOINT}`
)
export class ComponentsController extends GenericController<
  Components,
  NewComponentsDto,
  UpdateComponentsDto,
  ComponentsDto,
  ComponentsMapper,
  ComponentsService
> {
  constructor(service: ComponentsService, mapper: ComponentsMapper) {
    super(service, mapper, "Components");
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Components",
    description: "Get all Components"
  })
  @ApiOkResponse({
    type: ComponentsDto,
    isArray: true,
    description: "All Components"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async getAll(): Promise<ComponentsDto[]> {
    return super.getAll();
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Components By Id",
    description: "Get Components by Id"
  })
  @ApiOkResponse({
    type: ComponentsDto,
    isArray: false,
    description: "Get Components by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async getById(
    @Param("id") id: Components["id"]
  ): Promise<ComponentsDto> {
    return super.getById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: ComponentsDto,
    description: "Components created"
  })
  @ApiOperation({
    summary: "Add Components",
    description: "Creates a new Component"
  })
  @ApiBody({ type: NewComponentsDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewComponentsDto
  ): Promise<ComponentsDto> {
    return super.add(newItem);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: ComponentsDto })
  @ApiOperation({
    summary: "Update Components",
    description: "Updates the component By ID"
  })
  @ApiNotFoundResponse({ description: "Component Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async update(
    @Param("id") id: Components["id"],
    @Body() updateInfo: UpdateComponentsDto
  ): Promise<ComponentsDto> {
    return super.update(id, updateInfo);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Components id"
  })
  @ApiOperation({
    summary: "Delete Component",
    description: "Deletes Component By ID"
  })
  @ApiNotFoundResponse({ description: "Component Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async delete(@Param("id") id: Components["id"]): Promise<void> {
    return super.delete(id);
  }
}
