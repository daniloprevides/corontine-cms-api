import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Page } from "../page-creator/entity/page.entity";
import { GenericPageCreatorHelper } from "../page-creator/helpers/generic-page-creator.helper";
import { Plugin } from "../plugin/entity/plugin.entity";
import { PluginTypeEnum } from "../commons/enum/plugin-type.enum";
import { NewPluginDto } from "../plugin/dto/new-plugin.dto";
import { UpdatePluginDto } from "../plugin/dto/update-plugin.dto";
import { PluginDto } from "../plugin/dto/plugin.dto";
import { Fields } from "../plugin/entity/fields.entity";
import { NewComponentsDto } from "../plugin/dto/new-components.dto";
import { UpdateComponentsDto } from "../plugin/dto/update-components.dto";
import { ComponentsDto } from "../plugin/dto/components.dto";
import { NewEventsDto } from "../plugin/dto/new-events.dto";
import { UpdateEventsDto } from "../plugin/dto/update-events.dto";
import { EventsDto } from "../plugin/dto/events.dto";
import { FieldsDto } from "../plugin/dto/fields.dto";
import { UpdateFieldsDto } from "../plugin/dto/update-fields.dto";
import { NewAttributesDto } from "../plugin/dto/new-attributes.dto";
import { UpdateAttributesDto } from "../plugin/dto/update-attributes.dto";
import { AttributesDto } from "../plugin/dto/attributes.dto";
import { NewGroupDTO } from "../security/dto/new-group.dto";
import { UpdateGroupDTO } from "../security/dto/update-group.dto";
import { GroupDTO } from "../security/dto/group.dto";
import { NewPageDto } from "../page-creator/dto/new-page.dto";
import { UpdatePageDto } from "../page-creator/dto/update-page.dto";
import { PageDto } from "../page-creator/dto/page.dto";
import { Attributes } from "../plugin/entity/attributes.entity";
import { Events} from "../plugin/entity/events.entity";
import { MenuDto } from "../commons/dto/menu.dto";
import { Menu } from "../menu/entity/menu.entity";
import { ComponentDefinition } from "../commons/annotations/expose-field-name.decorator";
import { data } from "components/src/checkbox-data/checkbox-data.model";

export class DefaultPages1584367904121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const pluginRepository = getRepository<Plugin>(
            "plugin"
        );

        const pluginPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Plugins'}});
        const eventsPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Events'}});
        const fieldsPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Fields'}});
        const attributesPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Attributes'}});
        const componentsPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'Components'}});
        const groupPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'group_api'}});
        const pagesPlugin = await pluginRepository.findOne({where: {pluginType: PluginTypeEnum.API, name: 'pages_api'}});            

        const pluginPages =  await this.createPageFor(new NewPluginDto(), new UpdatePluginDto(), new PluginDto(), pluginPlugin , "Plugin");
        //const eventsPages =  await this.createPageFor(new NewEventsDto(), new UpdateEventsDto(), new EventsDto(), eventsPlugin , "Event");
        const fieldsPages =  await this.createPageFor(new FieldsDto(), new UpdateFieldsDto(), new FieldsDto(), fieldsPlugin, "Field");
        const attributesPages =  await this.createPageFor(new NewAttributesDto(), new UpdateAttributesDto(), new AttributesDto(), attributesPlugin, "Attribute");
        const componentsPages =  await this.createPageFor(new NewComponentsDto(), new UpdateComponentsDto(), new ComponentsDto(), componentsPlugin, "Component");
        //const groupPages =  await this.createPageFor(new NewGroupDTO(), new UpdateGroupDTO(), new GroupDTO(), groupPlugin, "Group");
        //const pagePages =  await this.createPageFor(new NewPageDto(), new UpdatePageDto(), new PageDto(), pagesPlugin,"Page");

    
        await this.addGroupMenu("Plugins", pluginPages);
        await this.addGroupMenu("Component", componentsPages);
