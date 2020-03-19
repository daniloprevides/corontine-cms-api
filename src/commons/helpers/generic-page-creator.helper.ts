import { Injectable, ImATeapotException } from "@nestjs/common";
import { EXPOSE_FIELD_NAMES_KEY, EXPOSED_FIELD_DEFINITIONS, ComponentDefinition, EXPOSE_VIEW_FIELDS, EXPOSE_VIEW_PERMISSION, PermissionsDefinition } from "../annotations/expose-field-name.decorator";
import { FieldItem , PageModel, Attribute} from "../dto/page-model.dto";
import { Plugin } from "../../plugin/entity/plugin.entity";
import { Fields } from "../../plugin/entity/fields.entity";
import { AttributeTypeEnum } from "../../plugin/enum/attribute-type.enum";


@Injectable()
export class GenericPageCreatorHelper {

    getPagePermission(dto:any) : PermissionsDefinition{
        return dto[EXPOSE_VIEW_PERMISSION];
    }

    getFields(dto:any){
        return dto[EXPOSED_FIELD_DEFINITIONS];
    }

    getFieldsList(dto:any){
        const fields:Array<ComponentDefinition> = dto[EXPOSED_FIELD_DEFINITIONS];
        //sorting by order field case exists
        fields.sort((a,b) => {
            if (a.componentParams && b.componentParams && a.componentParams.order && b.componentParams.order){
                return a.componentParams.order - b.componentParams.order;
            }else{
                return 1;
            }
        })
        let components:Array<ComponentDefinition> = [];
        let fieldDefinition = fields.map((f,i) => {
            return {
                name: f.fieldName,
                value: f.fieldName,
                order: f.componentParams.order ? f.componentParams.order : i,
                visible: f.componentParams.visible != null ? f.componentParams.visible : true,
                component: f.componentName,
                params: f.componentParams
            }
        });

        const tableData:ComponentDefinition = dto[EXPOSE_VIEW_FIELDS];
        tableData.componentParams.fieldDefinition = fieldDefinition;
        tableData.componentParams.sortable = true;
        tableData.componentParams.filterable = true;
        tableData.componentParams.size = 10;
        components.push(tableData);
        return components;
    }


    public async getPages(name:string, description:string, api:Plugin,type: string, fields:Array<{name: string, field: Fields,propertiesMap:any}>, context:any, permission:PermissionsDefinition,style = ""){
        return this.createPageModel(name,description,api,fields,type,context,permission,style);
    }


    private async createPageModel(name:string, description:string, api:Plugin, fields:Array<{name: string, field: Fields, propertiesMap:any}>, apiType:string, context:any, permission:PermissionsDefinition, style?:string){

        //For getting the url, must do a call
        const newId =(prefix?:string)=> {
            return (prefix ? prefix+"_" : "B_") + Math.random().toString(36).substring(7);
        }
        const page = new PageModel(name, description,style,[]);
        api.apiUrl = api.apiUrl,context;
        page.api = api.id;
        page.apiData = api;
        page.apiType = apiType;
        page.permissionView = permission.viewPermission;
        page.permissionAdd = permission.addPermission;
        page.permissionDelete = permission.deletePermission;
        for (let item of fields){
            //Dynamic id
            const id = "A" + Math.random().toString(36).substring(7);
            const attributes = item.field.attributes.filter(a => a.required && a.defaultValue != null)            
            .map(a => {
                return {
                    name: a.name,
                    value: a.defaultValue?.val,
                    type: AttributeTypeEnum.PROPERTY,
                    id: a.id
                } as Attribute
            });
            //Adding label
            attributes.push({name: "label", value: item.name, type: "ATTRIBUTE", id: newId()});

            //if is a table (list)

            //applying the properties
            if (item.propertiesMap){
                Object.keys(item.propertiesMap).forEach(p => {
                    const name = p;
                    const value = item.propertiesMap[p];
                    attributes.push({name: name, value: value, type: "PROPERTY", id: newId("P")});
                })
            }
            
            item.field.attributes = item.field.attributes.filter(a => a.required && a.defaultValue != null);
            delete item.field.attributes;
            let field = new FieldItem(id,item.field.name,item,null,null,attributes);
            field.componentId = item.field.id;
            field.columns = "2";
            let component = JSON.parse(JSON.stringify(item.field));
            delete component.attributes;
            field.component = component;
            const event = item.field.events.find(e => e.name == item.field.defaultEvent);
            if (event){
                field.eventId = event.id;
            }

            field.eventPath = item.field.defaultEventPath;
            //field.modelComponent = item.field;
            field.fieldName = item.name;
            page.items.push(field);
        }        

        return page;
    }

}
