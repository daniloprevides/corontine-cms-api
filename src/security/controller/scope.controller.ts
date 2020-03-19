import { GroupDTO } from './../dto/group.dto';
import { NewGroupDTO } from "./../dto/new-group.dto";
import { UpdateGroupDTO } from "./../dto/update-group.dto";
import { GroupMapper } from "./../mapper/group.mapper";
import { GroupService } from "./../service/group.service";
import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Put,
  Delete,
  Param,
  Get,
  Query,
  Req,
  NotFoundException
} from "@nestjs/common";
import { Constants } from "../../commons";

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiBody,
  ApiUnauthorizedResponse,
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiHeader
} from "@nestjs/swagger";
import { NeedScope } from "../../commons/guard/scope-metadata.guard";
import { ScopeEnum } from "../enum/scope.enum";
import { ScopeGuard } from "../guard/scope.guard";
import { Group } from "../entity/group.entity";
import { SecurityConstants } from '../constants';
import { GenericController } from '../../commons/controller/generic.controller';
import { AuthenticationService } from '../../commons/services/authentication-service';
import { FindParamsDto } from '../../commons/dto/find-params.dto';
import { FieldNamesDto } from '../../commons/dto/field-names-dto';
import Request = require('request');
import { ScopeRepository } from '../repository/scope.repository';
import { Scope } from '../entity/scope.entity';
import { NewScopeDTO } from '../dto/new-scope.dto';
import { UpdateScopeDTO } from '../dto/update-scope.dto';
import { ScopeDTO } from '../dto/scope.dto';
import { ScopeMapper } from '../mapper/scope.mapper';
import { ScopeService } from '../service/scope.service';

@ApiTags("Scopes")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.SCOPE_ENDPOINT}`
)

export class ScopeController extends GenericController<
Scope,
NewScopeDTO,
UpdateScopeDTO,
ScopeDTO,
ScopeMapper,
ScopeService
> {

constructor(
  service: ScopeService,
  ScopesMapper: ScopeMapper,
  authenticationService:AuthenticationService,
  private scopeRepository: ScopeRepository
) {
  super(service, ScopesMapper, authenticationService, "Scope");
}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: "Get Scopes", description: "Get all Scopes" })
  @ApiOkResponse({
    type: ScopeDTO,
    isArray: true,
    description: "All Scopes"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.SCOPE_READ)
  @UseGuards(ScopeGuard)
  public async getAll(
    @Query() queryParams: FindParamsDto,
    @Req() req: Request
  ): Promise<ScopeDTO[]> {
    return super.getAll(queryParams, req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Scope By Id",
    description: "Get Scope by Id"
  })
  @ApiOkResponse({
    type: ScopeDTO,
    isArray: false,
    description: "Get Scope by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.SCOPE_READ)
  @UseGuards(ScopeGuard)
  public async getById(
    @Param("id") id: Scope["id"],
    @Req() req: Request
  ): Promise<ScopeDTO> {
    return await super.getById(id, req);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: ScopeDTO,
    description: "Scope created"
  })
  @ApiOperation({ summary: "Add Scope", description: "Creates a new Scope" })
  @ApiBody({ type: NewScopeDTO })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(ScopeEnum.SCOPE_CREATE)
  @UseGuards(ScopeGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewScopeDTO,
    @Req() req: Request
  ): Promise<ScopeDTO> {
    return await super.add( newItem, req);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: ScopeDTO })
  @ApiOperation({
    summary: "Update Scope",
    description: "Updates the Scope By ID"
  })
  @ApiNotFoundResponse({ description: "Scope Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.SCOPE_UPDATE)
  @UseGuards(ScopeGuard)
  public async update(
    @Param("id") id: Scope["id"],
    @Body() updateInfo: UpdateScopeDTO,
    @Req() req: Request

  ): Promise<ScopeDTO> {
   
    return await super.update(id, updateInfo, req);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Scope id"
  })
  @ApiOperation({
    summary: "Delete Scope",
    description: "Deletes Scope By ID"
  })
  @ApiNotFoundResponse({ description: "Scope Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.SCOPE_DELETE)
  @UseGuards(ScopeGuard)
  public async delete(
    @Param("id") id: Scope["id"],
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
    return await super.getFieldNames(new NewScopeDTO(), new UpdateGroupDTO(), new GroupDTO());
  }
}
