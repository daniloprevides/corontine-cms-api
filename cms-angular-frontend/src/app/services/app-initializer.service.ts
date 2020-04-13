import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { environment } from "src/environments/environment";
import { GlobalInfoDto } from "../dto/info.dto";
import { NotificationService } from './notification.service';
import { WebComponentsService } from './web-components.service';
import NProgress from 'nprogress';

@Injectable({
  providedIn: "root"
})
export class AppInitializerService {
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private notificationService: NotificationService,
    private webComponentsService: WebComponentsService,
  ) {}

  async Init() {
    const info = await this.httpClient
      .get<GlobalInfoDto>(environment.infoUrl)
      .toPromise();
    if (!info){
      return this.notificationService.error("Server is offline");
    }

    await this.loadWebComponents(info);
    this.storageService.setInfo(info);
  }


  async loadWebComponents(info:GlobalInfoDto){
    if (info.components) {
      NProgress.start();
      try {
        await Promise.all(
          info.components.map(c => this.webComponentsService.loadComponent(c.url)),
        );

      } finally {
        NProgress.done();
      }
    }
  }
}
