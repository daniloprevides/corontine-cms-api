/* eslint-disable @typescript-eslint/camelcase */
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { NotificationService } from "src/app/services/notification.service";
import { TranslateService } from "@ngx-translate/core";
import { PageDTO } from "src/app/dto/page.dto";
import { PageService } from "src/app/services/page.service";
import { ModelService } from "src/app/services/model.service";
import { StorageService } from 'src/app/services/storage.service';
import { FindParamsDto } from 'src/app/dto/find-params.dto';
import { PageComponentInterface } from './page.component.interface';
import { PaginatorDTO } from 'src/app/dto/paginator.dto';
import { PageModel } from 'src/app/dto/page-model.dto';

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"]
})
export class PageComponent implements OnInit {
  @ViewChild("form", { static: false }) form: ElementRef;
  htmlContent = "";
  pageMode: string;
  dataLoaded = false;
  pageView: PageComponentInterface
  apiName: string;
  pageName: string;
  pageModeView: string;
  selectedItemToAction:any = null;

  constructor(
    private defaultElementsService: DefaultElementsService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private pageService: PageService,
    private modelService: ModelService
  ) {}

  async loadData(name: string, id?: string) {
    this.apiName = null;
    this.pageName = null;
    const page = await this.pageService.getPageByName(name);
    let content = null;
    this.pageName = page.name;
    if (page.content.apiData){
      const pluginName = page.content.apiData.name;
      this.apiName = pluginName;
      if (id) {
        content = await this.modelService.getById(pluginName, id);
      }
    }


    this.populate(page, content);
  }

  async populateCustomElementsValues(component:any, content:PageModel){
    //applying default data
    const page = content;

    const userData = this.storageService.getUserInfo();

    component.plugins = this.storageService.getInfo().plugins;
    component.api = page.apiData;
    component.scopes = userData.scope.split(" ");
    component.pageModel = page;
    component.notificationService = this.notificationService;

    let plugin;
    let defaultUrl = "";
    //Defining data functions
    if (page.apiData){
      plugin = this.storageService.getPluginByName(page.apiData.name);
      defaultUrl = plugin.apiUrl;
    }

    component.getList = async (params: any, url?: string) => {
      const appUrl = url
        ? url
        : plugin.getAllUrl
        ? plugin.getAllUrl
        : defaultUrl;
      return await this.modelService.getAllByUrl(appUrl, params);
    };

    component.getOne = async (url?: string) => {
      let appUrl = url
        ? url
        : plugin.getUrl
        ? plugin.getUrl
        : defaultUrl;
      appUrl = `${appUrl}`;
      return await this.modelService.getByUrl(appUrl);
    };

    component.createItem = async (item: any, url?: string) => {
      const appUrl = url
        ? url
        : plugin.addUrl
        ? plugin.addUrl
        : defaultUrl;
      return await this.modelService.addByUrl(appUrl, item);
    };

    component.updateItem = async (item: any, url?: string) => {
      let appUrl = url
        ? url
        : plugin.addUrl
        ? plugin.addUrl
        : defaultUrl;
      appUrl = `${appUrl}`;

      return await this.modelService.updateByUrl(appUrl, item.id, item);
    };

    component.deleteItem = async (id: string, url?: string) => {
      const appUrl = url
        ? url
        : plugin.addUrl
        ? plugin.addUrl
        : defaultUrl;

      return await this.modelService.deleteByUrl(appUrl,id);
    };
  };

  async populate(page: PageDTO, content?: any) {
    this.pageMode = page.content.apiType;
    this.form.nativeElement.innerHTML = "";
    const elementName = await this.defaultElementsService.getComponentByName(
      "page-view"
    );
    const pageView = document.createElement(elementName);
    this.form.nativeElement.append(pageView);
    customElements.whenDefined(elementName).then(() => {
      const pageElement:PageComponentInterface = pageView as any;
      this.pageView = pageElement;
      pageElement.data = page;
      pageElement.permissions = this.storageService.getUserInfo().scope.split(" ");

      //Applying api elements
      this.populateCustomElementsValues(pageElement,page.content);

      if (content){
        //Waiting some time before apply values (So all component can be processed)
        setTimeout(() => {
          pageElement.applyValues(content);
        },200)

      }

      pageElement.getData = async (url:string,params:FindParamsDto, apiId:string) => {
        const plugin = this.storageService.getPluginById(apiId);
        return await this.modelService.getAll<PaginatorDTO<PageDTO>>(plugin.name, params);
      }

      pageElement.addEventListener("open-page", async event => {
        const data = event.detail;
        const page = data.page;
        const params = data.details;
        this.router.navigate([`/page/${page}/${params.id}`]);
      });

      setTimeout(() => {
        this.dataLoaded = true;
      },100)

    });
  }

  getErrors(component) {
    const errorMessages = [];
    const validationData = this.pageView.validateData();
    console.log("validationData", validationData);
    const validationErrorFields = [];
    Object.keys(validationData).forEach(k => {
      const value = validationData[k];
      const item = component.shadowRoot.querySelector("#" + k);
      if (!value.isValid) {
        item.classList.add("error");
        if (value.message && value.message.length) {
          errorMessages.push(value.message);
        }
        validationErrorFields.push({ field: k, message: value.message });
      } else {
        item.classList.remove("error");
      }
    });

    return validationErrorFields;
  }

  async save(){
    const validationData = this.getErrors(this.pageView);

    if (!validationData || !validationData.length){
      const message = await this.translate.get("global.saved.success").toPromise();
      const errorMessage = await this.translate.get("global.saved.error").toPromise();
      try {
        const data = await this.pageView.getDataForSave();
        let item = null;
        switch(this.pageModeView){
          case "add": item = await this.modelService.add(this.apiName,data);break;
          case "edit": item = await this.modelService.update(this.apiName,data.id,data);break;
        }
        this.notificationService.info(message);
        this.pageMode = "edit";
        this.router.navigate([`/page/${this.pageName}/${item.id}`]);
      }catch(ex){
        console.error(ex);
        let message = errorMessage.generic;
        if (ex.status === 409) message = errorMessage.conflict;
        if (ex.status === 403) message = errorMessage.permission;
        if (ex.status === 404) message = errorMessage["not_found"];
        this.notificationService.info(message);
      }
    }
  }

  cancel(){
    window.history.back();
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      const pageName = map.get("name");
      const pageId = map.get("id");

      if (pageId){
        this.pageModeView = "edit";
      }else{
        this.pageModeView = "add";
      }

      this.loadData(pageName, pageId);
    });
  }
}
