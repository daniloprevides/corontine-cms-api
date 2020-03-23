import addonService from "../../services/addon.service";
import baseService from "../../services/base.service";
import loginService from "../../services/login.service";
import { onMount } from "svelte";
import { BasePage } from "../page/base-page";
import { getContext } from "svelte";
import { pluginDataStorage } from "../../stores/plugin-data.store";
const { open } = getContext("simple-modal");
import { fade } from "svelte/transition";

let url;
let component;
let modal;
let scopes;
let listComponent;
let btnRevoke;

export class AddonManagerModel extends BasePage {
  selectedItems = [];
  columns = [
    {
      label: "Name",
      field: "name",
      detail: {
        component: "label"
      }
    },
    {
      label: "Description",
      field: "description",
      detail: {
        component: "label"
      }
    }
  ];

  async addAddon() {
    await model.initialize();
    if (!url || (url && !url.length)) {
      this.showMessage("Error", "URL cannot be empty");
    }

    try {
      const pluginInformation = await addonService.getInfo(url);
      this.showAuthorization(pluginInformation);

      //await addonService.send(url, clientCredentials.name, clientCredentials.secret);
    } catch (error) {
      this.showErrorMessage(error);
    }
  }

  async createClientCredential(scopes: Array<any>, code, pluginInformation) {
    try {
      const authplugin = await pluginDataStorage.getAuthPlugin();
      const redirector = await pluginDataStorage.getRedirectorPlugin();

      const newClientCredential = await addonService.createClientCredential({
        name: pluginInformation.name,
        scopes: scopes
      });

      //calling callback on plugin server
      return await addonService.setInformation(pluginInformation.redirect_uri, {
        scopes: newClientCredential.scopes,
        code: code,
        client_id: newClientCredential.name,
        secret: newClientCredential.secret,
        authentication_uri: authplugin.apiUrl,
        api_uri: `${redirector.apiUrl}/info`
      });
    } catch (error) {
      this.showErrorMessage(error);
    }
  }

  async deleteCredential(item){
    this.showConfirm("Exclude", "Are you sure that you want to revoke this key?", async () => {
      await baseService.delete('credentials_api',item.id);
      this.showMessage("OK","Item deleted sucessfully");
      await this.loadData();
    });
  }

  async loadData() {
    const scopesResponse = await baseService.getListData("scopes_api");
    const credentialsResponse = await baseService.getListData(
      "credentials_api"
    );
    scopes = scopesResponse?.items;


    customElements.whenDefined("table-data").then(() => {
      listComponent.selectable = true;
      listComponent.columns = model.columns;
      listComponent.data = {
        items: credentialsResponse,
        itemCount: credentialsResponse.length,
        totalItems: credentialsResponse.length,
        pageCount: 1
      };
    });

    return {
      scopesResponse: scopesResponse,
      credentialsResponse: credentialsResponse
    }
  }

  async initialize() {
    const {credentialsResponse} = await this.loadData();

    customElements.whenDefined("table-data").then(() => {
      listComponent.selectable = true;
      listComponent.columns = model.columns;

      listComponent.addEventListener("item-selected", (event) => {
        this.selectedItems = event.detail.filter(i => i.selected);
        if (this.selectedItems?.length){
          btnRevoke.disabled = false;
        }else{
          btnRevoke.disabled = true;
        }
      })

    });

  }

  async showAuthorization(pluginInformation) {
    const code = pluginInformation.code;
    modal.renderer = (root, dialog) => {
      const pageView = document.createElement("permission-screen") as any;

      root.appendChild(pageView);

      customElements.whenDefined("permission-screen").then(d => {
        pageView.permission = pluginInformation;
        const requestedScopes = scopes.filter(scope => {
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
          modal.opened = false;
          if (result.requireLogoff) {
            this.showConfirm(
              "Logoff",
              "We are going to logoff your account for the changes to be applyed.",
              () => {
                loginService.logout();
                window.location.reload();
              }
            );
          } else {
            if (result.requireReload) {
              this.showConfirm(
                "Reload",
                "The page needs to be reload for the changes to be applyed",
                () => {
                  window.location.reload();
                }
              );
            }
          }
        });

        pageView.addEventListener("permission-denied", () => {
          modal.opened = false;
        });
      });
    };

    modal.opened = true;
  }
}
const model = new AddonManagerModel(component, open);

onMount(async () => {
  model.component = component;
  btnRevoke.disabled = true;
  model.initialize();
});
