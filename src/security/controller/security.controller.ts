import { TokenDto } from './../../commons/dto/token.dto';
import { SecurityConstants } from './../constants';
import { AuthorizationCodeService } from './../service/authorization-code.service';
import {
  Body,
  Controller,
  Headers,
  HttpCode,
  Logger,
  Post,
  UnauthorizedException,
  UseInterceptors,
  Get,
  Render,
  UseGuards,
  Req,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';
import { Constants } from '../../commons';

import { FileInterceptor } from '@nestjs/platform-express';
import { FacebookAuthUserDTO } from '../dto/facebook-auth-user.dto';
import { GoogleAuthUserDTO } from '../dto/google-auth-user.dto';
import { SecurityService } from '../service/security.service';
import { AuthDTO } from '../dto/auth.dto';
import { GeneratedTokenDTO } from '../dto/generated-token.dto';
import { ClientCredentials } from '../entity/client-credentials.entity';
import { User } from '../entity/user.entity';
import { GrantTypeEnum } from '../enum/grant-type.enum';
import { RequestAuthorizationCodeDTO } from '../dto/request-authorization-code.dto';
import { NeedScope } from '../../commons/guard/scope-metadata.guard';
import { ScopeEnum } from '../enum/scope.enum';
import { ScopeGuard } from '../guard/scope.guard';
import { IsOptional } from 'class-validator';
import { ApiParam, ApiHeader, ApiOAuth2 } from '@nestjs/swagger';
import { RequestCodeDTO } from '../dto/request-code.dto';
import Request = require("request");

@Controller(`/${SecurityConstants.OAUTH_ENDPOINT}`)
export class SecurityController {
  private readonly logger = new Logger(SecurityController.name);

  constructor(private readonly service: SecurityService, private readonly auhtorizationCodeService:AuthorizationCodeService) {}

  @UseInterceptors(FileInterceptor(''))
  @Post('/token')
  @ApiHeader({
    name: "authorization",
    allowEmptyValue: true,
    description: "Base64 authenticated string"
  })
  @ApiOAuth2([''])
  @HttpCode(200)
  async authenticateUser(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() { grant_type, username, password, refresh_token , redirect_uri, code, client_id, client_secret}: AuthDTO,
    @Req() request : Request,
  ): Promise<GeneratedTokenDTO> {
    //Try to get authorization from request
    let base64Login = null;
    const authorization = (request?.headers as any)?.authorization;
    if (authorization){
      [, base64Login] = authorization.split(' ');      
    }
    
    if (grant_type != GrantTypeEnum.PASSWORD && (!base64Login && (!client_id || !client_secret))) throw new UnauthorizedException();
    
    // eslint-disable-next-line @typescript-eslint/camelcase
    this.logger.log(`grant_type: ${grant_type}`);
    // Basic <base64login>
    
    switch(grant_type){
      case GrantTypeEnum.CLIENT_CREDENTIALS: return this.service.validateClientCredentials(base64Login, client_id, client_secret);
      case GrantTypeEnum.AUTHORIZATION_CODE: return this.service.getTokenFromAuthorizationCode(redirect_uri,code,client_id,client_secret);
      case GrantTypeEnum.PASSWORD: return this.service.getClientCredentialLogin(
        username,
        password,
      );
      case GrantTypeEnum.REFRESH_TOKEN: return this.service.refreshToken(base64Login, refresh_token);
    }
  }

  @UseInterceptors(FileInterceptor(''))
  @Post('/facebook/token')
  @HttpCode(200)
  async authenticateFacebookUser(
    @Body() facebookAuthUser: FacebookAuthUserDTO,
  ): Promise<GeneratedTokenDTO> {
    return this.service.validateFacebookUser(facebookAuthUser);
  }

  @UseInterceptors(FileInterceptor(''))
  @Post('/google/token')
  @HttpCode(200)
  async authenticateGoogleUser(
    @Body() googleAuthUser: GoogleAuthUserDTO,
  ): Promise<GeneratedTokenDTO> {
    return this.service.validateGoogleUser(googleAuthUser);
  }

  @Post('/token/details')
  @HttpCode(200)
  @NeedScope(ScopeEnum.TOKEN_INFO)
  @UseGuards(ScopeGuard)
  getTokenDetails(
    @Headers('authorization') authorizationHeader: string,
  ): TokenDto {
    const [, jwt] = authorizationHeader.split(' ');
    this.logger.log(`jwt: ${jwt}`);
    return this.service.decodeToken(jwt);
  }

  @Get("")
  @Render('oauth')
  async getCode(@Query() authorizationCode:RequestAuthorizationCodeDTO) {
    return await this.auhtorizationCodeService.add(authorizationCode);
  }


  @Get("/code")
  //@Redirect("", 302)
  async addCode(@Query() authorizationCode:RequestAuthorizationCodeDTO,  @Req() req : Request) {
    return await this.auhtorizationCodeService.add(authorizationCode);

    // const newCode =  await this.auhtorizationCodeService.addNewCode(requestCode.app_name, requestCode.state, requestCode.redirect_uri);
    // const redirectUri = req.protocol + "://" + req.get("host");
    // const uri = `${requestCode.redirect_uri}?code=${newCode.code}&state=${requestCode.state}&redirect_uri=${redirectUri}`;
    // return {url: uri};
  }

  @Post("/credential")
  @Redirect("", 302)
  async addCredential(@Body() requestCode:RequestCodeDTO,  @Req() req : Request) {
    const newCode =  await this.auhtorizationCodeService.addNewCode(requestCode.app_name, requestCode.state, requestCode.redirect_uri);
    const redirectUri = req.protocol + "://" + req.get("host");
    const uri = `${requestCode.redirect_uri}?code=${newCode.code}&state=${requestCode.state}&redirect_uri=${redirectUri}`;
    return {url: uri};
  }


}
