export const EXPOSE_FIELD_NAMES_KEY = "expose_field_names";
export const EXPOSED_FIELD_DEFINITIONS = "exposed_fields_definition";
export const EXPOSE_VIEW_FIELDS = "EXPOSE_VIEW_FIELDS";
export const EXPOSE_VIEW_PERMISSION = "EXPOSE_VIEW_PERMISSION";

export function ExposeFieldName(target: Object, propertyName: string) {
  if (!target[EXPOSE_FIELD_NAMES_KEY]) target[EXPOSE_FIELD_NAMES_KEY] = [];
  target[EXPOSE_FIELD_NAMES_KEY].push(propertyName);
}

export class ComponentDefinition {
  public fieldName: string;

  constructor(public componentName: string, public componentParams?: any) {}
}

export class PermissionsDefinition {
  constructor(public viewPermission: string, public addPermission:string, public deletePermission:string) {}
}

export function ExposeFieldNamesForPage(definition: ComponentDefinition) {
  return function(target: Object, propertyName: string) {
    if (!target[EXPOSED_FIELD_DEFINITIONS])
      target[EXPOSED_FIELD_DEFINITIONS] = new Array<ComponentDefinition>();
    definition.fieldName = propertyName;
    target[EXPOSED_FIELD_DEFINITIONS].push(definition);
  };
}

export function ListComponent(page: string, api: string) {
  return function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      [EXPOSE_VIEW_FIELDS] = new ComponentDefinition("table-data", {
        page: page,
        api: api
      });
    };
  };
}

export function PageRequirePermission(permissions: PermissionsDefinition) {
  return function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      [EXPOSE_VIEW_PERMISSION]:PermissionsDefinition = permissions;
    };
  };
}
