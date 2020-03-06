import { EntityMetadataService } from "./../../entity-metadata.service";
import { EntityActionEnum } from "./../enum/entity.action.enum";

export function RequiredScopes(
  tableName: string,
  scopeCreate: string | Array<string>,
  scopeRead: string | Array<string>,
  scopeUpdate: string | Array<string>,
  scopeDelete: string | Array<string>
) {
  return function(target: any, propertyKey?: string) {
    const entityMetadataInstance = EntityMetadataService.Instance;
    const scopeCreateItems = Array.isArray(scopeCreate)
      ? scopeCreate
      : [scopeCreate];

    const scopeReadItems = Array.isArray(scopeRead) ? scopeRead : [scopeRead];

    const scopeUpdateItems = Array.isArray(scopeUpdate)
      ? scopeUpdate
      : [scopeUpdate];

    const scopeDeleteItems = Array.isArray(scopeDelete)
      ? scopeDelete
      : [scopeDelete];

    entityMetadataInstance.addTableScope(
      tableName,
      EntityActionEnum.CREATE,
      scopeCreateItems
    );

    entityMetadataInstance.addTableScope(
      tableName,
      EntityActionEnum.READ,
      scopeReadItems
    );
    entityMetadataInstance.addTableScope(
      tableName,
      EntityActionEnum.UPDATE,
      scopeUpdateItems
    );
    entityMetadataInstance.addTableScope(
      tableName,
      EntityActionEnum.DELETE,
      scopeDeleteItems
    );
  };
}
