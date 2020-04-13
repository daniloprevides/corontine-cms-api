/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { NotificationInterface } from '../interfaces/notification.interface';
import { NotifierService } from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements NotificationInterface{

  constructor(private notifierService: NotifierService) { }

  info(text:string){
    this.notifierService.notify("success", text);
  }

  error(text:string){
    this.notifierService.notify("error", text);
  }
}
