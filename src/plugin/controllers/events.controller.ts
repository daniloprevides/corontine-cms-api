import { EventsDto } from './../dto/events.dto';
import { UpdateEventsDto } from './../dto/update-events.dto';
import { NewEventsDto } from './../dto/new-events.dto';
import { Events } from './../entity/events.entity';
import { SecurityGuard } from './../../commons/guard/security.guard';
import { NeedScope } from './../../commons/guard/scope-metadata.guard';
import { AuthenticationService } from './../../commons/services/authentication-service';
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
import { ScopeEnum } from '../enum/scope.enum';
import { EventsService } from '../services/events.service';
import { EventsMapper } from '../mapper/events.mapper';

@ApiTags("Events")
@ApiBearerAuth()
@ApiHeader({
  name: "authorization",
  allowEmptyValue: false,
  description: "Bearer Authorization token"
})

@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.EVENTS_ENDPOINT}`
)
export class EventsController extends GenericController<
  Events,
  NewEventsDto,
  UpdateEventsDto,
  EventsDto,
  EventsMapper,
  EventsService
> {

  constructor(
    eventsService: EventsService,
    eventsMapper: EventsMapper,
    authenticationService:AuthenticationService
  ) {
    super(eventsService, eventsMapper, authenticationService, "Events");
  }

  public getParentFieldName(): string {
    return "field";
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Events",
    description: "Get all Events"
  })
  @ApiOkResponse({
    type: EventsDto,
    isArray: true,
    description: "All Events"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @ApiQuery({
    type: FindParamsDto,
    name: "Pagination and Filter Params"
  })
  @NeedScope(ScopeEnum.EVENTS_READ)
  @UseGuards(SecurityGuard)
  public async getAll(@Query() queryParams:FindParamsDto, @Req() req:Request): Promise<EventsDto[]> {
    return super.getAll(queryParams,req);
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Events By Id",
    description: "Get Events by Id"
  })
  @ApiOkResponse({
    type: EventsDto,
    isArray: false,
    description: "Get Events by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.EVENTS_READ)
  @UseGuards(SecurityGuard)
  public async getById(
    @Param("id") id: Events["id"]
    , @Req() req: Request
  ): Promise<EventsDto> {
    return await super.getById(id,req);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: EventsDto,
    description: "Events created"
  })
  @ApiOperation({
    summary: "Add Event",
    description: "Creates a new Event"
  })
  @ApiBody({ type: NewEventsDto })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(ScopeEnum.EVENTS_CREATE)
  @UseGuards(SecurityGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewEventsDto
    , @Req() req: Request
  ): Promise<EventsDto> {
    return await super.add(newItem, req);
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: EventsDto })
  @ApiOperation({
    summary: "Update Events",
    description: "Updates the Event By ID"
  })
  @ApiNotFoundResponse({ description: "Event Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.EVENTS_UPDATE)
  @UseGuards(SecurityGuard)
  public async update(
    @Param("id") id: Events["id"],
    @Body() updateInfo: UpdateEventsDto
    , @Req() req: Request
  ): Promise<EventsDto> {
    return await super.update(id, updateInfo, req);
  }

  @Delete(":id")
  @HttpCode(200)
  @ApiParam({
    name: "id",
    type: Number,
    required: true,
    description: "Events id"
  })
  @ApiOperation({
    summary: "Delete Event",
    description: "Deletes Events By ID"
  })
  @NeedScope(ScopeEnum.EVENTS_DELETE)
  @UseGuards(SecurityGuard)
  @ApiNotFoundResponse({ description: "Events Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  public async delete(@Param("id") id: Events["id"], @Req() req: Request): Promise<void> {
    return await super.delete(id, req);
  }
}
