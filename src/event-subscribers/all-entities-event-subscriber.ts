import { EntityActionEnum } from '../commons/enum/entity.action.enum';
import { RequestContext } from "./../middlewares/request-context";
import {
  EntitySubscriberInterface,
  EventSubscriber,
  Connection,
  InsertEvent,
  RemoveEvent
} from "typeorm";
import { Injectable, ForbiddenException } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { Reflector } from "@nestjs/core";
import { LoadEvent } from 'typeorm/subscriber/event/LoadEvent';

@Injectable()
@EventSubscriber()
export class AllEntitiesEventSubscriber implements EntitySubscriberInterface {
  
    constructor(
    @InjectConnection() readonly connection: Connection,
    private readonly reflector: Reflector
  ) {
    connection.subscribers.push(this);
  }


  private checkPermissionForAction(action: EntityActionEnum, tableName:string) : void {
    const requestContext = RequestContext.currentRequestContext();

    //Only if is a request (Event migrations can trigger before insert...)
    if (requestContext){
        let hasPermission = false;
        const requiredScopes = requestContext.getScopesForTable(action,tableName);
        if (!requiredScopes || !requiredScopes.length) return;
        
        const tokenDto = requestContext.getTokenInfo();
        if (!tokenDto) throw new ForbiddenException(`Token has no scope permission for adding in ${tableName}`);
    
        let tokenScopes = tokenDto.scope.split(' ');
    
        requiredScopes.forEach(ns => {
            if (tokenScopes.indexOf(ns) >= 0) hasPermission = true;
        });
    
        if (!hasPermission){
            throw new ForbiddenException(`Token has no permission for action ${action} on ${tableName}`);
        }
    }

  }

  async beforeInsert(event: InsertEvent<any>) {
    if (event && event.metadata && event.metadata.tableName) {
        this.checkPermissionForAction(EntityActionEnum.CREATE,event.metadata.tableName);
    }
  }

  async beforeUpdate(event: InsertEvent<any>) {
    if (event && event.metadata && event.metadata.tableName) {
        this.checkPermissionForAction(EntityActionEnum.UPDATE,event.metadata.tableName);
    }
  }

  async beforeRemove(event: RemoveEvent<any>) {
    if (event && event.metadata && event.metadata.tableName) {
        this.checkPermissionForAction(EntityActionEnum.DELETE,event.metadata.tableName);
    }
  }

  async afterLoad(event: LoadEvent<any>) {
    if (event && event.metadata && event.metadata.tableName) {
        this.checkPermissionForAction(EntityActionEnum.READ,event.metadata.tableName);
    }
  }

}
