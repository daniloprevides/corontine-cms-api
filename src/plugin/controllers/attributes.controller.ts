import { FindParamsDto } from './../../commons/dto/find-params.dto';
import { Constants } from './../../commons/constants';
import { AttributeService } from "./../services/attributes.service";
import { AttributesMapper } from "./../mapper/attributes.mapper";
import { AttributesDto } from "./../dto/attributes.dto";
import { UpdateAttributesDto } from "./../dto/update-attributes.dto";
import { NewAttributesDto } from "./../dto/new-attributes.dto";
import { Attributes } from "./../entity/attributes.entity";
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
  ApiQuery
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
  Req
} from "@nestjs/common";
import {GenericController} from "../../commons/controller/generic.controller";
import Request = require('request');

@ApiTags("Attributes")
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.ATTRIBUTES_ENDPOINT}`
)
export class AttributesController extends GenericController<
  Attributes,
  NewAttributesDto,
  UpdateAttributesDto,
  AttributesDto,
  AttributesMapper,
  AttributeService
> {
  constructor(
    attributesService: AttributeService,
    attributesMapper: AttributesMapper
  ) {
    super(attributesService, attributesMapper, "Attributes");
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Attributes",
    description: "Get all Attributes"
  })
  @ApiOkResponse({
    type: AttributesDto,
    isArray: true,
    description: "All attributes"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @ApiQuery({
    type: FindParamsDto,
    name: "Pagination and Filter Params"
  })
  public async getAll(@Query() queryParams:FindParamsDto, @Req() req:Request): Promise<AttributesDto[]> {
    return super.getAll(queryParams,req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Attributes By Id",
    description: "Get Attributes by Id"
  })
  @ApiOkResponse({
    type: AttributesDto,
    isArray: false,
    description: "Get Attributes by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async getById(
    @Param("id") id: Attributes["id"]
  ): Promise<AttributesDto> {
    return super.getById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: AttributesDto,
    description: "Attributes created"
  })
  @ApiOperation({
    summary: "Add Attribute",
    description: "Creates a new attribute"
  })
  @ApiBody({ type: NewAttributesDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewAttributesDto
  ): Promise<AttributesDto> {
    return super.add(newItem);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: AttributesDto })
  @ApiOperation({
    summary: "Update Attributes",
    description: "Updates the attribute By ID"
  })
  @ApiNotFoundResponse({ description: "Attribute Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async update(
    @Param("id") id: Attributes["id"],
    @Body() updateInfo: UpdateAttributesDto
  ): Promise<AttributesDto> {
    return super.update(id, updateInfo);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Attributes id"
  })
  @ApiOperation({
    summary: "Delete Attribute",
    description: "Deletes Attributes By ID"
  })
  @ApiNotFoundResponse({ description: "Attributes Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async delete(@Param("id") id: Attributes["id"]): Promise<void> {
    return super.delete(id);
  }
}
