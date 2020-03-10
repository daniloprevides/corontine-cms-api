import { FieldNamesDto } from './../../commons/dto/field-names-dto';
import { GlobalInfoDto } from "./../../commons/dto/global-info.dto";
import { SecurityGuard } from "./../../commons/guard/security.guard";
import { NeedScope } from "./../../commons/guard/scope-metadata.guard";
import { AuthenticationService } from "./../../commons/services/authentication-service";
import { FindParamsDto } from "./../../commons/dto/find-params.dto";
import { Constants } from "./../../commons/constants";
import { PageService } from "../services/page.service";
import { PageConstants } from "./../constants";
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
import { GenericController } from "../../commons/controller/generic.controller";
import Request = require("request");
import { PageScopeEnum } from "../enum/page-scope.enum";
import { Page } from "../entity/page.entity";
import { NewPageDto } from "../dto/new-page.dto";
import { UpdatePageDto } from "../dto/update-page.dto";
import { PageDto } from "../dto/page.dto";
import { PageMapper } from "../mapper/page.mapper";

@ApiTags("page")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PageConstants.PAGE_ENDPOINT}`
)
export class PageController extends GenericController<
  Page,
  NewPageDto,
  UpdatePageDto,
  PageDto,
  PageMapper,
  PageService
> {
  constructor(
    PageService: PageService,
    PageMapper: PageMapper,
    authenticationService: AuthenticationService
  ) {
    super(PageService, PageMapper, authenticationService, "Page");
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Page",
    description: "Get all Page"
  })
  @ApiOkResponse({
    type: PageDto,
    isArray: true,
    description: "All Page"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @ApiQuery({
    type: FindParamsDto,
    name: "Pagination and Filter Params"
  })
  @NeedScope(PageScopeEnum.PAGE_READ)
  @UseGuards(SecurityGuard)
  public async getAll(
    @Query() queryParams: FindParamsDto,
    @Req() req: Request
  ): Promise<PageDto[]> {
    return super.getAll(queryParams, req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Page By Id",
    description: "Get Page by Id"
  })
  @ApiOkResponse({
    type: PageDto,
    isArray: false,
    description: "Get Page by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(PageScopeEnum.PAGE_READ)
  @UseGuards(SecurityGuard)
  public async getById(
    @Param("id") id: Page["id"],
    @Req() req: Request
  ): Promise<PageDto> {
    return await super.getById(id, req);
  }

  @Get("/api/data")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get API Data",
    description: "Get API Data"
  })
  @ApiOkResponse({
    type: GlobalInfoDto,
    isArray: false,
    description: "Get API Data"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(PageScopeEnum.PAGE_READ)
  @UseGuards(SecurityGuard)
  public async getApiData(@Req() req: Request): Promise<GlobalInfoDto> {
    const localUrl = req.protocol + "://" + req.get("host");
    return await this.service.getApis(localUrl);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: PageDto,
    description: "Page created"
  })
  @ApiOperation({
    summary: "Add Page",
    description: "Creates a new Page"
  })
  @ApiBody({ type: NewPageDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(PageScopeEnum.PAGE_CREATE)
  @UseGuards(SecurityGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewPageDto,
    @Req() req: Request
  ): Promise<PageDto> {
    return await super.add(newItem, req);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: PageDto })
  @ApiOperation({
    summary: "Update Page",
    description: "Updates the Page By ID"
  })
  @ApiNotFoundResponse({ description: "Page Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(PageScopeEnum.PAGE_UPDATE)
  @UseGuards(SecurityGuard)
  public async update(
    @Param("id") id: Page["id"],
    @Body() updateInfo: UpdatePageDto,
    @Req() req: Request
  ): Promise<PageDto> {
    return await super.update(id, updateInfo, req);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Page id"
  })
  @ApiOperation({
    summary: "Delete Page",
    description: "Deletes Page By ID"
  })
  @NeedScope(PageScopeEnum.PAGE_DELETE)
  @UseGuards(SecurityGuard)
  @ApiNotFoundResponse({ description: "Page Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async delete(
    @Param("id") id: Page["id"],
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
    return await super.getFieldNames(new NewPageDto(), new UpdatePageDto(), new PageDto());
  }

}
