import baseService from "../../services/base.service";
import { PageParser } from "../../services/page-parser.service";
import { webcomponentDataStorage } from "../../stores/webcomponents.store";
import { pluginDataStorage } from "../../stores/plugin-data.store";
import { userDataStorage } from "../../stores/user-data.store";
import { push, pop, replace, location, querystring } from "svelte-spa-router";
import { getContext } from "svelte";
const { open } = getContext("simple-modal");
import { onMount } from "svelte";
import { ParserService } from "../../services/parser.service";
const parserService = new ParserService();
import { BasePage } from "./base-page";
import { fade } from "svelte/transition";

let f = fade;
/**
 * Variables
 *
 */
let component = null;
let data = null;
let ready = false;
let currentItem = null;
let initialized = false;
let errorMessages = [];
let lastLocation = null;
let permissions = null;

export let params = { name: null, id: null };
const parser = new PageParser();
let pageType = null;
let shouldReload = false;
let model = null;

export class PageModel extends BasePage {
  applyValues(item: any, property?: any) {
    component.applyValues(item, property);
  }

  setPageState(state: string) {
    pageType = state;
  }

  cancel() {
    pop();
  }

  delete() {
    const model = component.getDataForSave();
    const url = data.content.apiData.apiUrl;
    this.showConfirm(
      "Delete",
      "Do you really want to delete this item?",
      async () => {
        try {
          await baseService.deleteByUrl(model.id, url);
          this.showMessage("Success", "Item sucessfully deleted", () => {
            pop();
          });
        } catch (error) {
          this.showErrorMessage(error);
        }
      }
    );
  }

  validate() {
    errorMessages = [];
    const validationData = component.validate();
    console.log("validationData", validationData);
    let validationErrorFields = [];
    Object.keys(validationData).forEach(k => {
      let value = validationData[k];
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

    return !validationErrorFields.length;
  }

  async save(event) {
    let isValid = true;
    if (data.content.validate) {
      isValid = this.validate();
    }

    if (isValid) {
      const model = component.getDataForSave();
      const url = data.content.apiData.apiUrl;
      try {
        let item = null;
        switch (pageType) {
          case "add": {
            item = await baseService.postByUrl(url, model);
            break;
          }
          case "edit": {
            item = await baseService.putByUrl(`${url}/${model.id}`, model);
            break;
          }
        }

        this.showMessage("Success", "Item sucessfully saved", () => {
          push(`/view/page/${params.name}/${item.id}`);
        });

        currentItem = item;
        this.applyValues(currentItem);
        this.setPageState("edit");
        initialized = false;
      } catch (error) {
        this.showErrorMessage(error);
      }
    }
  }

  async loadData(queryParams) {
    try {
      data = await baseService.getPage(params.name);
      pageType = data.content.apiType;

      if (data.content.apiData) {
        data.content.apiData.apiUrl = this.parseUrl(
          data.content.apiData.apiUrl,
          data.content.api
        );
        if (params.id) {
          pageType = "edit";
          this.loadItem(params.id);
        }
      }

      ready = true;
    } catch (error) {
      this.showErrorMessage(error);
    }
  }

  async loadItem(id) {
    try {
      let apiUrl = data.content.apiData.apiUrl;

      let itemData = await baseService.getItemByUrl(`${apiUrl}/${id}`);

      this.applyValues(itemData);
    } catch (error) {
      this.showErrorMessage(error);
    }
  }

  parseUrl(url, id) {
    if (!id) return url;

    let plugin = pluginDataStorage.getPluginById(id);
    let context = {
      serverUrl: () => {
        return plugin.apiUrl;
      }
    };
    return parserService.parse(plugin.apiUrl, context);
  }
}

model = new PageModel(component, open);
/**
 * Functions
 */

onMount(mounted => {
  location.subscribe(loc => {
    if (loc) {
      if (lastLocation && loc != lastLocation) {
        shouldReload = true;
      }
      lastLocation = loc;
    }
  });
});

webcomponentDataStorage.subscribe(async ok => {
  if (ok) {
    if (params && params.name) {
      model.loadData({});
    }
  }
});

const initialize = () => {
  permissions = userDataStorage.get().scope.split(" ");

  component.getData = (apiUrl, params, id) => {
    apiUrl = model.parseUrl(apiUrl, id);
    return new Promise((resolve, reject) => {
      baseService
        .getListByUrl(apiUrl, params)
        .then(data => {
          return resolve(data);
        })
        .catch(error => {
          model.showErrorMessage(error);
        });
    });
  };

  customElements.whenDefined("page-view").then(() => {
    component.addEventListener("item-clicked", async event => {
      let data = event.detail;
      let page = data.page;
      let item = data.item;
      //Open details
      setTimeout(() => {
        push(`/view/page/${page.name}/${item.id}`);
      });
    });

    component.addEventListener("permission-denied", async () => {
      pop();
    });

    component.addEventListener("add-item", async event => {
      let data = event.detail;
      let page = event.detail.page;
      let api = model.parseUrl(event.detail.api.apiUrl, event.detail.api.id);

      try {
        const item = await baseService.postByUrl(api, data.item);
        model.loadData();
        model.showMessage("Success", "Item sucessfully saved");
      } catch (error) {
        model.showErrorMessage(error);
      }
    });
    initialized = true;
  });
};

$: {
  if (data) {
    pageType = data.content.apiType;
  }

  if (component) {
    model.component = component;
  }
  //workaround to reload components when route change but page dont
  if (params.name && shouldReload) {
    const wrapper = document.querySelector("#comp-container");
    const elem = wrapper.querySelector("#component");
    elem.parentNode.removeChild(elem);

    //Adding to dom, again
    const pageViewElement = document.createElement("page-view") as any;
    pageViewElement.id = "component";
    wrapper.appendChild(pageViewElement);

    customElements.whenDefined("page-view").then(async () => {
      component = pageViewElement;
      await model.loadData();
      initialize();
      pageViewElement.data = data;
    });
    shouldReload = false;
  }

  if (component && !initialized) {
    initialize();
  }
}
