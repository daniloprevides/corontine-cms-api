import { Injectable, HttpService, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Constants } from "../constants";
import { GlobalInfoDto } from "../dto/global-info.dto";

@Injectable()
export class RedirectorService {

    constructor(
        private readonly configService: ConfigService,
        private readonly http: HttpService
    ){

    }

    public async getGlobalInfoDto(localUrl:string) : Promise<GlobalInfoDto>{
      const urlEndpoint: string = `${localUrl}/${Constants.INFO_ENDPOINT}`;
      let infoDto = await this.getInfo(localUrl);
      if (!infoDto){
        const globalInfoResponse = await this.http.get(urlEndpoint).toPromise();
        infoDto = globalInfoResponse.data;
      }

      return infoDto;

    }

    public async getInfo(localUrl:string) : Promise<GlobalInfoDto>{
        const url = this.configService.get("serverUrl");
        if (url && url.trim().length) {
          const globalInfoResponse = await this.http.get(url).toPromise();
          if (globalInfoResponse.status != 200)
            throw new UnauthorizedException("Redirector Server is Offline");
          const globalInfo = globalInfoResponse.data as GlobalInfoDto;
          if (!globalInfo.plugins || !globalInfo.plugins.length)
            throw new UnauthorizedException(
              "Authentication Server is Offline or Invalid"
            );
        
            return globalInfo;
          
        }

        return null;
    }
}