import { Injectable, EventEmitter } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { UserInfoDTO } from "../dto/user-info.dto";
import { HttpClient } from "@angular/common/http";
import { DialogService } from "../services/dialog.service";
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(
    private storageService: StorageService,
    private httpClient: HttpClient,
    private dialogService: DialogService,
    private translate:TranslateService,
    private router:Router
  ) {}

  loginSubscription = new EventEmitter();

  async forgotPassword(username: string) {
    const plugin = this.storageService.getPluginByType("AUTH");
    if (plugin) {
      try {
        const url = `${plugin.apiUrl}/api/v1/user/forgot-password`;
        const response = await this.httpClient
          .post(url, {
            email: username,
          })
          .toPromise().catch(ex => {throw ex});
        if (response) {
          return true;
        }
      } catch (ex) {
        if (ex.status === 404) { //Change Password Required
          const messageTitle = await this.translate.get("auth.not_found.title").toPromise();
          const message = await this.translate.get("auth.not_found.message").toPromise();
          const messageOk = await this.translate.get("global.ok").toPromise();
          this.dialogService.showMessage(messageTitle,message,messageOk);
        }else{
          throw ex;
        }
      }
    }

    return false;

  }

  async changePassword(username: string, oldPassword: string, password1: string, password2: string) {
    const plugin = this.storageService.getPluginByType("AUTH");
    if (plugin) {
      try {
        const url = `${plugin.apiUrl}/api/v1/user/me/change-password`;
        const passwordChanged = await this.httpClient
          .put<UserInfoDTO>(url, {
            username: username,
            password: oldPassword,
            newPassword: password1,
            confirmNewPassword: password2
          })
          .toPromise().catch(ex => {throw ex});
        if (passwordChanged) {
          return true;
        }
      } catch (ex) {
        if (ex.status === 404) { //Change Password Required
          const messageTitle = await this.translate.get("auth.not_found.title").toPromise();
          const message = await this.translate.get("auth.not_found.message").toPromise();
          const messageOk = await this.translate.get("global.ok").toPromise();
          this.dialogService.showMessage(messageTitle,message,messageOk);
        }else{
          throw ex;
        }
      }
    }

    return false;
  }

  async logOff(){
    this.storageService.removeAllData();
    this.loginSubscription.emit(false);
  }

  async login(username: string, password: string) {
    const plugin = this.storageService.getPluginByType("AUTH");
    if (plugin) {
      try {
        const url = `${plugin.apiUrl}/oauth/token`;
        const login = await this.httpClient
          .post<UserInfoDTO>(url, {
            username: username,
            password: password,
            // eslint-disable-next-line @typescript-eslint/camelcase
            grant_type: "password"
          })
          .toPromise().catch(ex => {throw ex});
        if (login) {
          this.setLoggedIn(login);
          return true;
        }
      } catch (ex) {
        if (ex.status === 404) { //Change Password Required
          const messageTitle = await this.translate.get("auth.not_found.title").toPromise();
          const message = await this.translate.get("auth.not_found.message").toPromise();
          const messageOk = await this.translate.get("global.ok").toPromise();
          this.dialogService.showMessage(messageTitle,message,messageOk);
        }
        if (ex.status === 406) { //Change Password Required
          const messageTitle = await this.translate.get("auth.change_password.title").toPromise();
          const message = await this.translate.get("auth.change_password.message").toPromise();
          const messageOk = await this.translate.get("global.ok").toPromise();
          const messageCancel = await this.translate.get("global.cancel").toPromise();
          const confirmed = await this.dialogService.confirm(messageTitle,message,messageOk,messageCancel);
          if (confirmed){
            this.router.navigate(["change-password"],{queryParams: {
              "username": username
            }})
          }

        }
      }
    }

    return false;
  }

  isLoggedIn() {
    return this.storageService.getUserInfo() != null;
  }

  setLoggedIn(info: UserInfoDTO) {
    this.storageService.setUserInfo(info);
    this.loginSubscription.emit(this.isLoggedIn());
  }
}
