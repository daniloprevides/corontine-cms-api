import { TokenDto } from "../../commons/dto/token.dto";
import { ClientCredentials } from "../entity/client-credentials.entity";
import { ScopeEnum } from "../enum/scope.enum";
import { getRepository } from "typeorm";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class ScopeGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const scopes: ScopeEnum[] = this.reflector.get<ScopeEnum[]>(
      "scopes",
      context.getHandler()
    );
    if (!scopes) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) return false;

    const [, token] = authorizationHeader.split(" ");
    let tokenDto: TokenDto;
    try {
      tokenDto = this.jwtService.verify<TokenDto>(token);
    } catch (e) {
      if (e.name === "TokenExpiredError") {
        throw new UnauthorizedException(e.message);
      }
      throw new InternalServerErrorException(e);
    }


    request.user = tokenDto;

    if (
      !tokenDto ||
      !tokenDto.scope ||
      !tokenDto.scope.length ||
      !tokenDto.scope.trim().length
    ) {
      throw new UnauthorizedException("User not found");
    }

    let hasPermission = false;
    scopes.forEach(i => {
      if (tokenDto.scope.split(" ").find(s => s == i) != null) {
        hasPermission = true;
      }
    });

    return hasPermission;

  }
}
