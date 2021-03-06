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

@ApiTags("Group")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.GROUP_ENDPOINT}`
)

export class GroupController extends GenericController<
Group,
NewGroupDTO,
UpdateGroupDTO,
GroupDTO,
GroupMapper,
GroupService
> {

constructor(
  service: GroupService,
  groupsMapper: GroupMapper,
  authenticationService:AuthenticationService,
  private scopeRepository: ScopeRepository
) {
  super(service, groupsMapper, authenticationService, "Group");
}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: "Get Groups", description: "Get all Groups" })
  @ApiOkResponse({
    type: GroupDTO,
    isArray: true,
    description: "All groups"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.GROUP_READ)
  @UseGuards(ScopeGuard)
  public async getAll(
    @Query() queryParams: FindParamsDto,
    @Req() req: Request
  ): Promise<GroupDTO[]> {
    return super.getAll(queryParams, req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Group By Id",
    description: "Get Group by Id"
  })
  @ApiOkResponse({
    type: GroupDTO,
    isArray: false,
    description: "Get Group by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.CLIENT_CREDENTIALS_READ)
  @UseGuards(ScopeGuard)
  public async getById(
    @Param("id") id: Group["id"],
    @Req() req: Request
  ): Promise<GroupDTO> {
    return await super.getById(id, req);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: GroupDTO,
    description: "Group created"
  })
  @ApiOperation({ summary: "Add Group", description: "Creates a new group" })
  @ApiBody({ type: NewGroupDTO })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(ScopeEnum.GROUP_CREATE)
  @UseGuards(ScopeGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewGroupDTO,
    @Req() req: Request
  ): Promise<GroupDTO> {
    let scopes = new Array<Scope>();
    if (newItem.scopes){
      for (let scope of newItem.scopes){
        let currentScope = await this.scopeRepository.findOne({where: {name: scope.name}});
        if (!currentScope){
          throw new NotFoundException();
        }
        scopes.push(currentScope);
      }
    }
    return await super.add({
      name: newItem.name,
      description: newItem.description,
      scopes: scopes
    }, req);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: GroupDTO })
  @ApiOperation({
    summary: "Update Group",
    description: "Updates the Group By ID"
  })
  @ApiNotFoundResponse({ description: "Group Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.GROUP_UPDATE)
  @UseGuards(ScopeGuard)
  public async update(
    @Param("id") id: Group["id"],
    @Body() updateInfo: UpdateGroupDTO,
    @Req() req: Request

  ): Promise<GroupDTO> {

    let scopes = new Array<Scope>();
    if (updateInfo.scopes){
      for (let scope of updateInfo.scopes){
        let currentScope = await this.scopeRepository.findOne({where: {name: scope.name}});
        if (!currentScope){
          throw new NotFoundException();
        }
        scopes.push(currentScope);
      }
    }
    return await super.update(id, {
      id: id,
      name: updateInfo.name,
      description: updateInfo.description,
      scopes: scopes
    }, req);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Group id"
  })
  @ApiOperation({
    summary: "Delete Group",
    description: "Deletes Group By ID"
  })
  @ApiNotFoundResponse({ description: "Group Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.GROUP_DELETE)
  @UseGuards(ScopeGuard)
  public async delete(
    @Param("id") id: Group["id"],
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
    return await super.getFieldNames(new NewGroupDTO(), new UpdateGroupDTO(), new GroupDTO());
  }
}
