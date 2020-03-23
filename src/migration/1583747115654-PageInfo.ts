import { ScopeEnum } from "./../plugin/enum/scope.enum";
import { Page } from "./../page-creator/entity/page.entity";
import { FieldSelectionTypeEnum } from "./../plugin/enum/field-selection.type.enum";
import { Fields } from "./../plugin/entity/fields.entity";
import { Attributes } from "./../plugin/entity/attributes.entity";
import { Events } from "./../plugin/entity/events.entity";
import { FieldTypeEnum } from "./../plugin/enum/field-type.enum";
import { Components } from "./../plugin/entity/components.entity";
import { Menu } from "./../menu/entity/menu.entity";
import { Group } from "./../security/entity/group.entity";
import { PluginEnvironmentEnum } from "./../plugin/enum/environment.enum";
import { PluginTypeEnum } from "./../commons/enum/plugin-type.enum";
import { Plugin } from "./../plugin/entity/plugin.entity";
import { ClientCredentialsEnum } from "./../security/enum/client-credentials.enum";
import { ClientCredentials } from "./../security/entity/client-credentials.entity";
import { Scope } from "./../security/entity/scope.entity";
import { PageScopeEnum } from "./../page-creator/enum/page-scope.enum";
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { AttributeTypeEnum } from "./../plugin/enum/attribute-type.enum";

