import { TokenDto } from '../../commons/dto/token.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  Inject,
  forwardRef,
  BadRequestException,
} from '@nestjs/common';

import { classToPlain } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';
import { TokenExpiredError } from 'jsonwebtoken';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { ConfigService } from '@nestjs/config';
import { FacebookAuthUserDTO } from '../dto/facebook-auth-user.dto';
import { GoogleAuthUserDTO } from '../dto/google-auth-user.dto';
import { RefreshTokenUserDTO } from '../dto/refresh-token-user.dto';
import { ClientCredentialsRepository } from '../repository/client-credentials.repository';
import { UserService } from './user.service';
import { GeneratedTokenDTO } from '../dto/generated-token.dto';
import { ClientCredentials } from '../entity/client-credentials.entity';
import { User } from '../entity/user.entity';
import { ClientCredentialsEnum } from '../enum/client-credentials.enum';
import { InvalidClientCredentialsError } from '../exception/invalid-client-credentials.error';
import { AuthorizationCodeRepository } from '../repository/authorization-code.repository';

@Injectable()
export class SecurityService {
  constructor(
    @InjectRepository(ClientCredentialsRepository)
    private readonly clientCredentialsRepository: ClientCredentialsRepository,
    @Inject(forwardRef(() => JwtService))
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => ConfigService))
    private readonly appConfigService: ConfigService,
    @Inject(forwardRef(() => AuthorizationCodeRepository))
    private readonly authorizationCodeRepository: AuthorizationCodeRepository,
  ) {}

  @Transactional()
  public async validateClientCredentials(
    base64Login: string,
  ): Promise<GeneratedTokenDTO> {
    const [name, secret]: string[] = this.splitClientCredentials(
      this.base64ToString(base64Login),
    );

    const clientCredentials: ClientCredentials = await this.findClientCredentialsByNameAndSecret(
      ClientCredentialsEnum[name],
      secret,
    );

    const tokenDto = {
      id: clientCredentials.id,
      username: clientCredentials.name,
      secret: clientCredentials.secret,
      type: "client_credentials",
      scope: clientCredentials.scopes?.length ? clientCredentials.scopes.map(c => c.name).join(" ") : null
    } as TokenDto;

    return this.generateLoginObject(tokenDto);
  }

  @Transactional()
  public decodeToken(jwt: string): TokenDto {
    return this.jwtService.verify<TokenDto>(jwt);
  }

  private splitClientCredentials(login: string): string[] {
    return login.split(':');
  }

  private base64ToString(base64Login: string): string {
    return Buffer.from(base64Login, 'base64').toString('ascii');
  }

  @Transactional()
  public async getClientCredentialLogin(
    base64Login: string,
    username: string,
    password: string,
  ): Promise<GeneratedTokenDTO> {
    const [name, secret]: string[] = this.splitClientCredentials(
      this.base64ToString(base64Login),
    );
    await this.findClientCredentialsByNameAndSecret(
      ClientCredentialsEnum[name],
      secret,
    );
    const user: User = await this.userService.findByEmailAndPassword(
      username,
      password,
    );

    //@TODO -> Get all permissions
    const tokenDto = {
      id: user.id,
      username: user.name,
      secret: user.password,
      type: "user",
      scope: (await this.userService.getAllUserScopes(user.id)).map(s => s.name).join(" ")
    } as TokenDto;

    return this.generateLoginObject(tokenDto);
  }

  @Transactional()
  public async getTokenFromAuthorizationCode(
    redirectUri: string,
    code: string,
    clientId: string,
    clientSecret: string,
  ): Promise<GeneratedTokenDTO> {
    const clientCredentials = await this.findClientCredentialsByNameAndSecret(
      clientId as any,
      clientSecret,
    );

    //Creating a new Object For Token

    let authorizationCode = await this.authorizationCodeRepository.findOne({
      where: {redirect_uri: redirectUri, code: code, consumed : false}
      ,relations: ["scopes"]
    });

    if (!authorizationCode) throw new BadRequestException();

    const tokenDto = {
      id: clientCredentials.id,
      username: clientCredentials.name,
      secret: clientCredentials.secret,
      type: "client_credentials",
      scope: authorizationCode.scopes?.length ? authorizationCode.scopes.map(c => c.name).join(" ") : null //Must get token from  authorizationCode
    } as TokenDto;

    let loginInfo = this.generateLoginObject(tokenDto);
    authorizationCode.consumed= true;
    await this.authorizationCodeRepository.save(authorizationCode);
  
    return loginInfo;
  }

  public async validateFacebookUser(
    facebookAuthUser: FacebookAuthUserDTO,
  ): Promise<GeneratedTokenDTO> {
    const user: User = await this.userService.findByEmail(
      facebookAuthUser.email,
    );
    if (!user.facebookId) {
      user.facebookId = facebookAuthUser.id;
      const { groups, ...userInfo } = user;
      const userWithFacebookId: User = await this.userService.update(
        user.id,
        userInfo,
      );

      const tokenDto = {
        id: userWithFacebookId.id,
        username: userWithFacebookId.name,
        secret: userWithFacebookId.password,
        type: "user:facebook",
        scope: (await this.userService.getAllUserScopes(userWithFacebookId.id)).map(s => s.name).join(" ")
      } as TokenDto;

      return this.generateLoginObject(tokenDto);
    }
    if (user.facebookId !== facebookAuthUser.id) {
      throw new NotFoundException('User not found');
    }
    const tokenDto = {
      id: user.id,
      username: user.name,
      secret: user.password,
      type: "user",
      scope: (await this.userService.getAllUserScopes(user.id)).map(s => s.name).join(" ")
    } as TokenDto;
    
    return this.generateLoginObject(tokenDto);
  }

  public async validateGoogleUser(
    googleAuthUser: GoogleAuthUserDTO,
  ): Promise<GeneratedTokenDTO> {
    const user: User = await this.userService.findByEmail(googleAuthUser.email);
    if (!user.googleSub) {
      user.googleSub = googleAuthUser.sub;
      const { groups, ...userInfo } = user;
      const userWithGoogleSub: User = await this.userService.update(
        user.id,
        userInfo,
      );

      const tokenDto = {
        id: userWithGoogleSub.id,
        username: userWithGoogleSub.name,
        secret: userWithGoogleSub.password,
        type: "user:google",
        scope: (await this.userService.getAllUserScopes(userWithGoogleSub.id)).map(s => s.name).join(" ")
      } as TokenDto;

      return this.generateLoginObject(tokenDto);
    }
    if (user.googleSub !== googleAuthUser.sub) {
      throw new NotFoundException('User not found');
    }

    const tokenDto = {
      id: user.id,
      username: user.name,
      secret: user.password,
      type: "user",
      scope: (await this.userService.getAllUserScopes(user.id)).map(s => s.name).join(" ")
    } as TokenDto;

    return this.generateLoginObject(tokenDto);
  }

  @Transactional()
  public async refreshToken(
    base64Login: string,
    refreshToken: string,
  ): Promise<GeneratedTokenDTO> {
    const [name, secret]: string[] = this.splitClientCredentials(
      this.base64ToString(base64Login),
    );
    await this.findClientCredentialsByNameAndSecret(
      ClientCredentialsEnum[name],
      secret,
    );
    let refreshTokenUser: RefreshTokenUserDTO;
    try {
      refreshTokenUser.user = this.getUserFromToken(refreshToken);
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new UnauthorizedException('Refresh Token expired');
      }
      throw error;
    }
    const isRefreshToken  = refreshTokenUser.isRefreshToken;
    const email = refreshTokenUser.user.email;
    if (!isRefreshToken) {
      throw new UnauthorizedException('The given token is not a Refresh Token');
    }
    const user: User = await this.userService.findByEmail(email);
    const tokenDto = {
      id: user.id,
      username: user.name,
      secret: user.password,
      type: "user",
      scope: (await this.userService.getAllUserScopes(user.id)).map(s => s.name).join(" ")
    } as TokenDto;

    return this.generateLoginObject(tokenDto);
  }

  public getUserFromToken<T extends User>(jwt: string): T {
    return this.jwtService.verify<T>(jwt);
  }

  private generateLoginObject(
    tokenDto: TokenDto
  ): GeneratedTokenDTO {   
    
    return {
      accessToken: this.jwtService.sign(classToPlain(tokenDto), {
        expiresIn: this.appConfigService.get("jwt").tokenExpiration,
      }),
      refreshToken: this.jwtService.sign(
        classToPlain({
          ...tokenDto,
          isRefreshToken: true,
        }),
        {
          expiresIn: this.appConfigService.get('jwt').refreshExpiration,
        },
      ),
      tokenType: 'bearer',
      expiresIn: this.appConfigService.get("jwt").tokenExpiration,
      scope: tokenDto.scope
    };
  }

  private async findClientCredentialsByNameAndSecret(
    name: ClientCredentialsEnum,
    secret: string,
  ): Promise<ClientCredentials> {
    if (!name) {
      throw new InvalidClientCredentialsError();
    }
    const clientCredentials: ClientCredentials = await this.clientCredentialsRepository.findOne({ name, secret }, { relations: ["scopes"] });

    if (!clientCredentials) {
      throw new InvalidClientCredentialsError();
    }
    return clientCredentials;
  }
}
