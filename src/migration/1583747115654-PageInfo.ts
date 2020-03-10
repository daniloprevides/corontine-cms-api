import { Menu } from './../menu/entity/menu.entity';
import { Group } from './../security/entity/group.entity';
import { PluginEnvironmentEnum } from './../plugin/enum/environment.enum';
import { PluginTypeEnum } from './../commons/enum/plugin-type.enum';
import { Plugin } from './../plugin/entity/plugin.entity';
import { ClientCredentialsEnum } from './../security/enum/client-credentials.enum';
import { ClientCredentials } from './../security/entity/client-credentials.entity';
import { Scope } from './../security/entity/scope.entity';
import { PageScopeEnum } from './../page-creator/enum/page-scope.enum';
import {MigrationInterface, QueryRunner, getRepository} from "typeorm";


export class PageInfo1583747115654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await this.createPlugin();
        await this.addScopesToAdminGroup();
        await this.createMenuEntry();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }


    private async createMenuEntry(){
        const pagesMenu = await this.createMenu(
            "pages-menu",
            "Pages",
            "pages",
            null,
            PageScopeEnum.PAGE_READ,
            10
          );

          await this.addMenuFor("page","Page", PageScopeEnum.PAGE_CREATE, PageScopeEnum.PAGE_READ, PageScopeEnum.PAGE_DELETE, pagesMenu);
    }

    private async createPlugin() {
        const clientCredentialsRepository = getRepository<ClientCredentials>(
          "client-credentials"
        );
        let clientCredentialsDefault = await clientCredentialsRepository.findOne({
          where: { name: ClientCredentialsEnum["USER_PERMISSIONS@APP"] }
        });
        const pluginRepository = getRepository<Plugin>("plugin");
    
        const pagePlugin = new Plugin();
        pagePlugin.apiUrl = "http://localhost:3000";
        pagePlugin.pluginType = PluginTypeEnum.PAGES;
        pagePlugin.name = "pages";
        pagePlugin.environment = PluginEnvironmentEnum.DEVELOPMENT;
        pagePlugin.componentsUrl = "http://localhost:3000";
        pagePlugin.clientId = clientCredentialsDefault.id;
    
        return pluginRepository.save(pagePlugin);
      }

    private async addScopesToAdminGroup() {

        const groupRepository = getRepository<Group>("group");
        const scopeRepository = getRepository<Scope>("scope");
    
        const createScope = async (scopeEnum: PageScopeEnum, description: string) => {
          let scope = new Scope();
          scope.name = scopeEnum;
          scope.description = description;
          return await scopeRepository.save(scope);
        };
    
        await createScope(PageScopeEnum.PAGE_CREATE, "Create page");
        await createScope(PageScopeEnum.PAGE_READ, "Read page");
        await createScope(PageScopeEnum.PAGE_DELETE, "Delete page");
        await createScope(PageScopeEnum.PAGE_UPDATE, "Update page");
    
    
        const adminGroup = await groupRepository.findOne({ name: "admin" });
        adminGroup.scopes = await scopeRepository.find();
        groupRepository.save(adminGroup);
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

}
