import { PageConstants } from './../page-creator/constants';
import { MenuConstants } from './../menu/constants';
import { SecurityConstants } from './../security/constants';
import { PluginConstants } from "./../plugin/constants";
import { Plugin } from "./../plugin/entity/plugin.entity";
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { ClientCredentials } from "../security/entity/client-credentials.entity";
import { ClientCredentialsEnum } from "../security/enum/client-credentials.enum";
import { PluginTypeEnum } from "../commons/enum/plugin-type.enum";
import { PluginEnvironmentEnum } from "../plugin/enum/environment.enum";
import { Constants } from "../commons";

export class PluginServerInfo1583820875872 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const clientCredentialsRepository = getRepository<ClientCredentials>(
      "client-credentials"
    );
    let clientCredentialsDefault = await clientCredentialsRepository.findOne({
      where: { name: ClientCredentialsEnum["USER_PERMISSIONS@APP"] }
    });
    await this.createPlugin(
      clientCredentialsDefault.id,
      "Attributes",
      "API for retrieving attributes",
      `{serverUrl()}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.ATTRIBUTES_ENDPOINT}`
    );
    await this.createPlugin(
      clientCredentialsDefault.id,
      "Components",
      "API for retrieving components",
      `{serverUrl()}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.COMPONENTS_ENDPOINT}`
    );
    await this.createPlugin(
      clientCredentialsDefault.id,
      "Events",
      "API for retrieving events",
      `{serverUrl()}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.EVENTS_ENDPOINT}`
    );
    await this.createPlugin(
      clientCredentialsDefault.id,
      "Fields",
      "API for retrieving fields",
      `{serverUrl()}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.FIELDS_ENDPOINT}`
    );    
    await this.createPlugin(
      clientCredentialsDefault.id,
      "Plugins",
      "API for retrieving plugins",
      `{serverUrl()}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.PLUGIN_ENDPOINT}`
    );    

    //Group, user, Menu and Page
    await this.createPlugin(
      clientCredentialsDefault.id,
      "group_api",
      "API for retrieving groups",
      `{plugin('authentication').apiUrl}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.GROUP_ENDPOINT}`
    );
    await this.createPlugin(
      clientCredentialsDefault.id,
      "user_api",
      "API for retrieving users",
      `{plugin('authentication').apiUrl}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.USER_ENDPOINT}`
    );
    await this.createPlugin(
      clientCredentialsDefault.id,
      "menu_api",
      "API for retrieving menu",
      `{plugin('menu').apiUrl}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${MenuConstants.MENU_ENDPOINT}`
    );
    await this.createPlugin(
      clientCredentialsDefault.id,
      "pages_api",
      "API for retrieving pages",
      `{plugin('pages').apiUrl}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PageConstants.PAGE_ENDPOINT}`
    );

    await this.createPlugin(
      clientCredentialsDefault.id,
      "scopes_api",
      "API for retrieving Scopes",
      `{plugin('pages').apiUrl}/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${SecurityConstants.SCOPE_ENDPOINT}`
    );

  }

  createPlugin(
    clientId: string,
    name: string,
    description:string,
    apiUrl: string,
    addUrl: string = "",
    getUrl: string = "",
    getAllUrl: string = "",
    removeUrl: string = "",
    type: PluginTypeEnum = PluginTypeEnum.API,
    environment: PluginEnvironmentEnum = PluginEnvironmentEnum.DEVELOPMENT,
    componentsUrl: string = ""
  ) {
    const pluginRepository = getRepository<Plugin>("plugin");
    const plugin = new Plugin();
    plugin.apiUrl = apiUrl;
    plugin.getAllUrl = getAllUrl;
    plugin.getUrl = getUrl;
    plugin.addUrl = addUrl;
    plugin.removeUrl = removeUrl;
    plugin.pluginType = type;
    plugin.name = name;
    plugin.description = description;
    plugin.componentsUrl = componentsUrl;
    plugin.environment = environment;
    plugin.clientId = clientId;

    return pluginRepository.save(plugin);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
