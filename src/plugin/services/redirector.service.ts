import { ParserService } from './parser.service';
import { Components } from './../entity/components.entity';
import { ComponentsRepository } from "./../repository/components.repository";
import { ComponentInfoDto } from "./../../commons/dto/component-info.dto";
import { PluginInfoDto } from "../../commons/dto/plugin-info.dto";
import { Plugin } from "./../entity/plugin.entity";
import { Mapper } from "./../../commons/mapper/mapper";
import { GlobalInfoDto } from "../../commons/dto/global-info.dto";
import { ConfigService } from "@nestjs/config";
import { PluginRepository } from "./../repository/plugin.repository";
import { Injectable, Inject, forwardRef } from "@nestjs/common";

@Injectable()
export class RedirectorService {
  constructor(
    @Inject(forwardRef(() => PluginRepository))
    public readonly pluginRepository: PluginRepository,
    @Inject(forwardRef(() => ConfigService))
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => ComponentsRepository))
    private readonly componentsRepository: ComponentsRepository,
    @Inject(forwardRef(() => ParserService))
    private readonly parserService: ParserService
  ) {}

  public async getPublicInfo(url: string): Promise<GlobalInfoDto> {
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
    globalInfoDto.plugins = new Mapper(
      Plugin,
      PluginInfoDto
    ).toDtoList(pluginData);
    globalInfoDto.components = await this.getPublicInfoFromComponents(globalInfoDto.plugins); //Access only to public fields

    return globalInfoDto;
  }

  private async getPublicInfoFromComponents(plugins:PluginInfoDto[]): Promise<ComponentInfoDto[]> {
    const context = {
      plugin : (fieldName:string, fieldValue:any) => {
        try {
          return plugins.find(p => p[fieldName] == fieldValue);
        }catch(ex){ console.error(ex);}
        return null;

      }
    }
    let components = await this.componentsRepository.find({ relations: ["plugin"], where: { "plugin.enabled":  true} });
    components = components.map(c => {
      c.url = this.parserService.parse(c.url, context).toString();
      return c;
    });

    return new Mapper(
      Components ,
      ComponentInfoDto
    ).toDtoList(components);
  }
}
