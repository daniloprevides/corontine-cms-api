import { UpdateClientCredentialsDTO } from "./../dto/update-client-credentials.dto";
import { ClientCredentialsMapper } from "./../mapper/client-credentials.mapper";
import { ClientCredentialsService } from "./../service/client-credentials.service";
import { NewClientCredentialsDTO } from "./../dto/new-client-credentials.dto";
import { ClientCredentialsDTO } from "./../dto/client-credentials.dto";
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
  ApiParam
} from "@nestjs/swagger";
import { ClientCredentials } from "../entity/client-credentials.entity";
import { NeedScope } from "../../commons/guard/scope-metadata.guard";
import { ScopeEnum } from "../enum/scope.enum";
import { ScopeGuard } from "../guard/scope.guard";

@ApiTags("ClientCredentials")
@ApiBearerAuth()
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.CLIENT_CREDENTIALS_ENDPOINT}`
)
export class ClientCredentialsController {
  private readonly logger = new Logger(ClientCredentialsController.name);

  constructor(
    private readonly service: ClientCredentialsService,
    private readonly mapper: ClientCredentialsMapper
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Client Credentials",
    description: "Get all Client Credentials"
  })
  @ApiOkResponse({
    type: NewClientCredentialsDTO,
    isArray: true,
    description: "All Client Credentials"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.CLIENT_CREDENTIALS_READ)
  @UseGuards(ScopeGuard)
  public async getAll(): Promise<ClientCredentialsDTO[]> {
    return this.mapper.toDtoList(await this.service.getAll());
  }

  @Get(":id")
  @HttpCode(200)
  @ApiOperation({
    summary: "Get Client Credential By Id",
    description: "Get Client Credential by Id"
  })
  @ApiOkResponse({
    type: NewClientCredentialsDTO,
    isArray: false,
    description: "Get Client Credential by Id"
  })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.CLIENT_CREDENTIALS_READ)
  @UseGuards(ScopeGuard)
  public async getById(
    @Headers("authorization") authorization: string,
    @Param("id") id: ClientCredentials["id"]
  ): Promise<ClientCredentialsDTO> {
    return this.mapper.toDto(await this.service.findById(id));
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: NewClientCredentialsDTO,
    description: "Credential created"
  })
  @ApiOperation({ summary: "Add user", description: "Creates a new user" })
  @ApiBody({ type: NewClientCredentialsDTO })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have needed scopes"
  })
  @NeedScope(ScopeEnum.CLIENT_CREDENTIALS_CREATE)
  @UseGuards(ScopeGuard)
  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NewClientCredentialsDTO,
    @Headers("authorization") authorization: string
  ): Promise<ClientCredentialsDTO> {
    if (!authorization) {
      throw new UnauthorizedException();
    }
    return this.mapper.toDto(await this.service.add(newItem));
  }

  @Put(":id")
  @HttpCode(200)
  @ApiOkResponse({ type: ClientCredentialsDTO })
  @ApiOperation({
    summary: "Update Client Credentials",
    description: "Updates the client Credential By ID"
  })
  @ApiNotFoundResponse({ description: "Client Credential Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.CLIENT_CREDENTIALS_UPDATE)
  @UseGuards(ScopeGuard)
  public async updateClientCredential(
    @Headers("authorization") authorization: string,
    @Param("id") id: ClientCredentials["id"],
    @Body() updateInfo: UpdateClientCredentialsDTO
  ): Promise<ClientCredentialsDTO> {
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
    description: "User id"
  })
  @ApiOperation({
    summary: "Delete Client Credentials",
    description: "Deletes the client Credential By ID"
  })
  @ApiNotFoundResponse({ description: "Client Credential Not Found" })
  @ApiUnauthorizedResponse({
    description:
      "thrown if there is not an authorization token or if authorization token does not have enough privileges"
  })
  @NeedScope(ScopeEnum.CLIENT_CREDENTIALS_DELETE)
  @UseGuards(ScopeGuard)
  public async deleteClientCredential(
    @Headers("authorization") authorization: string,
    @Param("id") id: ClientCredentials["id"]
  ): Promise<void> {
    if (!authorization) {
      throw new UnauthorizedException();
    }

    return await this.service.delete(id);
  }
}
