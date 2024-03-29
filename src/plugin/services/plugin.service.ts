import { AuthenticationService } from './../../commons/services/authentication-service';
import { UpdatePluginDto } from './../dto/update-plugin.dto';
import { NewPluginDto } from './../dto/new-plugin.dto';
import { PluginRepository } from './../repository/plugin.repository';
import { Plugin } from './../entity/plugin.entity';
import {GenericService} from "../../commons/services/generic.service";
import { Injectable, Inject, forwardRef, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PluginService extends GenericService<
  Plugin,
  PluginRepository,
  NewPluginDto,
  UpdatePluginDto
> {
  constructor(
    @Inject(forwardRef(() => PluginRepository))
    public readonly pluginRepository: PluginRepository,
    @Inject(forwardRef(() => AuthenticationService))
    protected readonly authenticationService: AuthenticationService,
    @Inject(forwardRef(() => ConfigService))
    protected readonly configService: ConfigService
    ) {
    super(pluginRepository, "Plugin");
  }

  setNeededFieldsOnChildren(clientId:string, item:Plugin){
    item?.components?.forEach(f => f.clientId = clientId);
  }

  public async validateParent(clientId:string, id:string): Promise<boolean>{
    return true;
  }


  public async add(item: NewPluginDto, clientId: string): Promise<Plugin> {
    if (!item.environment){
      item.environment === this.configService.get("env");
    }
    return super.add(item,clientId)
  }

  protected getRelations(): Array<string> {
    return ["components"];
  }
}
