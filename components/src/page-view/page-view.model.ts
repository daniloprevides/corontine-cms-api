/* eslint-disable @typescript-eslint/camelcase */
import { PageParser } from "./page-parser";

//Data for building page
export let data;
export let permissions = null;
let loading = false;
let dialogComponent;
let permissionDenied = false;
let mainComponent;

//custom elements exports
export let custom_plugins;
export let custom_api;
export let custom_scopes;
export let custom_page;
export let custom_getList;
export let custom_getOne;
export let custom_createItem;
export let custom_updateItem;
export let custom_deleteItem;

const isObject = val => {
  if (val === null) {
    return false;
  }
  return typeof val === "function" || typeof val === "object";
};

export const hideItems = (items: Array<string>) => {
  items.forEach(fieldName => {
    const item = data.content.items.find(i => i.fieldName === fieldName);
    if (item) {
      const element: HTMLElement = component.childNodes[0].querySelector(
        `#${item.id}`
      );
      if (element) {
        element.hidden = true;
      }
    }
  });
};

export const applyValuesChanged = item => {
  setTimeout(() => {
    component.childNodes[0]
      .querySelectorAll(".dynamic-element")
      .forEach(async el => {
        el.itemmodel = item;
      });
  }, 100);
};

export const applyValues = item => {
  model.model = item;

  component.childNodes[0]
    .querySelectorAll(".dynamic-element")
    .forEach(async el => {
      let id = el.id;
      let selectedItem = data.content.items.find(i => i.id === id);

      let fieldName = selectedItem.fieldName;
      let value = model.model[fieldName];
      //If item is object and defaultPropertyBind is filled
      if (selectedItem?.component?.defaultPropertyBind && isObject(value)) {
        value = value[selectedItem.component.defaultPropertyBind];
      }
      if (selectedItem.component.type == "API") {
        let field = selectedItem?.attributes?.find(a => a.name === "field");
        if (field && field.value) {
          if (isObject(model.model[fieldName])) {
            let currentValue = model.model[fieldName][field.value];
            value = currentValue;
          }
        }
      }

      if (value != undefined) {
        customElements.whenDefined(selectedItem?.component.name).then(d => {
          console.debug(
            `Applying data ${value} for ${fieldName} of type ${selectedItem.component.name}`
          );
          el.data = value;
        });
      }

      el.itemmodel = model.model;
      el.permissions = permissions;
    });
};

export const getValidationData = () => {
  console.debug("Checking validation");
  let validationData = {};
  component.querySelectorAll(".dynamic-element").forEach(async el => {
    let isValid = true;
    let input = el.shadowRoot.querySelector("input");
    let validationMessage = null;
    if (el.validateData) isValid = el.validateData();
    if (isValid) {
      if (input) {
        isValid = input.checkValidity();
        validationMessage = input.validationMessage;
      }
    } else {
      validationMessage = el.getErrorMessage();
    }

    validationData[el.getAttribute("id")] = {
      isValid: isValid,
      message: validationMessage
    };
  });

  return validationData;
};

export const validate = () => {
  return getValidationData();
};

export let getData = (url: string, params: any, apiId: string) => {
  return null;
};
let ready = false;
let component;
let content;

export const getDataForSave = () => {
  return model.model;
};

export class PageViewModel {
  checkPermissionsFor(
    permissions: Array<string>,
    neededPermission: string
  ): boolean {
    return permissions.indexOf(neededPermission) >= 0;
  }

  parser = new PageParser();
  properties: any;
  api: any;
  attributesReference = [];
  model = {} as any;

  private applyValues(element: any, properties, id) {
    return new Promise((resolve, reject) => {
      if (id && id.length) {
        if (properties[id]) {
          Object.keys(this.properties[id]).forEach(key => {
            let value = this.properties[id][key];
            console.debug(
              `Applying property ${key} to element ${id}`,
              this.properties[id]
            );
            if (value != null) {
              element[key] = value;
            }
          });
        }
      }

      resolve();
    });
  }

  private applyColumns(element: any, columns: number) {
    element.setAttribute("colspan", columns);
  }

