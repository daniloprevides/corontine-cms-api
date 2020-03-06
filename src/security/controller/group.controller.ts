import { GroupDTO } from './../dto/group.dto';
import { NewGroupDTO } from "./../dto/new-group.dto";
import { UpdateGroupDTO } from "./../dto/update-group.dto";
import { GroupMapper } from "./../mapper/group.mapper";
import { GroupService } from "./../service/group.service";
import {
  Body,
  Controller,
  Headers,
  HttpCode,
  Logger,
  Post,
  UnauthorizedException,
  UseInterceptors,
  UseGuards,
  Put,
  Delete,
  Param,
  Get
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
export class GroupController {
  private readonly logger = new Logger(GroupController.name);

  constructor(
    private readonly service: GroupService,
    private readonly mapper: GroupMapper
  ) {}

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
  public async getAll(): Promise<GroupDTO[]> {
    return this.mapper.toDtoList(await this.service.getAll());
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
    @Param("id") id: Group["id"]
  ): Promise<GroupDTO> {
    return this.mapper.toDto(await this.service.findById(id));
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
  ): Promise<GroupDTO> {
    let item = await this.service.add(newItem);
    return this.mapper.toDto(item);
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
    @Headers("authorization") authorization: string,
    @Param("id") id: Group["id"],
    @Body() updateInfo: UpdateGroupDTO
  ): Promise<GroupDTO> {
    if (!authorization) {
      throw new UnauthorizedException();
    }

    return await this.service.update(id, updateInfo);
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
    @Headers("authorization") authorization: string,
    @Param("id") id: Group["id"]
  ): Promise<void> {
    if (!authorization) {
      throw new UnauthorizedException();
    }

    return await this.service.delete(id);
  }
}
