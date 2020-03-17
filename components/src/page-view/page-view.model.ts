import { PageParser } from "./page-parser";

//Data for building page
export let data;
//Data for selected item

const isObject = (val) => {
  if (val === null) { return false;}
  return ( (typeof val === 'function') || (typeof val === 'object') );
}

export const applyValues = item => {
  model.model = item;


  setTimeout(() => {
    component.childNodes[0]
      .querySelectorAll(".dynamic-element")
      .forEach(async el => {
        let id = el.id;
        let selectedItem = data.content.items.find(i => i.id === id);
        
        let fieldName = selectedItem.fieldName;
        let value = model.model[fieldName];
        //If item is object and defaultPropertyBind is filled
        if (selectedItem?.component?.defaultPropertyBind && isObject(value)){          
          value = value[selectedItem.component.defaultPropertyBind];
        }
        if (selectedItem.component.type == 'API' ){
          let field = selectedItem?.attributes?.find(a => a.name === "field");
          if (field && field.value){
            if (isObject(model.model[fieldName])){
              let currentValue = model.model[fieldName][field.value];
              value = currentValue;
            }  
          }
        }


        el.data = value;
      });
  }, 100);
};

export const validate = () => {
  console.debug("Checking validation");
  let validationData = {};
  component.childNodes[0]
    .querySelectorAll(".dynamic-element")
    .forEach(async el => {
      let isValid = true;
      let input = el.shadowRoot.querySelector("input");
      let validationMessage = null;
      if (el.validateData) isValid = el.validateData();
      if (isValid) {
        if (input) {
          isValid = input.checkValidity();
          validationMessage = input.validationMessage;
        }
      }

      validationData[el.id] = { isValid: isValid, message: validationMessage };
    });

  return validationData;
};

export let getData = (url:string, params: any, apiId:string) => {
  return null;
};
let ready = false;
let component;
let content;

export const getDataForSave = () => {
  return model.model;
};

export class PageViewModel {
  parser = new PageParser();
  properties: any;
  api: any;
  attributesReference = [];
  model = {} as any;

  private applyValues(element: any, properties, id) {
    if (id && id.length) {
      if (properties[id]) {
        Object.keys(this.properties[id]).forEach(key => {
          let value = this.properties[id][key];          
          console.debug(`Applying property ${key} to element ${id}`,this.properties[id]);
          if (value != null){
            element[key] = value;
          }
        });
      }
    }
  }

  private applyColumns(element: any, columns: number) {
    element.setAttribute("colspan", columns);
  }

  private async buildApiComponent(element: any, selectedItem: any, id: string) {
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

      if (field && displayLabel && field.value && displayLabel.value) {
        const childrenData = await getData(apiData.value.apiUrl,{}, apiData.value.id);
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
    let fieldsDefinition = selectedItem.attributes.find(
      a => a.name === "fieldDefinition"
    );
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

      console.log(element.columns);

      element.columns = JSON.parse(JSON.stringify(columns));
    } else {
      console.debug(`Field definition not found to ${selectedItem.name}`);
    }

    console.debug(`Acquiring data for `,apiData);

    //get default size
    let options = {} as any;
    let size = selectedItem.attributes.find(
      a => a.name === "size"
    );

    if (size && size.value) options.limit = size.value;

    const childrenData = await getData(apiData.value.apiUrl, options, apiData.value.id);
    console.debug(`Data acquired for ${apiData.value.apiUrl}`, childrenData);

    if (childrenData && childrenData.items) {
      element.data = childrenData;
    }

    //Apply event listener for reload data
    element.addEventListener("load-data", async params => {
      let options = params.detail;
      const data = await getData(apiData.value.apiUrl, options, apiData.value.id)
      element.data = data;
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
    }

    
    element.addEventListener(selectedItem.component.defaultEvent, data => {
      console.debug("Event selected " + selectedItem.component.defaultEvent , data.detail);
      let value = data.detail;
      if (selectedItem.component.defaultEventPath) {
        value = data.detail[selectedItem.component.defaultEventPath];
      }

      if (selectedItem.component.type === "MULTI") {
        let page = selectedItem.attributes.find(a => a.name === 'page');        
        if (!page){
          console.debug("Any action for this component " + selectedItem.component.name + " has been defined. (Any configured page)");
        }

        console.debug("Opening page", page);
        this.dispatchEvent("item-clicked", {
          item: value,
          page: page.value
        });
      } else {
        this.model[selectedItem.fieldName] = value;
      }

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
            this.applyValues(el, this.properties, id);
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
    component.dispatchEvent(
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
  if (!ready && data) {
    model.createPage().then((isOk: boolean) => {
      ready = isOk;
    });
  }
}
