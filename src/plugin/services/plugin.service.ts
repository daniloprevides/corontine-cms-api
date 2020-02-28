import { AuthenticationService } from './../../commons/services/authentication-service';
import { UpdatePluginDto } from './../dto/update-plugin.dto';
import { NewPluginDto } from './../dto/new-plugin.dto';
import { PluginRepository } from './../repository/plugin.repository';
import { Plugin } from './../entity/plugin.entity';
import {GenericService} from "../../commons/services/generic.service";
import { Injectable, Inject, forwardRef, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';

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
    protected readonly authenticationService: AuthenticationService

    ) {
    super(pluginRepository, "Plugin");
  }


  public async addItem(item: NewPluginDto, authorizationHeader:string, url:string): Promise<Plugin> {
    let tokenData = await this.authenticationService.getTokenInfo(url,authorizationHeader);
    item.clientId = tokenData.id;
    return super.add(item);
  }

  protected getRelations(): Array<string> {
    return ["components"];
  }
}
