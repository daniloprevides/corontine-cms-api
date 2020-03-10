
export const EXPOSE_FIELD_NAMES_KEY = "expose_field_names";
export function ExposeFieldName(target: Object, propertyName: string) {
    if (!target[EXPOSE_FIELD_NAMES_KEY]) target[EXPOSE_FIELD_NAMES_KEY] = [];
    target[EXPOSE_FIELD_NAMES_KEY].push(propertyName);
}