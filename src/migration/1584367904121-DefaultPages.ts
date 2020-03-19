import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Page } from "../page-creator/entity/page.entity";
import { Plugin } from "../plugin/entity/plugin.entity";
import { PluginTypeEnum } from "../commons/enum/plugin-type.enum";
import { NewPluginDto } from "../plugin/dto/new-plugin.dto";
import { UpdatePluginDto } from "../plugin/dto/update-plugin.dto";
import { PluginDto } from "../plugin/dto/plugin.dto";
import { NewComponentsDto } from "../plugin/dto/new-components.dto";
import { UpdateComponentsDto } from "../plugin/dto/update-components.dto";
import { ComponentsDto } from "../plugin/dto/components.dto";
import { FieldsDto } from "../plugin/dto/fields.dto";
import { UpdateFieldsDto } from "../plugin/dto/update-fields.dto";
import { NewAttributesDto } from "../plugin/dto/new-attributes.dto";
import { UpdateAttributesDto } from "../plugin/dto/update-attributes.dto";
import { AttributesDto } from "../plugin/dto/attributes.dto";
import { NewGroupDTO } from "../security/dto/new-group.dto";
import { UpdateGroupDTO } from "../security/dto/update-group.dto";
import { GroupDTO } from "../security/dto/group.dto";
import { MenuDto } from "../commons/dto/menu.dto";
import { Menu } from "../menu/entity/menu.entity";
import { NewScopeDTO } from "../security/dto/new-scope.dto";
import { UpdateScopeDTO } from "../security/dto/update-scope.dto";
import { ScopeDTO } from "../security/dto/scope.dto";
import { PageBuilder } from "../commons/services/page-builder.service";
import { NewFieldsDto } from "../plugin/dto/new-fields.dto";

export class DefaultPages1584367904121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const pageBuilder = new PageBuilder();
        const pluginRepository = getRepository<Plugin>(
            "plugin"
        );

        const pluginPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Plugins'}});
        const fieldsPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Fields'}});
        const attributesPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Attributes'}});
        const componentsPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Components'}});
        const groupPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'group_api'}});
        const scopesPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'scopes_api'}});

        const pluginPages =  await this.createPageFor(new NewPluginDto(), new UpdatePluginDto(), new PluginDto(), pluginPlugin , "Plugin");
        const fieldsPages =  await this.createPageFor(new NewFieldsDto(), new UpdateFieldsDto(), new FieldsDto(), fieldsPlugin, "Field");
        const attributesPages =  await this.createPageFor(new NewAttributesDto(), new UpdateAttributesDto(), new AttributesDto(), attributesPlugin, "Attribute");
        const componentsPages =  await this.createPageFor(new NewComponentsDto(), new UpdateComponentsDto(), new ComponentsDto(), componentsPlugin, "Component");
        const scopesPages =  await this.createPageFor(new NewScopeDTO(), new UpdateScopeDTO(), new ScopeDTO(), scopesPlugin, "Scope");
        const groupPages =  await this.createPageFor(new NewGroupDTO(), new UpdateGroupDTO(), new GroupDTO(), groupPlugin, "Group");


        await pageBuilder.loadDynamicDataForNeededFields();
        //const pagePages =  await this.createPageFor(new NewPageDto(), new UpdatePageDto(), new PageDto(), pagesPlugin,"Page");

        await this.addGroupMenu("Group", groupPages);    
        await this.addGroupMenu("Scopes", scopesPages);    
        await this.addGroupMenu("Plugins", pluginPages);
        await this.addGroupMenu("Component", componentsPages);

        await this.addGroupMenu("Field", fieldsPages);
        await this.addGroupMenu("Attribute", attributesPages);

  //      await this.addGroupMenu("Page", pagePages);
//        await this.addGroupMenu("Event", eventsPages);        
    }

    async addGroupMenu(name:string, pages:any){
        const id =  await this.addToMenu(name, `Manage ${name}`);
        await this.addToMenu("View",`View ${name}`,id,pages.list.name,pages.list.id);
        await this.addToMenu("Add", `Add a new ${name}`,id,pages.add.name,pages.add.id);
    }


    async addToMenu(label:string, description:string, parentId?:string, page?:string, idPage?:string,route?:string){
        const menuRepository = getRepository<Menu>(
            "menu"
        );
        const id = "M" + Math.random().toString(36).substring(7);
        let menuDto = new MenuDto(id, label, description,null,page,idPage,parentId,route);

        let defaultMenu = await menuRepository.findOne({where: {name: "default"}});
        if (!defaultMenu){
            defaultMenu = new Menu();
            defaultMenu.name = "default";
            defaultMenu.requiredPermission = "cms";
            defaultMenu.content = [menuDto];
        }else{
            if (parentId){
                let menu = defaultMenu.content.find(d => d.id == parentId);
                if (menu){
                    if (!menu.children) menu.children = [];
                    menu.children.push(menuDto);
                }

            }else{
                if (!defaultMenu.content.push){
                    defaultMenu.content = [];
                }
                defaultMenu.content.push(menuDto);
            }
            
            
            
        }

        await menuRepository.save(defaultMenu);

        return menuDto.id;


    }

    async createPageFor(newDto:any, updateDto:any, listDto:any, plugin:Plugin, name:string) : Promise<{add: Page, edit:Page, list:Page}>{
        const pageBuilder = new PageBuilder();
        return await pageBuilder.build(plugin,newDto,updateDto,listDto,name);    
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
