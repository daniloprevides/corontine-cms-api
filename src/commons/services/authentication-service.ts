import {
  Injectable,
  HttpService,
  ExecutionContext,
  UnauthorizedException,
  NotFoundException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TokenDto } from "../dto/token.dto";
import { GlobalInfoDto } from "../dto/global-info.dto";
import { PluginTypeEnum } from "../enum/plugin-type.enum";
import { Constants } from "../constants";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    private readonly http: HttpService
  ) {}

  public async getTokenInfo(localUrl:string, authorizationHeader:string) : Promise<TokenDto>{
    const url = this.configService.get("serverUrl");
    let urlAuthEndpoint: string = `${localUrl}/${Constants.AUTH_DETAILS_ENDPOINT}`;
    let tokenDto: TokenDto = null;
    if (url && url.trim().length) {
      const globalInfoResponse = await this.http.get(url).toPromise();
      if (globalInfoResponse.status != 200)
        throw new UnauthorizedException("Redirector Server is Offline");
      const globalInfo = globalInfoResponse.data as GlobalInfoDto;
      if (!globalInfo.plugins || !globalInfo.plugins.length)
        throw new UnauthorizedException(
          "Authentication Server is Offline or Invalid"
        );

      const authPlugin = globalInfo.plugins.find(
        g => g.pluginType == PluginTypeEnum.AUTH
      );
      if (!authPlugin)
        throw new NotFoundException("Authentication server not Found");

      urlAuthEndpoint = `${authPlugin.apiUrl}/${Constants.AUTH_DETAILS_ENDPOINT}`;
    }

    //Call authentication server to get token details
    try {
      const tokenDetailsResponse = await this.http
        .post(
          urlAuthEndpoint,
          {},
          {
            headers: { Authorization: authorizationHeader }
          }
        )
        .toPromise();
      tokenDto = tokenDetailsResponse.data as TokenDto;
    } catch (ex) {
      throw new UnauthorizedException(ex.message);
    }

    return tokenDto;
  }

  public async authorize(
    authorizationHeader: string,
    localUrl: string,
    scopes: string[],
    token?:TokenDto
  ): Promise<boolean> {
    if (!authorizationHeader) return false;
   
    let tokenDto:TokenDto = !token ? await this.getTokenInfo(localUrl,authorizationHeader) : token;
    if (!tokenDto.scope || !tokenDto.scope.trim().length) throw new UnauthorizedException("User not found");
    const tokenScopes = token.scope.split(" ");

    let hasPermission = false;
    scopes.forEach(i => {
      if (tokenScopes.find(s => s == i) != null) {
        hasPermission = true;
      }
    });

    return hasPermission;
  }
}
