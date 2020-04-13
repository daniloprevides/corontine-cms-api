import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { catchError } from 'rxjs/internal/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public storageService: StorageService, public auth:AuthService, public router:Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const userInfo = this.storageService.getUserInfo();
    if (userInfo && userInfo.accessToken){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userInfo.accessToken}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError(this.handler())
     )
  }


  handler() {
    return (error: HttpErrorResponse) => {
      if (
        error.status === 401 &&
        error.error &&
          error.error.error &&
          error.error.error.code === "token_expired"
      ) {
          this.auth.logOff().then(() => {
            debugger;
            this.router.navigate(["login"]);
          });
      }
      return throwError(error);
    };
  }
}
