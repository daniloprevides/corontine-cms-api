import { ParserService } from '../../commons/services/parser.service';
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
      //environment: this.configService.get("env")
    });
    (globalInfoDto.description = api.description),
      (globalInfoDto.documentation = `${url}${api.path}`);
    globalInfoDto.version = api.version;
    globalInfoDto.url = `${url}/info`;
    globalInfoDto.plugins = new Mapper(
      Plugin,
      PluginInfoDto
    ).toDtoList(pluginData);
    globalInfoDto.components = await this.getPublicInfoFromComponents(globalInfoDto.plugins, url); //Access only to public fields
    globalInfoDto.plugins = await this.getPublicInfoFromPlugins(globalInfoDto.plugins, url)
    return globalInfoDto;
  }

  private async getPublicInfoFromComponents(plugins:PluginInfoDto[], url:string): Promise<ComponentInfoDto[]> {
    const context = {
      plugin : (fieldName:string, fieldValue:any) => {
        try {
          return plugins.find(p => p[fieldName] == fieldValue);
        }catch(ex){ console.error(ex);}
        return null;
      },
      serverUrl: () => {
        if (!process.env.SERVER_URL || (process.env.SERVER_URL && !process.env.SERVER_URL.length)){
          return url;
        }else{
          return process.env.SERVER_URL
        }
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

  private async getPublicInfoFromPlugins(plugins:PluginInfoDto[], url:string): Promise<PluginInfoDto[]> {
    const context = {
      serverUrl: () => {
        if (!process.env.SERVER_URL || (process.env.SERVER_URL && !process.env.SERVER_URL.length)){
          return url;
        }else{
          return process.env.SERVER_URL
        }
      },
      plugin : (fieldValue:any) => {
        try {
          return plugins.find(p => p['name'] == fieldValue);
        }catch(ex){ console.error(ex);}
        return null;
      }
    }
    plugins = plugins.map(p => {
      p.apiUrl = this.parserService.parse(p.apiUrl,context);
      p.addUrl = this.parserService.parse(p.addUrl,context);
      p.componentsUrl = this.parserService.parse(p.componentsUrl,context);
      p.getAllUrl = this.parserService.parse(p.getAllUrl,context);
      p.getUrl = this.parserService.parse(p.getUrl,context);
      p.removeUrl = this.parserService.parse(p.removeUrl,context);
      p.updateUrl = this.parserService.parse(p.updateUrl,context);
      return p;
    });


    return plugins;
  }
}
