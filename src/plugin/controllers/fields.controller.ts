import { FieldNamesDto } from './../../commons/dto/field-names-dto';
import { SecurityGuard } from './../../commons/guard/security.guard';
import { NeedScope } from './../../commons/guard/scope-metadata.guard';
import { AuthenticationService } from "./../../commons/services/authentication-service";
import { FindParamsDto } from "./../../commons/dto/find-params.dto";
import { Constants } from "./../../commons/constants";
import { FieldsService } from "./../services/fields.service";
import { FieldsMapper } from "./../mapper/fields.mapper";
import { FieldsDto } from "./../dto/fields.dto";
import { UpdateFieldsDto } from "./../dto/update-fields.dto";
import { NewFieldsDto } from "./../dto/new-fields.dto";
import { Fields } from "./../entity/fields.entity";
import { PluginConstants } from "./../constants";
import { GenericController } from "../../commons/controller/generic.controller";
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
  UseGuards
} from "@nestjs/common";
import Request = require("request");
import { ScopeEnum } from "../enum/scope.enum";

@ApiTags("Fields")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.FIELDS_ENDPOINT}`
)
export class FieldsController extends GenericController<
  Fields,
  NewFieldsDto,
  UpdateFieldsDto,
  FieldsDto,
  FieldsMapper,
  FieldsService
> {
  constructor(
    service: FieldsService,
    mapper: FieldsMapper,
    authenticationService: AuthenticationService
  ) {
    super(service, mapper, authenticationService, "Fields");
  }

  public getParentFieldName(): string {
    return "component";
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Fields",
    description: "Get all Fields"
  })
  @ApiOkResponse({
    type: FieldsDto,
    isArray: true,
    description: "All Fields"
  })
  @ApiQuery({
    type: FindParamsDto,
    name: "Pagination and Filter Params"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.FIELDS_READ)
  @UseGuards(SecurityGuard)
  public async getAll(
    @Query() queryParams: FindParamsDto,
    @Req() req: Request
  ): Promise<FieldsDto[]> {
    return super.getAll(queryParams, req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Fields By Id",
    description: "Get Fields by Id"
  })
  @ApiOkResponse({
    type: FieldsDto,
    isArray: false,
    description: "Get Fields by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.FIELDS_READ)
  @UseGuards(SecurityGuard)
  public async getById(
    @Param("id") id: Fields["id"],
    @Req() req: Request
  ): Promise<FieldsDto> {
    return await super.getById(id, req);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: FieldsDto,
    description: "Fields created"
  })
  @ApiOperation({
    summary: "Add Fields",
    description: "Creates a new Fields"
  })
  @ApiBody({ type: NewFieldsDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(ScopeEnum.FIELDS_CREATE)
  @UseGuards(SecurityGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewFieldsDto,
    @Req() req: Request
  ): Promise<FieldsDto> {
    return await super.add(newItem, req);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: FieldsDto })
  @ApiOperation({
    summary: "Update Fields",
    description: "Updates the Fields By ID"
  })
  @ApiNotFoundResponse({ description: "Fields Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.FIELDS_UPDATE)
  @UseGuards(SecurityGuard)
  public async update(
    @Param("id") id: Fields["id"],
    @Body() updateInfo: UpdateFieldsDto,
    @Req() req: Request
  ): Promise<FieldsDto> {
    return await super.update(id, updateInfo, req);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Fields id"
  })
  @ApiOperation({
    summary: "Delete Fields",
    description: "Deletes Fields By ID"
  })
  @ApiNotFoundResponse({ description: "Fields Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.FIELDS_DELETE)
  @UseGuards(SecurityGuard)
  public async delete(
    @Param("id") id: Fields["id"],
    @Req() req: Request
  ): Promise<void> {
    return await super.delete(id, req);
  }

  @Get("/field/names")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Field Names",
    description: "Get Field Names"
  })
  public async getFieldNames(object:any): Promise<FieldNamesDto> {
    return await super.getFieldNames(new NewFieldsDto(), new UpdateFieldsDto(), new FieldsDto());
  }
}
