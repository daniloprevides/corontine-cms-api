import { Scope } from "./../security/entity/scope.entity";
import { Group } from "./../security/entity/group.entity";
import { PluginEnvironmentEnum } from "./../plugin/enum/environment.enum";
import { PluginTypeEnum } from "./../commons/enum/plugin-type.enum";
import { Plugin } from "./../plugin/entity/plugin.entity";
import { ScopeEnum } from "./../security/enum/scope.enum";
import { ScopeEnum as PluginScopeEnum } from "./../plugin/enum/scope.enum";

import { MenuScopeEnum } from "./../menu/enum/menu-scope.enum";
import { GlobalMenu } from "./../menu/enum/global-menu.enum";
import { ClientCredentialsEnum } from "./../security/enum/client-credentials.enum";
import { ClientCredentials } from "./../security/entity/client-credentials.entity";
import { Menu } from "./../menu/entity/menu.entity";
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";

export class Menu1583479128281 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    //Creating the plugin entry
    await this.createPlugin();

    //Creating new Scopes
    await this.addScopesToAdminGroup();


    //Menus

  }

  private async addScopesToAdminGroup() {

    const groupRepository = getRepository<Group>("group");
    const scopeRepository = getRepository<Scope>("scope");

    const createScope = async (scopeEnum: MenuScopeEnum, description: string) => {
      let scope = new Scope();
      scope.name = scopeEnum;
      scope.description = description;
      return await scopeRepository.save(scope);
    };

    await createScope(MenuScopeEnum.MENU_CREATE, "Create menu");
    const menuPermission = await createScope(MenuScopeEnum.MENU_READ, "Read menu");
    await createScope(MenuScopeEnum.MENU_DELETE, "Delete menu");
    await createScope(MenuScopeEnum.MENU_UPDATE, "Update menu");
    await createScope(MenuScopeEnum.MENU_ADD_ENTRY, "Add entry to custom menu");


    const adminGroup = await groupRepository.findOne({ name: "admin" });
    adminGroup.scopes = await scopeRepository.find();
    groupRepository.save(adminGroup);

    const defaultUserGroup = await groupRepository.findOne({ name: "Default User" }, {relations: ["scopes"]});
    defaultUserGroup.scopes.push(menuPermission);
    groupRepository.save(defaultUserGroup);

  }

  private async createPlugin() {
    const clientCredentialsRepository = getRepository<ClientCredentials>(
      "client-credentials"
    );
    let clientCredentialsDefault = await clientCredentialsRepository.findOne({
      where: { name: ClientCredentialsEnum["USER_PERMISSIONS@APP"] }
    });
    const pluginRepository = getRepository<Plugin>("plugin");

    const menuPlugin = new Plugin();
    menuPlugin.apiUrl = "http://localhost:3000";
    menuPlugin.pluginType = PluginTypeEnum.MENU;
    menuPlugin.name = "menu";
    menuPlugin.environment = PluginEnvironmentEnum.DEVELOPMENT;
    menuPlugin.componentsUrl = "http://localhost:3000";
    menuPlugin.clientId = clientCredentialsDefault.id;

    return pluginRepository.save(menuPlugin);
  }

 

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
