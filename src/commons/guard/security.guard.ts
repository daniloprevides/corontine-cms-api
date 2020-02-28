import { AuthenticationService } from './../services/authentication-service';
import { TokenDto } from "./../dto/token.dto";
import { PluginTypeEnum } from "../enum/plugin-type.enum";
import { GlobalInfoDto } from "../dto/global-info.dto";
import { ConfigService } from "@nestjs/config";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  HttpService,
  NotFoundException
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Constants } from "../constants";

@Injectable()
export class SecurityGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authenticationService: AuthenticationService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const scopes: string[] = this.reflector.get<string[]>(
      "scopes",
      context.getHandler()
    );
    if (!scopes) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) return false;

    const localUrl = request.protocol + "://" + request.get("host");

    return this.authenticationService.authorize(authorizationHeader,localUrl,scopes);
  }
}
