import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultElementsService {

  elementsMap = new Map<string,string>();

  constructor() {
    this.elementsMap.set("login","login-screen");
    this.elementsMap.set("forgot-password","forgot-password");
    this.elementsMap.set("change-password","change-password");
    this.elementsMap.set("default-password","forgot-password-page");
    this.elementsMap.set("header","header-data");
    this.elementsMap.set("page-view","page-view");
    this.elementsMap.set("user-manager","user-manager");
    this.elementsMap.set("group-manager","group-manager");
    this.elementsMap.set("pages-manager","grid-list");
    this.elementsMap.set("pages-manager-add","page-builder");
    this.elementsMap.set("menu-manager","menu-manager");
    this.elementsMap.set("addon-manager","addon-manager");
    this.elementsMap.set("page-builder","page-builder");


    this.elementsMap.set("pages-add-route","/pages/add");


  }


  async getComponentByName(name:string){
    return this.elementsMap.get(name);
  }

  getDefaultPage(){
    return "page/home";
  }

}
