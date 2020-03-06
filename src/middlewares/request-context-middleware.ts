import { getNamespace, createNamespace } from 'node-request-context';
import { RequestContext } from './request-context';
import { NextFunction , Request, Response} from 'express';
	
export function RequestContextMiddleware(req:Request, res:Response, next:NextFunction) {
   let rc = new RequestContext(req, res);
	
   const namespace = getNamespace('request.namespace') || createNamespace('request.namespace');
	
    namespace.run(() => { 
        namespace.set('tid', rc); 
      next(); 
    });
};