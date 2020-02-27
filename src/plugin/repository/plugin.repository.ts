import { Plugin } from './../entity/plugin.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Plugin)
export class PluginRepository extends Repository<Plugin> {}
