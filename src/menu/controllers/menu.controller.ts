import { FieldNamesDto } from './../../commons/dto/field-names-dto';
import { SecurityGuard } from './../../commons/guard/security.guard';
import { NeedScope } from './../../commons/guard/scope-metadata.guard';
import { AuthenticationService } from './../../commons/services/authentication-service';
import { FindParamsDto } from './../../commons/dto/find-params.dto';
import { Constants } from './../../commons/constants';
import { MenuService } from "./../services/menu.service";
import { MenuMapper } from "./../mapper/menu.mapper";
import { MenuDto } from "./../dto/menu.dto";
import { UpdateMenuDto } from "./../dto/update-menu.dto";
import { NewMenuDto } from "./../dto/new-menu.dto";
import { Menu } from "./../entity/menu.entity";
import { MenuConstants } from "./../constants";
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
import {GenericController} from "../../commons/controller/generic.controller";
import Request = require('request');
import { MenuScopeEnum } from '../enum/menu-scope.enum';

@ApiTags("menu")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})

@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${MenuConstants.MENU_ENDPOINT}`
)
export class MenuController extends GenericController<
  Menu,
  NewMenuDto,
  UpdateMenuDto,
  MenuDto,
  MenuMapper,
  MenuService
> {

  constructor(
    MenuService: MenuService,
    MenuMapper: MenuMapper,
    authenticationService:AuthenticationService
  ) {
    super(MenuService, MenuMapper, authenticationService, "Menu");
  }

  public getParentFieldName(): string {
    return "parent";
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Menu",
    description: "Get all Menu"
  })
  @ApiOkResponse({
    type: MenuDto,
    isArray: true,
    description: "All Menu"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @ApiQuery({
    type: FindParamsDto,
    name: "Pagination and Filter Params"
  })
  @NeedScope(MenuScopeEnum.MENU_READ)
  @UseGuards(SecurityGuard)
  public async getAll(@Query() queryParams:FindParamsDto, @Req() req:Request): Promise<MenuDto[]> {
    return super.getAll(queryParams,req);
  }

  @Get("/my-menu")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get My Menu",
    description: "Get My Menu"
  })
  @ApiOkResponse({
    type: MenuDto,
    isArray: true,
    description: "My Menu"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(MenuScopeEnum.MENU_READ)
  @UseGuards(SecurityGuard)
  public async getMyMenu(@Req() req:Request): Promise<MenuDto> {
    return this.service.getMyMenu(req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Menu By Id",
    description: "Get Menu by Id"
  })
  @ApiOkResponse({
    type: MenuDto,
    isArray: false,
    description: "Get Menu by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(MenuScopeEnum.MENU_READ)
  @UseGuards(SecurityGuard)
  public async getById(
    @Param("id") id: Menu["id"]
    , @Req() req: Request
  ): Promise<MenuDto> {
    return await super.getById(id,req);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: MenuDto,
    description: "Menu created"
  })
  @ApiOperation({
    summary: "Add Menu",
    description: "Creates a new Menu"
  })
  @ApiBody({ type: NewMenuDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(MenuScopeEnum.MENU_CREATE)
  @UseGuards(SecurityGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewMenuDto
    , @Req() req: Request
  ): Promise<MenuDto> {
    return await super.add(newItem, req);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: MenuDto })
  @ApiOperation({
    summary: "Update Menu",
    description: "Updates the Menu By ID"
  })
  @ApiNotFoundResponse({ description: "Menu Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(MenuScopeEnum.MENU_UPDATE)
  @UseGuards(SecurityGuard)
  public async update(
    @Param("id") id: Menu["id"],
    @Body() updateInfo: UpdateMenuDto
    , @Req() req: Request
  ): Promise<MenuDto> {
    return await super.update(id, updateInfo, req);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Menu id"
  })
  @ApiOperation({
    summary: "Delete Menu",
    description: "Deletes Menu By ID"
  })
  @NeedScope(MenuScopeEnum.MENU_DELETE)
  @UseGuards(SecurityGuard)
  @ApiNotFoundResponse({ description: "Menu Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async delete(@Param("id") id: Menu["id"], @Req() req: Request): Promise<void> {
    return await super.delete(id, req);
  }

  @Get("/field/names")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Field Names",
    description: "Get Field Names"
  })
  public async getFieldNames(object:any): Promise<FieldNamesDto> {
    return await super.getFieldNames(new NewMenuDto(), new UpdateMenuDto(), new MenuDto());
  }

}