export class PageInfo1583747115654 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await this.createPlugin();
    await this.addScopesToAdminGroup();
    await this.createMenuEntry();
    await this.createComponent();

    await this.createDefaultPages();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}

  private async createDefaultPages() {
    const pluginRepository = getRepository<Plugin>("plugin");
    const pageRepository = getRepository<Page>("page");

    //Finding default plugin data
    const pluginBase = await pluginRepository.findOne({
      where: { pluginType: PluginTypeEnum.PAGES }
    });
  
  }

  private async createComponent() {
    const pluginRepository = getRepository<Plugin>("plugin");
    const componentsRepository = getRepository<Components>("components");

    //Finding default plugin data
    const pluginBase = await pluginRepository.findOne({
      where: { pluginType: PluginTypeEnum.PAGES }
    });

    //Creating the components
    const pageComponents = new Components();
    pageComponents.clientId = "default";
    pageComponents.description = "Page Components";
    pageComponents.name = "page_component";
    pageComponents.plugin = pluginBase;
    pageComponents.url = `{plugin('pluginType','${PluginTypeEnum.BASE}').componentsUrl}/components/components.js`;
    pageComponents.fields = [
      {
        clientId: "default",
        name: "table-data",
        description: "Data Table",
        type: FieldSelectionTypeEnum.MULTI,        
        defaultEvent: "item-selected",
        defaultEventPath: "",
        allowInComposer: true,        
        needApi: false,
        events: [
          {
            clientId: "default",
            name: "load-data",
            description:
              "Event is triggered when user press pagination for loading more data",
            outputObjectDefinition: {
              params: FieldTypeEnum.ANY,
              page: FieldTypeEnum.NUMBER
            },
            outputType: FieldTypeEnum.ANY
          } as Events,
          {
            clientId: "default",
            name: "item-selected",
            description: "Event triggered when one item is selected",
            outputObjectDefinition: {},
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            required: false,
            description: "",
            applyAfterSetInComposer: false,
            name: "columns",
            value: [
              {
                field: "col1",
                label: "Column 1",
                sortable: true,
                filterable: true
              },
              {
                field: "col2",
                label: "Column 2",
                sortable: true,
                filterable: true
              },
              {
                field: "col3",
                label: "Column 3",
                sortable: true,
                filterable: true
              }
            ],
            defaultValue: null,
            type: FieldTypeEnum.ANY
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            required: false,
            name: "data",
            value: {
              items: [
                { col1: "My Value 1", col2: "My Value 1", col3: "My Value 1" },
                { col1: "My Value 2", col2: "My Value 2", col3: "My Value 2" },
                { col1: "My Value 3", col2: "My Value 3", col3: "My Value 3" }
              ],
              totalItems: 3,
              itemCount: 3,
              pageCount: null
            },
            defaultValue: null,
            type: FieldTypeEnum.ANY
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: 10 },
            required: false,
            name: "size",
            description: "Page Size",
            type: FieldTypeEnum.NUMBER
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "relations",
            description: "A list of table names , separated by space, for relationship",
            type: FieldTypeEnum.STRING
          } as Attributes,  
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "sourcefield",
            description: "The name of field to filter",
            type: FieldTypeEnum.STRING
          } as Attributes,     
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "pageAdd",
            description: "The name of page to add crud",
            type: FieldTypeEnum.STRING
          } as Attributes, 
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "targetfield",
            description: "The target field name for a new value (foin field)",
            type: FieldTypeEnum.STRING
          } as Attributes,               
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "sourcefield",
            description: "The name of field to filter",
            type: FieldTypeEnum.STRING
          } as Attributes,                                         
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "filterable",
            description: "Allow filtering columns",
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: { val: false },
            required: false,
            name: "crud",
            description: "Enable crud, needs sourcefield, pageAdd and pageEdit",
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "sortable",
            description: "Allow sorting columns",
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            description: "Show Pagination",
            name: "pagination",
            type: FieldTypeEnum.BOOLEAN
          } as Attributes
        ]
      } as Fields,
      {
        clientId: "default",
        name: "select-data",
        description: "Allow user to select an item from specific data",
        type: FieldSelectionTypeEnum.MULTI,
        defaultEvent: "changed",
        defaultEventPath: "",
        allowInComposer: true,
        events: [
          {
            clientId: "default",
            name: "changed",
            description: "Event triggered when one item is selected",
            outputObjectDefinition: {
              id: String,
              label: String,
              value: String
            },
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: true,
            name: "field",
            description: "The field name to be displayed",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: { val: "label" },
            required: false,
            name: "displayLabel",
            description: "The label to be displayed on select",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "label",
            description: "The label of component",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "required",
            description: "If selection is required",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "readonly",
            description: "Readonly field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "disabled",
            description: "Disabled field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "validate",
            description: "If field must be validated on change",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: "Field cannot be empty" },
            required: false,
            name: "requiredMessage",
            description: "Text message to show if text is required",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "subfield",
            description: "If the item is an object, the property of object",
            type: FieldTypeEnum.STRING
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            applyAfterSetInComposer: false,
            value: [
              { id: 1, label: "My Label1", field: "My Value1" },
              { id: 2, label: "My Label2", field: "My Value2" },
              { id: 3, label: "My Label3", field: "My Value3" },
              { id: 4, label: "My Label4", field: "My Value4" }
            ],
            required: false,
            name: "data",
            description: "The data to be displayed",
            type: FieldTypeEnum.ANY
          } as Attributes
        ]
      } as Fields,        
      {
        clientId: "default",
        name: "select-static-data",
        description: "Allow user to select an item from static data",
        type: FieldSelectionTypeEnum.SINGLE,
        defaultEvent: "changed",
        defaultEventPath: "",
        allowInComposer: true,
        events: [
          {
            clientId: "default",
            name: "changed",
            description: "Event triggered when one item is selected",
            outputObjectDefinition: {
              id: String,
              label: String,
              value: String
            },
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [         
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "label",
            description: "The label of component",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "required",
            description: "If selection is required",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "readonly",
            description: "Readonly field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "disabled",
            description: "Disabled field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "validate",
            description: "If field must be validated on change",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: "Field cannot be empty" },
            required: false,
            name: "requiredMessage",
            description: "Text message to show if text is required",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            applyAfterSetInComposer: true,
            defaultValue: [
              { field: "myField", label: "My Label"}
            ],            
            value: [
              { field: "myField", label: "My Label"}
            ],
            required: true,
            name: "options",
            description: "The data to be displayed",
            type: FieldTypeEnum.ANY
          } as Attributes
        ]
      } as Fields,
      
      {
        clientId: "default",
        name: "input-data",
        description: "Allow user to input data (All input types)",
        type: FieldSelectionTypeEnum.SINGLE,
        defaultEvent: "changed",
        defaultEventPath: "",
        allowInComposer: true,
        events: [
          {
            clientId: "default",
            name: "changed",
            description: "Event triggered when one item is changed",
            outputObjectDefinition: {
              id: String,
              label: String,
              value: String
            },
            outputType: FieldTypeEnum.STRING
          } as Events,
          {
            clientId: "default",
            name: "value-changed",
            description: "Event triggered when a value is changed keydown",
            outputObjectDefinition: {
              id: String,
              label: String,
              value: String
            },
            outputType: FieldTypeEnum.STRING
          } as Events
        ],
        attributes: [
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "autofocus",
            description: "Set focus on the field",
            type: FieldTypeEnum.BOOLEAN,
            removeWhenFalse: true
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "label",
            description: "The label of component",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "required",
            description: "If selection is required",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "readonly",
            description: "Readonly field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "disabled",
            description: "Disabled field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,                    
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: true },
            required: false,
            name: "validate",
            description: "If field must be validated on change",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: "text" },
            required: true,
            name: "type",
            possibleValues: [
              { id: "text", label: "Text Field" },
              { id: "textarea", label: "Text Area Field" },
              { id: "number", label: "Number Field" },
              { id: "email", label: "Email Field" },
              { id: "date", label: "Date Field" },
              { id: "date", label: "Date Field" },
              { id: "datetime", label: "Datetime Field" },
              { id: "datetime-local", label: "Datetime local Field" },
              { id: "month", label: "Month Field" },
              { id: "password", label: "Password Field" },
              { id: "tel", label: "Telefone Field" },
              { id: "time", label: "Time Field" },
              { id: "week", label: "Week Field" },
              { id: "url", label: "Url Field" },
            ],
            description: "An input type (text,number,date,email...)",
            type: FieldTypeEnum.LIST_CONTENT
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "placeholder",
            description: "A placeholder",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: { val: "Field cannot be empty" },
            required: false,
            name: "requiredMessage",
            description: "Text message to show if text is required",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "subfield",
            description: "If the item is an object, the property of object",
            type: FieldTypeEnum.STRING
          } as Attributes,                    
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            applyAfterSetInComposer: false,
            value: null,
            required: true,
            name: "data",
            description: "The data to be displayed",
            type: FieldTypeEnum.ANY
          } as Attributes
        ]
      } as Fields,
      {
        clientId: "default",
        name: "checkbox-data",
        description: "Allow user to select a boolean value",
        type: FieldSelectionTypeEnum.SINGLE,
        defaultEvent: "changed",
        defaultEventPath: "",
        allowInComposer: true,
        events: [
          {
            clientId: "default",
            name: "changed",
            description: "Event triggered when one item is changed",
            outputObjectDefinition: {
              id: String,
              label: String,
              value: String
            },
            outputType: FieldTypeEnum.STRING
          } as Events,
        ],
        attributes: [
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "autofocus",
            description: "Set focus on the field",
            type: FieldTypeEnum.BOOLEAN,
            removeWhenFalse: true
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            required: false,
            name: "label",
            description: "The label of component",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "readonly",
            description: "Readonly field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,          
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "disabled",
            description: "Disabled field",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes,      
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.ATTRIBUTE,
            defaultValue: null,
            required: false,
            name: "subfield",
            description: "If the item is an object, the property of object",
            type: FieldTypeEnum.STRING
          } as Attributes,                                  
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            defaultValue: null,
            applyAfterSetInComposer: false,
            value: null,
            required: true,
            name: "data",
            description: "The data to be displayed",
            removeWhenFalse: true,
            type: FieldTypeEnum.BOOLEAN
          } as Attributes
        ]
      } as Fields,
      {
        clientId: "default",
        name: "viewer-data",
        description: "Viewer for data",
        type: FieldSelectionTypeEnum.CUSTOM,        
        defaultEvent: "item-selected",
        defaultEventPath: "",
        allowInComposer: true,        
        needApi: false,
        events: [
          {
            clientId: "default",
            name: "item-selected",
            description: "Event triggered when one item is selected",
            outputObjectDefinition: {},
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            required: true,
            description: "",
            applyAfterSetInComposer: true,
            name: "label1",
            value:null,
            defaultValue: {val: "Estimated"},
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            required: true,
            description: "",
            applyAfterSetInComposer: true,
            name: "label2",
            value:null,
            defaultValue: {val: "Real"},
            type: FieldTypeEnum.STRING
          } as Attributes,   
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            required: false,
            description: "",
            applyAfterSetInComposer: true,
            name: "estimated",
            value:null,
            defaultValue: {val: null},
            type: FieldTypeEnum.NUMBER
          } as Attributes,                                  
        ]
      } as Fields,
      {
        clientId: "default",
        name: "custom-data",
        description: "Custom data",
        type: FieldSelectionTypeEnum.CUSTOM,        
        defaultEvent: "changed",
        defaultEventPath: "",
        allowInComposer: true,        
        needApi: false,
        events: [
          {
            clientId: "default",
            name: "changed",
            description: "Event triggered when something changes",
            outputObjectDefinition: {},
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: "default",
            attributeType: AttributeTypeEnum.PROPERTY,
            required: true,
            description: "",
            applyAfterSetInComposer: true,
            name: "element",
            value:null,
            defaultValue: null,
            type: FieldTypeEnum.STRING
          } as Attributes,                                     
        ]
      } as Fields,                         
    ];

    await componentsRepository.save(pageComponents);
  }

  private async createMenuEntry() {
    const pagesMenu = await this.createMenu("default", ScopeEnum.CMS, "", "");
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

    const createScope = async (
      scopeEnum: PageScopeEnum,
      description: string
    ) => {
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

    const defaultUserGroup = await groupRepository.findOne({ name: "Default User" }, {relations: ["scopes"]});
    const pageReadScope = await scopeRepository.findOne({name: "page_read"});
    defaultUserGroup.scopes.push(pageReadScope);
    groupRepository.save(defaultUserGroup);

  }

  private async createMenu(
    name: string,
    requiredPermission: string,
    bgColor: string,
    content: string
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
    menu.requiredPermission = requiredPermission;
    menu.bgColor = bgColor;
    menu.content = content;

    return await menuRepository.save(menu);
  }
}
