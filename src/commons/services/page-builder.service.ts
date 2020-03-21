import { getRepository } from "typeorm";
import { Page } from "../../page-creator/entity/page.entity";
import { Plugin } from "../../plugin/entity/plugin.entity";
import { PluginTypeEnum } from "../enum/plugin-type.enum";
import { Fields } from "../../plugin/entity/fields.entity";
import { ComponentDefinition } from "../annotations/expose-field-name.decorator";
import { Events } from "../../plugin/entity/events.entity";
import { Attributes } from "../../plugin/entity/attributes.entity";
import { GenericPageCreatorHelper } from "../helpers/generic-page-creator.helper";
import { Injectable } from "@nestjs/common";

export class PropertyInfo {
  constructor(
    public name: string,
    public field: Fields,
    public propertiesMap: any
  ) {}
}

@Injectable()
export class PageBuilder {
  async build(
    plugin: Plugin,
    newDto: any,
    updateDto: any,
    listDto: any,
    name: string
  ) {
    const genericPageCreatorHelper = new GenericPageCreatorHelper();
    const pageRepository = getRepository<Page>("page");

    const pageNames = {
      add: `add-${name.toLowerCase()}`,
      edit: `edit-${name.toLowerCase()}`,
      list: `list-${name.toLowerCase()}`,
      addDescription: `New ${name.toLowerCase()}`,
      editDescription: `Edit ${name.toLowerCase()}`,
      listDescription: `View ${name.toLowerCase()}`
    };

    const pages = {
      add: await this.getPageEntry(pageNames.add,pageNames.addDescription),
      edit: await this.getPageEntry(pageNames.edit, pageNames.editDescription),
      list: await this.getPageEntry(pageNames.list, pageNames.listDescription)
    };

    //getting all fields definitions
    let fieldListNew: Array<ComponentDefinition> = await genericPageCreatorHelper.getFields(
      newDto
    );
    let fieldListEdit: Array<ComponentDefinition> = await genericPageCreatorHelper.getFields(
      updateDto
    );
    let fieldListList: Array<ComponentDefinition> = await genericPageCreatorHelper.getFieldsList(
      listDto
    );

    //getting fields properties
    const fieldsProperties = {
      add: await this.getFields(name, fieldListNew,pageNames.addDescription),
      edit: await this.getFields(name, fieldListEdit, pageNames.editDescription),
      list: await this.getFields(name, fieldListList, pageNames.listDescription)
    };

    const pagesContent = {
      add: await genericPageCreatorHelper.getPages(
        pageNames.add,
        pageNames.addDescription,
        plugin,
        "add",
        fieldsProperties.add,
        {},
        genericPageCreatorHelper.getPagePermission(newDto)
      ),
      edit: await genericPageCreatorHelper.getPages(
        pageNames.edit,
        pageNames.editDescription,
        plugin,
        "edit",
        fieldsProperties.edit,
        {},
        genericPageCreatorHelper.getPagePermission(updateDto)
      ),
      list: await genericPageCreatorHelper.getPages(
        pageNames.list,
        pageNames.listDescription,
        plugin,
        "list",
        fieldsProperties.list,
        {},
        genericPageCreatorHelper.getPagePermission(listDto)
      )
    };

    //saving content for pages
    pages.add.content = pagesContent.add;
    pages.edit.content = pagesContent.edit;
    pages.list.content = pagesContent.list;

    pages.add = await pageRepository.save(pages.add);
    pages.edit = await pageRepository.save(pages.edit);
    pages.list = await pageRepository.save(pages.list);

    return pages;
  }

  //Apply api and pages for all fields

  private async loadPageData(items){
    const pageRepository = getRepository<Page>("page");
    const pluginRepository = getRepository<Plugin>("plugin");

    const isObject = val => {
      if (val === null) {
        return false;
      }
      return typeof val === "function" || typeof val === "object";
    };

    let pageUpdated = false;
    for (let item of items) {
      if (item.attributes?.length) {
        for (let attribute of item.attributes) {
          if (
            attribute.name === "api" &&
            (!attribute.value || !isObject(attribute.value))
          ) {
            attribute.value = await pluginRepository.findOne({
              where: { name: attribute.value }
            });
            pageUpdated = true;
          }
          if (
            attribute.name === "page" &&
            (!attribute.value || !isObject(attribute.value))
          ) {
            attribute.value = await pageRepository.findOne({
              where: { name: attribute.value }
            });
            if (attribute?.value?.content) {
              delete attribute.value.content;
            }
            pageUpdated = true;
          }
          if (
            attribute.name === "pageAdd" &&
            (!attribute.value || !isObject(attribute.value))
          ) {
            attribute.value = await pageRepository.findOne({
              where: { name: attribute.value }
            });
            //delete attribute.value.content;
            attribute.value.content.items = await this.loadPageData(attribute?.value?.content?.items);
          }
        }
      }
    }
    return items;
  }

  public async loadDynamicDataForNeededFields() {
    const pageRepository = getRepository<Page>("page");
    const allPages = await pageRepository.find();

    for (let page of allPages) {
      let pageUpdated = true;
      if (page?.content) {
        if (page.content.items?.length) {
          page.content.items = await this.loadPageData(page.content.items);        
        }
      }

      if (pageUpdated) {
        await pageRepository.save(page);
      }
    }
  }

  private async getDefaultTitleAttribute(text: string) {
    const fieldsRepository = getRepository<Fields>("fields");
    const attributesRepository = getRepository<Attributes>("attributes");
    const eventsRepository = getRepository<Events>("events");

    const defaultTitle = await fieldsRepository.findOne({
      where: { name: "title-data" }
    });
    const defaultTitleAttributes = await attributesRepository.find({
      field: defaultTitle
    });
    defaultTitle.attributes = defaultTitleAttributes;
    defaultTitle.events = await eventsRepository.find({ field: defaultTitle });

    return defaultTitle;
  }

  private async getFields(
    text: string,
    definition: Array<ComponentDefinition>,
    description:string
  ): Promise<Array<PropertyInfo>> {
    const fieldsRepository = getRepository<Fields>("fields");
    const attributesRepository = getRepository<Attributes>("attributes");
    const eventsRepository = getRepository<Events>("events");

    let data = [
      {
        name: "none",
        field: await this.getDefaultTitleAttribute(text),
        propertiesMap: { text: text, position: "center", description: description }
      }
    ] as any;

    for (let item of definition) {
      const component = await fieldsRepository.findOne({
        where: { name: item.componentName }
      });
      if (component) {
        const componentAttributes = await attributesRepository.find({
          field: component
        });
        const componentEvents = await eventsRepository.find({
          field: component
        });

        component.attributes = componentAttributes;
        component.events = componentEvents;
        //Setting required for forcing the fields to be applyed
        data.push({
          name: item.fieldName,
          field: component,
          propertiesMap: item.componentParams
        });
      }
    }

    return data;
  }

  private async getPageEntry(name: string, description?: string) {
    const pageRepository = getRepository<Page>("page");
    const pluginRepository = getRepository<Plugin>("plugin");

    //Finding default plugin data
    const pluginBase = await pluginRepository.findOne({
      where: { pluginType: PluginTypeEnum.BASE }
    });

    const page = new Page();
    page.clientId = pluginBase.clientId;
    page.name = name;
    page.description = description;
    page.content = [];
    return pageRepository.create(page);
  }
}
