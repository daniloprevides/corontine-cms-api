import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { NotificationService } from "src/app/services/notification.service";
import { TranslateService } from "@ngx-translate/core";
import { MenuManagerComponentInterface } from "./menu-manager.component.interface";
import { ModelService } from 'src/app/services/model.service';
import { StorageService } from 'src/app/services/storage.service';
import { MenuDTO } from 'src/app/dto/menu.dto';

@Component({
  selector: "app-menu-manager",
  templateUrl: "./menu-manager.component.html",
  styleUrls: ["./menu-manager.component.scss"]
})
export class MenuManagerComponent implements OnInit {
  dataLoaded = false;
  @ViewChild("form", { static: false }) form: ElementRef;
  requiredPermission: any;
  bgColor: string;
  menuItems: MenuDTO[];
  name: string;
  id:string;

  constructor(
    private defaultElementsService: DefaultElementsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private modelService:ModelService,
    private storageService:StorageService
  ) {}

  async bindEvents(element) {
    element.addEventListener("changed", async e => {
      this.menuItems = e.detail.items;
      this.bgColor = e.detail.bgColor;
      this.requiredPermission = e.detail.requiredPermission;
    });

  }

  async loadData(element: MenuManagerComponentInterface) {
    const promiseList = [];
    const permissions = this.storageService.getUserInfo().scope.split(" ");
    promiseList.push(this.modelService.getAll("menu_api"));
    promiseList.push(this.modelService.getAll("pages_api"));
    const [menuResponse, pagesResponse] = await Promise.all(promiseList);
    const menu = menuResponse.items.find(m => m.name === "default");
    this.id = menu.id;
    this.bgColor = menu.bgColor;
    this.menuItems = menu.content;
    this.requiredPermission = menu.requiredPermission;
    this.name = menu.name;
    element.menuItems = menu.content;
    element.pageItems = pagesResponse;
    element.permissions = permissions.sort();
  }

  async populate() {
    this.form.nativeElement.innerHTML = "";
    const elementName = await this.defaultElementsService.getComponentByName(
      "menu-manager"
    );
    const element = (document.createElement(
      elementName
    ) as unknown) as MenuManagerComponentInterface;
    this.form.nativeElement.append(element);
    customElements.whenDefined(elementName).then(async () => {
      await this.loadData(element);
      await this.bindEvents(element);
    });
  }

  async save(){
    const translate = await this.translate.get("menu.message").toPromise();
    try {
      if (!this.menuItems || !this.menuItems.length) return false;

      const menu = await this.modelService.update("menu_api", this.id, {
        name: this.name,
        bgColor: this.bgColor,
        content: this.menuItems,
        id: this.id
      });
      if (menu){
        this.notificationService.info(translate.success);
      }
    } catch (error) {
      this.notificationService.info(translate.error);
    }
  }

  cancel(){
    window.history.back();
  }

  async ngOnInit() {
    setTimeout(async () => {
      await this.populate();
      this.dataLoaded = true;
    });
  }
}
