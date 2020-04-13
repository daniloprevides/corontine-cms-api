import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { MenuHelper } from "../components/header/menu-helper";
import { DialogService } from './dialog.service';
import { AuthService } from '../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private dialogService: DialogService,
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
  ) {}

  getDefaultMenu(data:any) {
    //Checking permissions for system menu
    const userPermissions = this.storageService.getUserInfo().scope.split(" ");
    const menuBuilder = new MenuHelper();
    const systemMenu = menuBuilder.getVisibleMenu(userPermissions, async (callback) => {
      const translation = await this.translate.get("logoff").toPromise();
      const response = await this.dialogService.confirm(translation.title, translation.message, translation.ok, translation.cancel);
      if (response){
        await this.authService.logOff();
        await this.router.navigate(["login"]);
        callback(true);
      }
    });
    let menuData:Array<any>;
    if (data && data.content && data.content.length) {
      const sMenu = data.content.find(m => m.text === systemMenu[0].text);
      if (sMenu) {
        menuData = [...data.content];
      } else {
        menuData = [...systemMenu, ...data.content];
      }
    } else {
      menuData = [...systemMenu];
    }

    return menuData;
  }

  async getMenu() {
    const plugin = this.storageService.getPluginByType("MENU");
    if (plugin) {
      const url = `${plugin.apiUrl}/api/v1/menu/my-menu`;
      const data = await this.httpClient.get(url).toPromise();
      return this.getDefaultMenu(data);
    }
  }
}
