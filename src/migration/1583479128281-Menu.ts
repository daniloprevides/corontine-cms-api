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
    const menuGroup = await this.createMenu(
      "group-menu",
      "Group",
      "Groups",
      null,
      ScopeEnum.GROUP_READ,
      1
    );

    const menuUser = await this.createMenu(
      "user-menu",
      "User",
      "Users",
      null,
      ScopeEnum.USER_READ,
      2
    );

    const menuClientCredential = await this.createMenu(
      "client-credentials-menu",
      "Client Credentials",
      "Client Credentials",
      null,
      ScopeEnum.CLIENT_CREDENTIALS_READ,
      3
    );


    const menuPlugin = await this.createMenu(
      "plugin-menu",
      "Plugins",
      "Plugins",
      null,
      PluginScopeEnum.PLUGIN_READ,
      4
    );

    const menuComponents = await this.createMenu(
      "components-menu",
      "Components",
      "Components",
      null,
      PluginScopeEnum.COMPONENTS_READ,
      5
    );

    const menuFields = await this.createMenu(
      "fields-menu",
      "Fields",
      "Fields",
      null,
      PluginScopeEnum.FIELDS_READ,
      6
    );

    const menuAttributes = await this.createMenu(
      "attributes-menu",
      "Attributes",
      "Attributes",
      null,
      PluginScopeEnum.ATTRIBUTES_READ,
      7
    );

    const menuEvents = await this.createMenu(
      "events-menu",
      "Events",
      "Events",
      null,
      PluginScopeEnum.EVENTS_READ,
      8
    );

    const menuMenu = await this.createMenu(
      "menu-menu",
      "Menu",
      "Menu",
      null,
      MenuScopeEnum.MENU_READ,
      9
    );

    //Create children
    await this.addMenuFor(
      "group",
      "Group",
      ScopeEnum.GROUP_CREATE,
      ScopeEnum.GROUP_READ,
      ScopeEnum.GROUP_DELETE,
      menuGroup
    );
    await this.addMenuFor(
      "user",
      "User",
      ScopeEnum.USER_CREATE,
      ScopeEnum.USER_READ,
      ScopeEnum.USER_DELETE,
      menuUser
    );

    await this.addMenuFor(
      "client-credentials",
      "Client Credential",
      ScopeEnum.CLIENT_CREDENTIALS_CREATE,
      ScopeEnum.CLIENT_CREDENTIALS_READ,
      ScopeEnum.CLIENT_CREDENTIALS_DELETE,
      menuClientCredential
    );

    

    await this.addMenuFor(
      "plugin",
      "Plugin",
      PluginScopeEnum.PLUGIN_CREATE,
      PluginScopeEnum.PLUGIN_READ,
      PluginScopeEnum.PLUGIN_DELETE,
      menuPlugin
    );
    await this.addMenuFor(
      "components",
      "Components",
      PluginScopeEnum.COMPONENTS_CREATE,
      PluginScopeEnum.COMPONENTS_READ,
      PluginScopeEnum.COMPONENTS_DELETE,
      menuComponents
    );
    await this.addMenuFor(
      "fields",
      "Fields",
      PluginScopeEnum.FIELDS_CREATE,
      PluginScopeEnum.FIELDS_READ,
      PluginScopeEnum.FIELDS_DELETE,
      menuFields
    );
    await this.addMenuFor(
      "attributes",
      "Attributes",
      PluginScopeEnum.ATTRIBUTES_CREATE,
      PluginScopeEnum.ATTRIBUTES_READ,
      PluginScopeEnum.ATTRIBUTES_DELETE,
      menuAttributes
    );
    await this.addMenuFor(
      "events",
      "Events",
      PluginScopeEnum.EVENTS_CREATE,
      PluginScopeEnum.EVENTS_READ,
      PluginScopeEnum.EVENTS_DELETE,
      menuEvents
    );

    await this.addMenuFor(
      "menu",
      "Menu",
      MenuScopeEnum.MENU_CREATE,
      MenuScopeEnum.MENU_READ,
      MenuScopeEnum.MENU_DELETE,
      menuMenu
    );
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
    await createScope(MenuScopeEnum.MENU_READ, "Read menu");
    await createScope(MenuScopeEnum.MENU_DELETE, "Delete menu");
    await createScope(MenuScopeEnum.MENU_UPDATE, "Update menu");


    const adminGroup = await groupRepository.findOne({ name: "admin" });
    adminGroup.scopes = await scopeRepository.find();
    groupRepository.save(adminGroup);
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

  private async addMenuFor(
    name: string,
    identifier: string,
    scopeCreate: string,
    scopeRead: string,
    scopeDelete: string,
    parent: Menu
  ) {
    const menuRepository = getRepository<Menu>("menu");
    const itemAddMenu = await this.createMenu(
      name,
      `Add ${identifier}`,
      `Add ${identifier}`,
      null,
      scopeCreate,
      1,
      parent
    );
    const itemRemoveMenu = await this.createMenu(
      name,
      `Remove ${identifier}`,
      `Remove ${identifier}`,
      null,
      scopeDelete,
      2,
      parent
    );
    const itemListAllMenu = await this.createMenu(
      name,
      `List ${identifier}`,
      `List ${identifier}`,
      null,
      scopeRead,
      3,
      parent
    );
    const itemGetMenu = await this.createMenu(
      name,
      `View ${identifier}`,
      `View ${identifier}`,
      null,
      scopeRead,
      4,
      parent
    );

    return await Promise.all([
      menuRepository.save(itemAddMenu),
      menuRepository.save(itemRemoveMenu),
      menuRepository.save(itemListAllMenu),
      menuRepository.save(itemGetMenu)
    ]);
  }

  private async createMenu(
    name: string,
    label: string,
    descripton: string,
    link: string,
    requiredPermission: string,
    order?: number,
    parent?: Menu
  ) {
    const menuRepository = getRepository<Menu>("menu");
    const clientCredentialsRepository = getRepository<ClientCredentials>(
      "client-credentials"
    );
    const defaultCredential = await clientCredentialsRepository.findOne({
      where: { name: ClientCredentialsEnum["USER_PERMISSIONS@APP"] }
    });

    const menu = new Menu();
    menu.clientId = (await defaultCredential).id;
    menu.name = name;
    menu.label = label;
    menu.description = descripton;
    menu.link = link;
    menu.requiredPermission = requiredPermission;
    menu.parent = parent;
    menu.order = order;
    return await menuRepository.save(menu);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
