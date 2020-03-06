import { ClientCredentialsEnum } from './../security/enum/client-credentials.enum';
import { ClientCredentials } from './../security/entity/client-credentials.entity';
import { Constants } from './../commons/constants';
import { Group } from './../security/entity/group.entity';
import { ScopeEnum } from './../plugin/enum/scope.enum';
import { ScopeEnum as SecurityScopeEnum} from './../security/enum/scope.enum';

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

        await createScope(ScopeEnum.EVENTS_CREATE, "Create events");
        await createScope(ScopeEnum.EVENTS_READ, "Read events");
        await createScope(ScopeEnum.EVENTS_DELETE, "Delete events");
        await createScope(ScopeEnum.EVENTS_UPDATE, "Update events");

        await createScope(ScopeEnum.CMS, "Scope needed for CMS screen tasks (Only for users)");


    }

    private async addScopesToAdminGroup(){
        const groupRepository = getRepository<Group>("group");
        const scopeRepository = getRepository<Scope>("scope");

        const adminGroup = await groupRepository.findOne({name: "admin"});
        adminGroup.scopes = await scopeRepository.find();
        groupRepository.save(adminGroup); 
    }

    private async createDefaultUserGroupWithPermissions(){
        const scopeRepository = getRepository<Scope>("scope");
        const groupRepository = getRepository<Group>("group");

        const userGroup = new Group();
        userGroup.name = "Default User";
        userGroup.description = "Default Permissions for regular user";
        userGroup.scopes = [
            await scopeRepository.findOne({where: {name: ScopeEnum.CMS}}) , 
            await scopeRepository.findOne({where: {name: SecurityScopeEnum.USER_ME_READ}}) , 
            await scopeRepository.findOne({where: {name: SecurityScopeEnum.USER_ME_UPDATE}}) , 
            await scopeRepository.findOne({where: {name: SecurityScopeEnum.TOKEN_INFO}}) ];
        await groupRepository.save(userGroup);
    }

    public async up(queryRunner: QueryRunner): Promise<any> {
        const clientCredentialsRepository = getRepository<ClientCredentials>("client-credentials");
        let clientCredentialsDefault = await clientCredentialsRepository.findOne({where: {name: ClientCredentialsEnum["USER_PERMISSIONS@APP"]}});
        const pluginRepository = getRepository<Plugin>("plugin");

        const authenticationPlugin = new Plugin();
        authenticationPlugin.apiUrl = "http://localhost:3000";
        authenticationPlugin.pluginType = PluginTypeEnum.AUTH;
        authenticationPlugin.name = "authentication";
        authenticationPlugin.environment = PluginEnvironmentEnum.DEVELOPMENT;
        authenticationPlugin.componentsUrl = "http://localhost:3000";
        authenticationPlugin.clientId = clientCredentialsDefault.id;

        const basePlugin = new Plugin();
        basePlugin.apiUrl = `http://localhost:3000/${Constants.API_PREFIX}/${Constants.API_VERSION_1}`;
        basePlugin.pluginType = PluginTypeEnum.BASE;
        basePlugin.name = "base";
        basePlugin.componentsUrl = "http://localhost:3000";
        basePlugin.environment = PluginEnvironmentEnum.DEVELOPMENT;
        basePlugin.clientId = clientCredentialsDefault.id;


        pluginRepository.save(authenticationPlugin);
        pluginRepository.save(basePlugin);

        //Creating new Scopes
        await this.createScopes();

        //Creating default group for user
        await this.createDefaultUserGroupWithPermissions()

        //Adding scopes to admin groups
        await this.addScopesToAdminGroup();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
