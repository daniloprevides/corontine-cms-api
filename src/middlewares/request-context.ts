import { TokenDto } from './../commons/dto/token.dto';
import { EntityActionEnum } from '../commons/enum/entity.action.enum';
import { EntityMetadataService } from './../entity-metadata.service';
import { getNamespace } from "node-request-context";
import { Request, Response} from 'express';
import { Logger } from '@nestjs/common';

export class RequestContext {
  private static readonly logger = new Logger(RequestContext.name);
  public readonly id: Number;
  public request: Request;
  public response: Response;

  constructor(request: Request, response: Response) {
    this.id = Math.random();
    this.request = request;
    this.response = response;
  }

  public static currentRequestContext(): RequestContext {
    let namespace = getNamespace("request.namespace");
    if (!namespace) return null;
    let rc = null;
    try {
      rc = namespace.get("tid");
    }catch(ex){
      // console.error(ex);
    }
    
    return rc;
  }

  public static currentRequest(): Request {
    let requestContext = RequestContext.currentRequestContext();
    return requestContext.request;
  }

  getEntityMetadataScopes(){
    return EntityMetadataService.Instance.scopes;
  }

  getScopesForTable(type:EntityActionEnum, tableName:string) : Array<string>{
    const items = this.getEntityMetadataScopes().find(s => s.tableName == tableName && s.type == type.toString());
    return items?.scopes ? Array.from(items.scopes) : [];
  }


  getTokenInfo() : TokenDto{
    return (this.request as any)?.user;
  }


}
