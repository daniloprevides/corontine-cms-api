import { PermissionsDefinition } from "../annotations/expose-field-name.decorator";

export class Attribute {
    id: string;
    constructor(public name: string, public value: any, public type: string) {}
  }
  
  export class FieldItem {
    columns = "2";
    fieldName: string;
    eventName: string;
    eventId: string;
    eventPath: string;
    componentId: string;
    component: any;
    page: string = "";
    api: string = "";
  
    constructor(
      public id: string,
      public name: string,
      public modelComponent: any,
      public customElement: any,
      public masterElement: any,
      public attributes: Array<Attribute>
    ) {}
  }
  
  export class PageModel {
    api: string;
    apiData: any;
    apiType: string;
    validate: boolean = true;
    permissionView: string;
    permissionAdd: string;
    permissionDelete: string;
  
    constructor(
      public name: string,
      public description: string,
      public style: string,
      public items: Array<FieldItem>
    ) {}
  }