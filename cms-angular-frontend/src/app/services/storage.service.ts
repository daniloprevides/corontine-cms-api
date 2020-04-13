import { Injectable } from '@angular/core';
import { GlobalInfoDto } from '../dto/info.dto';
import { UserInfoDTO } from '../dto/user-info.dto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  serverInfoKey = "server-info";
  userInfoKey = "user-info";

  getPluginByType(type: string) {
    const data = this.getInfo();
    if (!data) return null;

    return data.plugins.find(p => p.pluginType === type);
  }

  getPluginByName(name: string) {
    const data = this.getInfo();
    if (!data) return null;

    return data.plugins.find(p => p.name === name);
  }

  getPluginById(id: string) {
    const data = this.getInfo();
    if (!data) return null;

    return data.plugins.find(p => p.id === id);
  }


  setInfo(info:GlobalInfoDto){
    localStorage.setItem(this.serverInfoKey, JSON.stringify(info));
  }

  getInfo() : GlobalInfoDto{
    const item = localStorage.getItem(this.serverInfoKey);
    if (item) {
      return JSON.parse(item) as GlobalInfoDto;
    }

    return null;

  }

  getUserInfo() : UserInfoDTO{
    const item = localStorage.getItem(this.userInfoKey);
    if (item) {
      return JSON.parse(item) as UserInfoDTO;
    }

    return null;
  }

  setUserInfo(info:UserInfoDTO){
    localStorage.setItem(this.userInfoKey, JSON.stringify(info));
  }

  removeAllData(){
    localStorage.removeItem(this.userInfoKey);
    // localStorage.removeItem(this.serverInfoKey);
  }
}