  private async buildApiComponent(element: any, selectedItem: any, id: string) {
    console.debug("Build api component", selectedItem);
    let apiData = selectedItem.attributes.find(a => a.name === "api");
    if (!apiData || !apiData.value) {
      console.debug(
        `Cannot load child data for component ${selectedItem.name} with id ${id} because no api was selected`
      );
    } else {
      console.debug(`Acquiring data for ${apiData.value.apiUrl}`);
      const field = selectedItem.attributes.find(a => a.name === "field");
      const displayLabel = selectedItem.attributes.find(
        a => a.name === "displayLabel"
      );

      element.plugins = custom_plugins;
      element.page_api = custom_api;

      element.scopes = custom_scopes;
      element.page = custom_page;

      element.getList = custom_getList;
      element.getOne = custom_getOne;
      element.createItem = custom_createItem;
      element.updateItem = custom_updateItem;
      element.deleteItem = custom_deleteItem;

      if (field && displayLabel && field.value && displayLabel.value) {
        const childrenData = await getData(
          apiData.value.apiUrl,
          {},
          apiData.value.id
        );
        console.debug(
          `Data acquired for ${apiData.value.apiUrl}`,
          childrenData
        );
        if (childrenData && childrenData.items) {
          element.field = field.value;
          element.displayLabel = displayLabel.value;
          element.options = childrenData.items.map(c => {
            return c;
          });
        }
      }
    }
  }

  private async buildMultiComponent(
    element: any,
    selectedItem: any,
    id: string
  ) {
    debugger;
    let fieldsDefinition = selectedItem.attributes.find(
      a => a.name === "fieldDefinition"
    );
    console.debug("Build multi component", selectedItem);
    let apiData = selectedItem.attributes.find(a => a.name === "api");
    if (!apiData || !apiData.value) {
      console.debug(
        `Cannot load child data for component ${selectedItem.name} with id ${id} because no api was selected`
      );
      return;
    }
    if (fieldsDefinition) {
      fieldsDefinition = fieldsDefinition.value;
      const columns = fieldsDefinition
        .filter(f => f.visible)
        .map(f => {
          return {
            field: f.name,
            label: f.value,
            sortable: true,
            filterable: true,
            detail: f
          };
        });

      element.columns = JSON.parse(JSON.stringify(columns));
      element.getData = getData;

      element.plugins = custom_plugins;
      element.page_api = custom_api;

      element.scopes = custom_scopes;
      element.page = custom_page;

      element.getList = custom_getList;
      element.getOne = custom_getOne;
      element.createItem = custom_createItem;
      element.updateItem = custom_updateItem;
      element.deleteItem = custom_deleteItem;
    } else {
      console.debug(`Field definition not found to ${selectedItem.name}`);
    }

    console.debug(`Acquiring data for `, apiData);

    //get default size
    let options = {} as any;
    let size = selectedItem.attributes.find(a => a.name === "size");

    if (size && size.value) options.limit = size.value;

    const childrenData = await getData(
      apiData.value.apiUrl,
      options,
      apiData.value.id
    );
    console.debug(`Data acquired for ${apiData.value.apiUrl}`, childrenData);

    if (childrenData && childrenData.items) {
      element.data = childrenData;
    }

    //Apply event listener for reload data
    element.addEventListener("load-data", async params => {
      let options = params.detail;
      const data = await getData(
        apiData.value.apiUrl,
        options,
        apiData.value.id
      );
      element.data = data;
    });
  }

  private async buildCustomComponent(
    element: any,
    selectedItem: any,
    id: string
  ) {
    console.debug("Build custom component", selectedItem);
    let apiData = selectedItem.attributes.find(a => a.name === "api");
    if (!apiData || !apiData.value) {
      console.debug(
        `Cannot load child data for component ${selectedItem.name} with id ${id} because no api was selected`
      );
      return;
    }
    //adding lifeCyckle methods
    customElements.whenDefined(selectedItem.name).then(async () => {
      element.getData = getData;
      element.api = apiData;

      element.plugins = custom_plugins;
      element.page_api = custom_api;

      element.scopes = custom_scopes;
      element.page = custom_page;

      element.getList = custom_getList;
      element.getOne = custom_getOne;
      element.createItem = custom_createItem;
      element.updateItem = custom_updateItem;
      element.deleteItem = custom_deleteItem;
      console.debug(`Populated element `, element, custom_scopes);
      console.debug(`Acquiring data for `, apiData);

      //get default size
      let options = {} as any;
      let size = selectedItem.attributes.find(a => a.name === "size");
      if (size && size.value) options.limit = size.value;

      const childrenData = await getData(
        apiData.value.apiUrl,
        options,
        apiData.value.id
      );
      console.debug(`Data acquired for ${apiData.value.apiUrl}`, childrenData);

      if (childrenData && childrenData.items) {
        element.data = childrenData;
      }
    });
  }

