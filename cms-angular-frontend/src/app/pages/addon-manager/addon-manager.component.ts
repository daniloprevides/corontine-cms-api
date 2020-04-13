import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultElementsService } from 'src/app/services/default-elements.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { AddonManagerComponentInterface } from './addon-manager.component.interface';
import { TableDataComponentInterface } from './table-data.component.interface';
import { ModelService } from 'src/app/services/model.service';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/services/storage.service';
import { AddonService } from 'src/app/services/addon.service';
import { ScopeDTO } from 'src/app/dto/scope.dto';

@Component({
  selector: 'app-addon-manager',
  templateUrl: './addon-manager.component.html',
  styleUrls: ['./addon-manager.component.scss']
})
export class AddonManagerComponent implements OnInit {
  dataLoaded = false;
  @ViewChild("form", { static: false }) form: ElementRef;
  @ViewChild("table", { static: false }) table: ElementRef;
  @ViewChild("modal", { static: false }) modal: ElementRef;
  selectedItems: any;
  canRevoke = false;
  url:string;
  scopes: Array<ScopeDTO>;

  constructor(
    private defaultElementsService: DefaultElementsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private addonService: AddonService,
    private storageService: StorageService,
  ) {}

  async showAuthorization(pluginInformation) {
    const code = pluginInformation.code;
    this.modal.nativeElement.renderer = (root, dialog) => {
      const pageView = document.createElement("permission-screen") as any;

      root.appendChild(pageView);

      customElements.whenDefined("permission-screen").then(d => {
        pageView.permission = pluginInformation;
        const requestedScopes = this.scopes.filter(scope => {
          return (
            pluginInformation.scopes.find(s => s.name === scope.name) != null
          );
        });
        pageView.scopes = requestedScopes;

        pageView.addEventListener("permission-allowed", async () => {
          const result = await this.createClientCredential(
            requestedScopes,
            code,
            pluginInformation
          );
          this.modal.nativeElement.opened = false;
          // if (result.requireLogoff) {
          //   this.showConfirm(
          //     "Logoff",
          //     "We are going to logoff your account for the changes to be applyed.",
          //     () => {
          //       loginService.logout();
          //       window.location.reload();
          //     }
          //   );
          // } else {
          //   if (result.requireReload) {
          //     this.showConfirm(
          //       "Reload",
          //       "The page needs to be reload for the changes to be applyed",
          //       () => {
          //         window.location.reload();
          //       }
          //     );
          //   }
          // }
        });

        pageView.addEventListener("permission-denied", () => {
          this.modal.nativeElement.opened = false;
        });
      });
    };

    this.modal.nativeElement.opened = true;
  }

  async addNewItem(){
    try {
      if (this.url && this.url.length){
        const pluginInformation = await this.addonService.getInfo(this.url);
        this.showAuthorization(pluginInformation);
      }

    } catch (error) {
      this.notificationService.error(error);
    }
  }


  async createClientCredential(scopes: Array<any>, code, pluginInformation:any) {
    try {
      const authplugin = await this.storageService.getInfo();
      const redirector = this.storageService.getInfo();

      const newClientCredential = await this.addonService.createClientCredential({
        name: pluginInformation.name,
        scopes: scopes
      });

      //calling callback on plugin server
      return await this.addonService.setInformation(pluginInformation.redirect_uri, {
        scopes: newClientCredential.scopes,
        code: code,
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: newClientCredential.name,
        secret: newClientCredential.secret,
        // eslint-disable-next-line @typescript-eslint/camelcase
        authentication_uri: authplugin.url,
        // eslint-disable-next-line @typescript-eslint/camelcase
        api_uri: `${redirector.url}/info`
      });
    } catch (error) {
      this.notificationService.error(error);
    }
  }

  async loadData() {
    const promiseList = [];
    const translate = await this.translate.get("addon.columns").toPromise();
    const columns = [
      {
        label: translate.name,
        field: "name",
        detail: {
          component: "label"
        }
      },
      {
        label: translate.description,
        field: "description",
        detail: {
          component: "label"
        }
      }
    ];


    promiseList.push(this.addonService.getAll("scopes_api"));
    promiseList.push(this.addonService.getAll("credentials_api"));

    const [scopesResponse, credentialsResponse] = await Promise.all(promiseList);
    this.scopes = scopesResponse.items;

    customElements.whenDefined("table-data").then(() => {
      const element:TableDataComponentInterface<any> = this.table.nativeElement as TableDataComponentInterface<any>;
      element.selectable = true;
      element.columns = columns;
      element.data = {
        items: credentialsResponse,
        itemCount: credentialsResponse.length,
        totalItems: credentialsResponse.length,
        pageCount: 1
      };

      (element as any).addEventListener("item-selected", (event) => {
        this.selectedItems = event.detail.filter(i => i.selected);
        if (this.selectedItems && this.selectedItems.length){
          this.canRevoke = true;
        }else{
          this.canRevoke = false;
        }
      })
    });

  }


  async populate() {
    this.form.nativeElement.innerHTML = "";
    await this.loadData();
  }

  async ngOnInit() {
    setTimeout(async () => {
      await this.populate();
      this.dataLoaded = true;
    });
  }

}
