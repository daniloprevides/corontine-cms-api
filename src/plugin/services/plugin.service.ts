import { UpdatePluginDto } from './../dto/update-plugin.dto';
import { NewPluginDto } from './../dto/new-plugin.dto';
import { PluginRepository } from './../repository/plugin.repository';
import { Plugin } from './../entity/plugin.entity';
import {GenericService} from "../../commons/services/generic.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class PluginService extends GenericService<
  Plugin,
  PluginRepository,
  NewPluginDto,
  UpdatePluginDto
> {
  constructor(public readonly pluginRepository: PluginRepository) {
    super(pluginRepository, "Plugin");
  }

  protected getRelations(): Array<string> {
    return ["components"];
  }
}