  showMessage(
    text: string,
    ok: Function = () => {},
    cancel: Function = () => {},
    showCancel = false
  ) {
    customElements.whenDefined("vaadin-dialog").then(() => {
      dialogComponent.renderer = function(root, dialog) {
        // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
        if (root.firstElementChild) {
          return;
        }
        const div = window.document.createElement("div");
        div.textContent = text;

        const br = window.document.createElement("br");

        const okButton = window.document.createElement("vaadin-button");
        okButton.setAttribute("theme", "primary");
        okButton.textContent = "OK";
        okButton.setAttribute("style", "margin-right: 1em");
        okButton.addEventListener("click", function() {
          ok();
          dialog.opened = false;
        });

        const cancelButton = window.document.createElement("vaadin-button");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function() {
          cancel();
          dialog.opened = false;
        });

        const footer = document.createElement("div");
        footer.style.margin = "10px;";
        footer.appendChild(okButton);
        if (showCancel) footer.appendChild(cancelButton);

        root.appendChild(div);
        root.appendChild(br);
        root.appendChild(footer);
      };
      dialogComponent.opened = true;
    });
  }

  private async applyDefaultEvents(
    id: string,
    selectedItem: any,
    element: any
  ) {
    console.debug(
      `Binding event on ${id}, with name ${selectedItem.component.defaultEvent}`
    );

    switch (selectedItem.component.type) {
      case "API": {
        await this.buildApiComponent(element, selectedItem, id);
        break;
      }
      case "MULTI": {
        await this.buildMultiComponent(element, selectedItem, id);
        break;
      }

      case "CUSTOM": {
        await this.buildCustomComponent(element, selectedItem, id);
        break;
      }
    }

    element.addEventListener(selectedItem.component.defaultEvent, data => {
      console.debug(
        "Event selected " + selectedItem.component.defaultEvent,
        data.detail
      );
      let value = data.detail;
      if (selectedItem.component.defaultEventPath) {
        value = data.detail[selectedItem.component.defaultEventPath];
      }

      if (selectedItem.component.type === "MULTI") {
        let page = selectedItem.attributes.find(a => a.name === "page");
        if (!page) {
          console.debug(
            "Any action for this component " +
              selectedItem.component.name +
              " has been defined. (Any configured page)"
          );
        }

        console.debug("Opening page", page);
        this.dispatchEvent("item-clicked", {
          item: value,
          page: page.value
        });
      } else {
        this.model[selectedItem.fieldName] = value;
      }

      console.debug("Applying model changes to all fields");
      applyValuesChanged(this.model);
      console.debug("Model", this.model);
    });
  }

  async createPage() {
    return new Promise((resolve, reject) => {
      console.log(data);
      const parsedPage = this.parser.parse(data.content);
      content = parsedPage.fields;
      this.properties = parsedPage.properties;
      this.api = data.content.apiData;

      setTimeout(() => {
        component.childNodes[0]
          .querySelectorAll(".dynamic-element")
          .forEach(async el => {
            let id = el.id;
            let selectedItem = data.content.items.find(i => i.id === id);
            console.log("Properties", this.properties);
            await this.applyValues(el, this.properties, id);
            this.applyColumns(el, selectedItem.columns);

            if (selectedItem.component.defaultEvent) {
              await this.applyDefaultEvents(id, selectedItem, el);
            } else {
              console.debug(
                `Not binding element ${id} (${selectedItem.name}) because default event was not defined`
              );
            }
          });
        resolve(true);
      }, 100);
    });
  }

  dispatchEvent(name, detail) {
    mainComponent.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail
      })
    );
  }
}

export const model = new PageViewModel();

$: {
  if (!ready && data && !loading) {
    loading = true;
    model.createPage().then((isOk: boolean) => {
      ready = isOk;
      loading = false;
    });
  }

  if (permissions && permissions.length) {
    const hasPermissionForScreen = model.checkPermissionsFor(
      permissions,
      data.content.permissionView
    );
    console.debug(
      `Checking permission ${data.content.permissionView} for ${data.content.name}`,
      hasPermissionForScreen
    );
    if (!hasPermissionForScreen) {
      permissionDenied = true;
      model.showMessage(
        "You dont have permission for opening this page.",
        () => {
          model.dispatchEvent("permission-denied", {
            requiredPermission: data.content.permissionView,
            permissions: permissions
          });
        }
      );
    }
  }
}
