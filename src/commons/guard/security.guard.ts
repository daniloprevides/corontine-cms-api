import { AuthenticationService } from './../services/authentication-service';

import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

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
    const tokenDto = await this.authenticationService.getTokenInfo(localUrl, authorizationHeader);

    //Adding token to request session
    request.user = tokenDto;


    const isAuthorized = await this.authenticationService.authorize(authorizationHeader,localUrl,scopes, tokenDto);

    return isAuthorized;
  }
}
