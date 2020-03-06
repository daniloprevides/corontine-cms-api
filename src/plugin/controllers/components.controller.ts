import { AuthenticationService } from "./../../commons/services/authentication-service";
import { SecurityGuard } from "./../../commons/guard/security.guard";
import { NeedScope } from "./../../commons/guard/scope-metadata.guard";
import { FindParamsDto } from "./../../commons/dto/find-params.dto";
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
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
  ApiHeader
} from "@nestjs/swagger";
import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
  Req,
  Headers,
  UseGuards
} from "@nestjs/common";
import { Constants } from "../../commons";
import { GenericController } from "../../commons/controller/generic.controller";
import Request = require("request");
import { ScopeEnum } from "../enum/scope.enum";

@ApiTags("Components")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})
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
  constructor(
    service: ComponentsService,
    mapper: ComponentsMapper,
    authenticationSevice: AuthenticationService
  ) {
    super(service, mapper, authenticationSevice, "Components");
  }

  public getParentFieldName(): string {
    return "plugin";
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
  @ApiQuery({
    type: FindParamsDto,
    name: "Pagination and Filter Params"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.COMPONENTS_READ)
  @UseGuards(SecurityGuard)
  public async getAll(
    @Query() queryParams: FindParamsDto,
    @Req() req: Request
  ): Promise<ComponentsDto[]> {
    return await super.getAll(queryParams, req);
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
  @NeedScope(ScopeEnum.COMPONENTS_READ)
  @UseGuards(SecurityGuard)
  public async getById(
    @Param("id") id: Components["id"],
    @Req() req: Request
  ): Promise<ComponentsDto> {
    return await super.getById(id, req);
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
  @NeedScope(ScopeEnum.COMPONENTS_CREATE)
  @UseGuards(SecurityGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewComponentsDto,
    @Req() req: Request
  ): Promise<ComponentsDto> {
    return await super.add(newItem, req);
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
  @NeedScope(ScopeEnum.COMPONENTS_UPDATE)
  @UseGuards(SecurityGuard)
  public async update(
    @Param("id") id: Components["id"],
    @Body() updateInfo: UpdateComponentsDto,
    @Req() req: Request,
    ): Promise<ComponentsDto> {
    return await super.update(id, updateInfo, req);
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
  @NeedScope(ScopeEnum.COMPONENTS_DELETE)
  @UseGuards(SecurityGuard)
  public async delete(
    @Param("id") id: Components["id"],
    @Req() req: Request
  ): Promise<void> {
    return await super.delete(id, req);
  }
}
