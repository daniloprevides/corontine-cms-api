import { Group } from './../security/entity/group.entity';
import { ScopeEnum } from './../plugin/enum/scope.enum';
import { PluginEnvironmentEnum } from './../plugin/enum/environment.enum';
import { PluginTypeEnum } from '../commons/enum/plugin-type.enum';
import { Plugin } from './../plugin/entity/plugin.entity';
import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Scope } from './../security/entity/scope.entity';

export class PluginsData1582890034060 implements MigrationInterface {

    private async createScopes(){
        const scopeRepository = getRepository<Scope>("scope");
        const createScope = async (scopeEnum:ScopeEnum, description:string) => {
            let scope = new Scope();
            scope.name = scopeEnum;
            scope.description = description;
            return await scopeRepository.save(scope);
        }

        await createScope(ScopeEnum.ATTRIBUTES_CREATE, "Create attributes for fields");
        await createScope(ScopeEnum.ATTRIBUTES_READ, "Read attributes for fields");
        await createScope(ScopeEnum.ATTRIBUTES_DELETE, "Delete attributes for fields");
        await createScope(ScopeEnum.ATTRIBUTES_UPDATE, "Update attributes for fields");

        await createScope(ScopeEnum.COMPONENTS_CREATE, "Create components for plugins");
        await createScope(ScopeEnum.COMPONENTS_READ, "Read components for plugins");
        await createScope(ScopeEnum.COMPONENTS_DELETE, "Delete components for plugins");
        await createScope(ScopeEnum.COMPONENTS_UPDATE, "Update components for plugins");

        await createScope(ScopeEnum.FIELDS_CREATE, "Create fields for components");
        await createScope(ScopeEnum.FIELDS_READ, "Read fields for components");
        await createScope(ScopeEnum.FIELDS_DELETE, "Delete fields for components");
        await createScope(ScopeEnum.FIELDS_UPDATE, "Update fields for components");

        await createScope(ScopeEnum.PLUGIN_CREATE, "Create plugins");
        await createScope(ScopeEnum.PLUGIN_READ, "Read plugins");
        await createScope(ScopeEnum.PLUGIN_DELETE, "Delete plugins");
        await createScope(ScopeEnum.PLUGIN_UPDATE, "Update plugins");


    }

    private async addScopesToAdminGroup(){
        const groupRepository = getRepository<Group>("group");
        const scopeRepository = getRepository<Scope>("scope");

        const adminGroup = await groupRepository.findOne({name: "admin"});
        adminGroup.scopes = await scopeRepository.find();
        groupRepository.save(adminGroup); 
    }

    public async up(queryRunner: QueryRunner): Promise<any> {
        const pluginRepository = getRepository<Plugin>("plugin");
        const authenticationPlugin = new Plugin();
        authenticationPlugin.apiUrl = "http://localhost:3000/oauth/token";
        authenticationPlugin.pluginType = PluginTypeEnum.AUTH;
        authenticationPlugin.name = "authentication";
        authenticationPlugin.environment = PluginEnvironmentEnum.DEVELOPMENT;
        pluginRepository.save(authenticationPlugin);

        //Creating new Scopes
        await this.createScopes();

        //Adding scopes to admin groups
        await this.addScopesToAdminGroup();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
