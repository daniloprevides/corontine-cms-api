import { GlobalInfoDto } from "../../commons/dto/global-info.dto";
import { ConfigService } from "@nestjs/config";
import { PluginRepository } from "./../repository/plugin.repository";
import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { PluginMapper } from "../mapper/plugin.mapper";

@Injectable()
export class RedirectorService {
  constructor(
    @Inject(forwardRef(() => PluginRepository))
    public readonly pluginRepository: PluginRepository,
    @Inject(forwardRef(() => ConfigService))
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => PluginMapper))
    private readonly mapper: PluginMapper
  ) {}

  public async getInfo(url: string): Promise<GlobalInfoDto> {
    const api = this.configService.get("api");
    const globalInfoDto = new GlobalInfoDto();
    const pluginData = await this.pluginRepository.find({
      enabled: true,
      environment: this.configService.get("env")
    });
    (globalInfoDto.description = api.description),
      (globalInfoDto.documentation = `${url}${api.path}`);
    globalInfoDto.version = api.version;
    globalInfoDto.url = url;
    globalInfoDto.plugins = this.mapper.toDtoList(pluginData);

    return globalInfoDto;
  }
}
