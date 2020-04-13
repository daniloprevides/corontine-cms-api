import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { NotificationService } from "src/app/services/notification.service";
import { TranslateService } from "@ngx-translate/core";
import { ModelService } from "src/app/services/model.service";
import { Router, ActivatedRoute } from "@angular/router";
import { PagesManagerAddComponentInterface } from "./pages-manager-add.component.interface";
import { PaginatorDTO } from "src/app/dto/paginator.dto";
import { PluginDto } from "src/app/dto/plugin.dto";
import { PageDTO } from "src/app/dto/page.dto";
import { PageModel } from 'src/app/dto/page-model.dto';

@Component({
  selector: "app-page-add",
  templateUrl: "./page-add.component.html",
  styleUrls: ["./page-add.component.scss"]
})
export class PageAddComponent implements OnInit {
  selected = false;
  selectedId = null;
  selectedItem: PageDTO = null;
  dataLoaded = false;
  @ViewChild("form", { static: false }) form: ElementRef;
  apiData: PluginDto[];

  constructor(
    private defaultElementsService: DefaultElementsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private modelService: ModelService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(p => {
      if (p.has("id")) {
        this.selected = true;
        this.selectedId = p.get("id");
      }
    });
  }

  async bindEvents(element) {
    element.addEventListener("api-changed", async event => {
      const { id, type, fieldName } = event.detail;
      const fieldNames = await this.modelService.getFieldNamesByPluginId(id);
      element[fieldName] = fieldNames[type].map((i, ix) => {
        return {
          name: i,
          value: i,
          order: ix,
          visible: true
        };
      });
    });


    // element.addEventListener("changed", async event => {
    //   const item = event.detail as PageModel;
    //   const translate = await this.translate.get("pages.message").toPromise();
    //   if (item.pageMode === "add"){
    //     const pageResponse = await this.modelService.add("pages_api",item);

    //   }else{
    //     item.id = this.selectedId;
    //     const pageResponse = await this.modelService.update("pages_api",this.selectedId, item);
    //   }
    //   this.notificationService.info(translate.success);
    //   window.history.back();
    // });
  }

  async loadData(element: PagesManagerAddComponentInterface) {
    const promiseList = [];
    promiseList.push(this.modelService.getAll("Fields"));
    promiseList.push(this.modelService.getAll("Plugins"));
    promiseList.push(this.modelService.getAll("pages_api"));
    promiseList.push(this.modelService.getAll("scopes_api"));

    const [
      fieldsResponse,
      pluginsResponse,
      pagesResponse,
      scopesResponse
    ] = await Promise.all(promiseList);

    const fields = fieldsResponse.items as Array<any>;
    const apiData = pluginsResponse.items as Array<PluginDto>;
    const pages = pagesResponse.items as Array<PageDTO>;
    const permissions = scopesResponse.items.map(s => s.name) as Array<string>;

    this.apiData = apiData;

    element.pages = pages;
    element.sources = apiData.filter(p => p.pluginType === "API");
    element.permissions = permissions;
    element.components = fields
      .filter(f => f.allowInComposer)
      .map(f => {
        return {
          label: f.name,
          id: f.id,
          tooltip: f.description,
          type: f.type,
          defaultEventPath: f.defaultEventPath,
          needApi: f.needApi,
          defaultPropertyBind: f.defaultPropertyBind,
          defaultEvent: f.defaultEvent,
          events: f.events,
          attributes: f.attributes.map(a => {
            if (JSON.stringify(a.defaultValue) === "{}") {
              a.defaultValue = null;
            }
            return a;
          })
        };
      });
    if (this.selected) {
      this.selectedItem = pages.find(p => p.id === this.selectedId);
      element.selected = this.selectedItem;
    }
  }

  async populate() {
    this.form.nativeElement.innerHTML = "";
    const elementName = await this.defaultElementsService.getComponentByName(
      "page-builder"
    );
    const element = (document.createElement(
      elementName
    ) as unknown) as PagesManagerAddComponentInterface;
    this.form.nativeElement.append(element);
    customElements.whenDefined(elementName).then(async () => {
      await this.loadData(element);
      await this.bindEvents(element);
    });
  }

  async ngOnInit() {
    setTimeout(async () => {
      await this.populate();
      this.dataLoaded = true;
    });
  }
}