//        await this.addGroupMenu("Event", eventsPages);
        await this.addGroupMenu("Field", fieldsPages);
        await this.addGroupMenu("Attribute", attributesPages);
        //  await this.addGroupMenu("Group", groupPages);
  //      await this.addGroupMenu("Page", pagePages);
        
    }

    async addGroupMenu(name:string, pages:any){
        const id =  await this.addToMenu(name, `Manage ${name}`);
        let menuComponentsView = await this.addToMenu("View",`View ${name}`,id,pages.list.name,pages.list.id);
        let menuComponentsAdd = await this.addToMenu("Add", `Add a new ${name}`,id,pages.add.name,pages.add.id);
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

        const genericPageCreatorHelper = new GenericPageCreatorHelper();
        const text = name;


        const fieldsRepository = getRepository<Fields>(
            "fields"
        );
        const pageRepository = getRepository<Page>(
            "page"
        );
        const pluginRepository = getRepository<Plugin>(
            "plugin"
        );
        const attributesRepository = getRepository<Attributes>(
            "attributes"
        );
        const eventsRepository = getRepository<Events>(
            "events"
        );


        const applyDataForFieldsList = async (fieldsList:Array<{name: string, field:Fields, propertiesMap: any}>) => {
            for (let f of fieldsList){
                if (f.propertiesMap){
                    let keysList = Object.keys(f.propertiesMap);
                    for (let key of keysList){
                        if (key === "api"){
                            f.propertiesMap[key] = await pluginRepository.findOne({where: {name: f.propertiesMap[key]}});
                            console.debug("Applying data API",key, f.propertiesMap[key]);
                        }
                        if (key === "page"){
                            f.propertiesMap[key] = await pageRepository.findOne({where: {name: f.propertiesMap[key]}});
                        }
                    }
                }
            }
        }

        const defaultTable = await fieldsRepository.findOne({where: {name: "table-data"}});
        const defaultTableAttributes = await attributesRepository.find({field: defaultTable});
        const defaultTableEvents = await eventsRepository.find({field: defaultTable});
        defaultTable.attributes = defaultTableAttributes;
        defaultTable.events = defaultTableEvents;

        const defaultTitle = await fieldsRepository.findOne({where: {name: "title-data"}});
        const defaultTitleAttributes = await attributesRepository.find({field: defaultTitle});
        defaultTitle.attributes = defaultTitleAttributes;
        defaultTitle.events = await eventsRepository.find({field: defaultTitle});

        let fieldListNew:Array<ComponentDefinition> = genericPageCreatorHelper.getFields(newDto);
        let fieldListEdit:Array<ComponentDefinition> = genericPageCreatorHelper.getFields(updateDto);
        let fieldListList:Array<ComponentDefinition> = genericPageCreatorHelper.getFieldsList(listDto);


        const getFields = async (list:Array<ComponentDefinition>) : Promise<Array<{
            name: string,
            field: Fields,
            propertiesMap: any
        }>> => {
            let data = [] as any;
            data.push(
                {name: "none",field: defaultTitle
                , propertiesMap: {text: text, position: "center"}});

            for (let f of list){
                const component = await fieldsRepository.findOne({where: {name: f.componentName}});
                if (component){
                    const componentAttributes = await attributesRepository.find({field: component});
                    const componentEvents = await eventsRepository.find({field: component});
    
                    component.attributes = componentAttributes;
                    component.events = componentEvents;
                    //Setting required for forcing the fields to be applyed
                    data.push({
                        name: f.fieldName,
                        field: component,
                        propertiesMap: f.componentParams
                    });
    
                }
            }

            return data;
        }

        const fieldsNew = await getFields(fieldListNew);
        const fieldsEdit = await getFields(fieldListEdit);

        //Applying data for fields list (Will find plugins, but not pages...)
        //@TODO: Refactor this class
        await applyDataForFieldsList(fieldsNew);
        await applyDataForFieldsList(fieldsEdit);

        const pageAdd = await genericPageCreatorHelper.getPages(`add-${text.toLowerCase()}`, `New ${text}`, plugin,"add",fieldsNew,{});
        const pageEdit = await genericPageCreatorHelper.getPages(`edit-${text.toLowerCase()}`, `Edit ${text}`, plugin,"edit",fieldsEdit,{});



        //getting page by name
        let newPage = new Page();
        newPage.name = pageAdd.name;
        newPage.description = pageAdd.description
        newPage.content = pageAdd;
        const addPage = await pageRepository.save(newPage);

        let editPage = new Page();
        editPage.name = pageEdit.name;
        editPage.description = pageEdit.description
        editPage.content = pageEdit;
        const updatePage = await pageRepository.save(editPage);

        const fieldsList = await getFields(fieldListList);
        //Translating data for list
        await applyDataForFieldsList(fieldsList);
        

        const pageList = await genericPageCreatorHelper.getPages(`list-${text.toLowerCase()}`, `List ${text}`, plugin,"list",fieldsList,{});
        
        let listPage = new Page();
        listPage.name = pageList.name;
        listPage.description = pageList.description
        listPage.content = pageList;
        

        return {
            add: addPage,
            edit: editPage,
            list: await pageRepository.save(listPage)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
