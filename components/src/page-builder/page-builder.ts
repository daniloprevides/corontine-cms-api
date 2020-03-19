import BuildProperties from "./page-build-properties.svelte";

export let components;
export let items = [];
export let sources = [];
export let events = [];
export let fields = [];
export let fieldNames = [];
export let pages = [];
export let permissions = [];
export let selected = null;

let selectedItemForAttributes = null;
let confirmationModal;
let loaded = false;
let pageMode = "add";
let buildPropertiesComponent;

export class Attribute {
  id: string;
  constructor(public name: string, public value: any, public type: string) {}
}

export class FieldItem {
  columns = "2";
  fieldName: string;
  eventName: string;
  eventId: string;
  eventPath: string;
  componentId: string;
  component: any;
  page: string = "";
  api: string = "";

  constructor(
    public id: string,
    public name: string,
    public modelComponent: any,
    public customElement: any,
    public masterElement: any,
    public attributes: Array<Attribute>
  ) {}
}

export class PageModel {
  api: string;
  apiData: any;
  apiType: string;
  validate: boolean = true;
  permissionView: string;
  permissionAdd: string;
  permissionDelete: string;

  constructor(
    public name: string,
    public description: string,
    public style: string,
    public component: any,
    public errors: {
      name: string;
      components: string;
    },
    public items: Array<FieldItem>
  ) {}
}

export class ModelRepository {
  constructor(private pageModel: PageModel) {}

  setMasterField(field, value) {
    this.pageModel[field] = value;
  }

  set(
    id: string,
    name: string,
    attributes: Attribute[] = [],
    modelComponent?: any,
    customElement?: any,
    masterElement?: any
  ) {
    let item = this.pageModel.items.find(i => i.id === id);
    console.debug(`Setting item in repository, item found`, item);
    if (!item) {
      item = new FieldItem(
        id,
        name,
        modelComponent,
        customElement,
        masterElement,
        attributes
      );
      this.pageModel.items.push(item);
      console.debug(`Adding new item to repository`, item);
    } else {
      item.name = name;
      item.modelComponent = modelComponent
        ? modelComponent
        : item.modelComponent;
      item.customElement = customElement ? customElement : item.customElement;
      item.masterElement = masterElement ? masterElement : item.masterElement;
      console.log("Item exists", item);
    }
    item.componentId = item.modelComponent.id;
    item.component = item.modelComponent;

    item.attributes = attributes.map(attribute => {
      let currentAttribute = item.attributes.find(
        a => a.name === attribute.name
      );
      if (currentAttribute) {
        currentAttribute.type = attribute.type;
        currentAttribute.value = attribute.value;
      } else {
        currentAttribute = attribute;
      }

      return currentAttribute;
    });
  }

  setAttributeValue(
    id: string,
    attributeName: string,
    attributeValue: any,
    attributeType: string
  ) {
    console.debug(
      "Applying attribute value",
      id,
      attributeName,
      attributeValue
    );
    let item = this.pageModel.items.find(i => i.id === id);
    if (!item) return null;

    let attribute = item.attributes.find(a => a.name === attributeName);
    if (attribute) {
      attribute.value = attributeValue;
    } else {
      item.attributes.push({
        name: attributeName,
        value: attributeValue,
        type: attributeType
      } as Attribute);
    }
  }

  get(id: string) {
    return this.pageModel.items.find(i => i.id === id);
  }

  remove(id: string) {
    this.pageModel.items = this.pageModel.items.filter(i => i.id != id);
  }

  removeAttribute(id: string, attributeName) {
    let item = this.pageModel.items.find(i => i.id === id);
    item.attributes = item.attributes.filter(a => a.name !== attributeName);
  }
}

export class PageBuilderModel {
  customElement;
  selectedId; //Holds the id of the current selected component inside page builder
  pageModel: PageModel = {
    validate: true,
    permissionView: "",
    permissionAdd: "",
    permissionDelete: "",
    api: "",
    apiData: null,
    apiType: null,
    name: "",
    description: "",
    style: "",
    component: null,
    errors: {
      name: null,
      components: null
    },
    items: new Array<FieldItem>()
  };
  repository = new ModelRepository(this.pageModel);

  /**
   *
   * @param selectedComponent Sync all attributes between model and visible screen elements
   */
  syncAttributes(selectedComponent: any) {
    let attributes = [];
    selectedComponent.modelComponent.attributes.forEach(currentAttribute => {
      console.log("Checking attribute ", currentAttribute);
      const modelAttribute = selectedComponent.attributes.find(
        a => a.name === currentAttribute.name
      );
      //If attribute was found, update the value, if not remove value
      if (modelAttribute) {
        let val = modelAttribute.value;
        if (val && val.val) {
          val = val.val;
        }
        currentAttribute.value = val;
        console.log(
          "Attribute found, updating value ",
          currentAttribute,
          modelAttribute
        );
      } else {
        console.log("Attribute not found, adding as null");
        currentAttribute.value = null;
      }
      attributes.push(currentAttribute);
    });
    selectedComponent.modelComponent.attributes = attributes;
  }

  selectItem(element) {
    const selfId = element.id;
    const selectedComponent = this.repository.get(selfId);
    const closeElement = element.querySelector(`.item-close`);

    //Hide all close elements
    if (this.pageModel.component) {
      this.pageModel.component.querySelectorAll(".item-close").forEach(i => {
        i.setAttribute("hidden", true);
      });
      //Removing the selected class from elements
      this.pageModel.component
        .querySelectorAll(".component-area")
        .forEach(i => {
          if (i.id != selfId) {
            i.classList.remove("selected");
          }
        });
    }

    //Setting the selected id for further usage
    this.selectedId = selfId;
    selectedItemForAttributes = selectedComponent;
    //Getting select colspan,or using default
    const colspan = selectedComponent.attributes.find(i => i.name == "colspan");
    selectedComponent.columns = colspan
      ? colspan.value
      : selectedComponent.columns;

    this.syncAttributes(selectedComponent);

    //Toggling the selected class
    if (element.classList) element.classList.toggle("selected");

    //If is a selection
    if (element.classList.contains("selected")) {
      closeElement.removeAttribute("hidden");
    } else {
      //cleaning if user is unselecting component
      closeElement.setAttribute("hidden", true);
      this.clearSelection();
    }
  }

  componentInsideScreenClicked(ev, element) {
    ev.stopPropagation();
    this.selectItem(element);
  }

  deleteComponenFromPageClicked(event, element) {
    event.stopPropagation();

    this.showConfirm("Do you really want to remove this element?", () => {
      if (this.selectedId) {
        this.repository.remove(element.id);
      }
      this.clearSelection();
      element.parentNode.removeChild(element);
    });
  }

  clearSelection() {
    this.selectedId = null;
    selectedItemForAttributes = null;
  }

  apiFieldSelected(name: string) {
    const itemSelected = this.repository.get(this.selectedId);
    itemSelected.fieldName = name;
  }

  eventSelected(event: any, path: string) {
    const itemSelected = this.repository.get(this.selectedId);
    itemSelected.eventName = event.name;
    itemSelected.eventPath = path;
    itemSelected.eventId = event.id;
  }

  applyDefinition(fieldList) {
    this.repository.setAttributeValue(
      this.selectedId,
      "fieldDefinition",
      fieldList,
      "ATTRIBUTE"
    );
  }

  applyFieldList(fieldList){
    this.pageModel.items.forEach(i => {
      let existsFieldList = i.attributes.find(a => a.name === "fieldList");
      if (!existsFieldList && i.modelComponent.type === "MULTI"){
        this.repository.setAttributeValue(
          i.id,
          "fieldDefinition",
          fieldList,
          "ATTRIBUTE"
        );
      }
    });
  }

  applyPropertyToElement(element: any, name: string, value: any, type: string) {
    //Making sure it is synchronized
    element = this.pageModel.component.querySelector(`#${element.id}`);
    element.setAttribute(name, value);
    element[name] = value;
  }

  applyPropertyToModelComponent(
    modelComponent: any,
    name: string,
    value: any,
    type: string
  ) {
    if (modelComponent && modelComponent.attributes) {
      const attribute = modelComponent.attributes.find(a => a.name === name);
      if (attribute) {
        attribute.value = value;
      }
    }
  }

  applyAttributeValue(
    id: string,
    attributeName: string,
    attributeValue: any,
    attributeType: string
  ) {
    console.debug("Applying attribute value ", attributeName, attributeValue);
    //Applying to model
    this.repository.setAttributeValue(
      id,
      attributeName,
      attributeValue,
      attributeType
    );
    //applying to component
    const element = this.repository.get(id);
    let attributeDefinition = this.repository
      .get(id)
      .modelComponent.attributes.find(a => a.name === attributeName);
    if (
      attributeDefinition &&
      attributeDefinition.removeWhenFalse &&
      attributeDefinition.value === true
    ) {
      element.customElement.removeAttribute(attributeName);
      this.repository.removeAttribute(id, attributeName);
    } else {
      this.applyPropertyToElement(
        element.customElement,
        attributeName,
        attributeValue,
        attributeType
      );
    }

    if (attributeName === "colspan") {
      element.masterElement.setAttribute("colspan", attributeValue);
    }

    console.debug("Applyed", element.customElement);
    console.debug(`Applyed attribute to screen, pageModel`, this.pageModel);
  }

  applyProperties(fieldName: string, id, attributes) {
    const applyedAttributes = [];
    let customElement = this.repository.get(id).customElement;
    attributes.forEach(attribute => {
      console.debug("Apply Properties", attribute);
      if (
        attribute.defaultValue != null &&
        JSON.stringify(attribute.defaultValue) !== JSON.stringify({})
      ) {
        try {
          let defaultValue = attribute.defaultValue;
          let attributeDefinition = this.repository
            .get(id)
            .modelComponent.attributes.find(a => a.name === attribute.name);

          if (defaultValue && defaultValue.val) {
            defaultValue = defaultValue.val;
          }

          if (attributeDefinition && attributeDefinition.type === "TEMPLATE") {
            console.debug(
              `Applying ${attributeDefinition.name} as template `,
              attribute
            );
            customElement.appendChild(defaultValue);
          } else {
            customElement[attribute.name] = defaultValue;
          }

          //Remove attribute if needed

          if (
            attributeDefinition.removeWhenFalse &&
            attributeDefinition.value === true
          ) {
            customElement.removeAttribute(attribute.name);
            this.repository.removeAttribute(id, attribute.name);
          } else {
            applyedAttributes.push({
              name: attribute.name,
              value: defaultValue,
              type: attribute.attributeType
            } as Attribute);
          }

          this.repository.set(id, fieldName, applyedAttributes);
        } catch (ex) {
          //If an property is only setter and we try to define it here, an error is gonna be throwed
          console.debug(ex);
        }
      }
    });
  }

  private resetAllEventsAfterDropHandle() {
    //Reseting all events
    this.pageModel.component
      .querySelectorAll(".component-area")
      .forEach((e: any) => {
        e.ondragstart = this.dragStartInsidePage;
        const closeElement = e.querySelector(`.item-close`);

        closeElement.onclick = ev => {
          this.deleteComponenFromPageClicked(ev, e);
        };
        e.onclick = ev => {
          this.componentInsideScreenClicked(ev, e);
        };
      });
  }

  /**
   * Properties Events
   */

  apiChanged(apiId: string, apiType: string, fieldName: string) {
    this.repository.setMasterField("api", apiId);
    this.repository.setMasterField(
      "apiData",
      sources.find(i => i.id === apiId)
    );
    this.repository.setMasterField("apiType", apiType);
    console.debug(`Setting api ${apiId}`, this.pageModel);
    this.dispatchEvent("api-changed", { id: apiId, type: apiType, fieldName: fieldName });
  }

  innerApiChanged(item, api, fields){
    this.applyAttributeValue(item.masterElement.id, 'api', api, "ATTRIBUTE");
    console.debug(`Setting api attribute ${api.id}`, item.attributes);
    this.dispatchEvent("api-changed", { id: api.id, type: "list", fieldName: "fields" });
  }


  loadApiData(apiId, apiType) {
    this.dispatchEvent("api-changed", { id: apiId, type: apiType });
  }

  /** DnD Events */

  dragStartInsidePage() {
    return;
  }

  dragOver(event: any) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  startDragging(event: any) {
    const id = event.target.id.replace("drag_", "");
    const component = components.find(c => c.id == id);
    const newId = `added_${Math.random()
      .toString(36)
      .substring(7)}`;
    event.dataTransfer.setData("text/plain", newId);
    event.dataTransfer.setData(
      "text/html",
      this.getDefaultMasterItem(component, newId, id)
    );
  }

  addItemToScreen(html: string, target: any, id: string) {
    //Adding HTML to Screen
    target.innerHTML = target.innerHTML + html;
    //Getting info
    const masterElement = this.pageModel.component.querySelector(`#${id}`);
    const customElement = this.pageModel.component.querySelector(`#comp_${id}`);
    const componentSelected = components.find(
      c => c.id == masterElement.getAttribute("data-type")
    );
    console.debug(`Add item to screen, component selected`, componentSelected);

    //Setting the field in model
    this.repository.set(
      id,
      componentSelected.label,
      [
        { name: "colspan", value: "2", type: "ATTRIBUTE" } as Attribute,
        {
          name: "bindingProperty",
          value: componentSelected.defaultPropertyBind,
          type: "ATTRIBUTE"
        } as Attribute
      ],
      componentSelected,
      customElement,
      masterElement
    );

    console.debug(`Add item to screen`, componentSelected.attributes);
    this.applyProperties(
      componentSelected.label,
      id,
      componentSelected.attributes
    );

    this.resetAllEventsAfterDropHandle();

    console.debug(`Item added to screen, pageModel`, this.pageModel);
  }

  dropped(event: any) {
    event.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    let id = null;
    let idData = event.dataTransfer.getData("text/plain");
    let htmlData = event.dataTransfer.getData("text/html");

    if (idData.indexOf("move") >= 0) {
      let oldId = null;
      [, id, oldId] = idData.split(":");
    } else {
      id = idData;
    }

    this.addItemToScreen(htmlData, event.target, id);

  }

  getDefaultElement(element: any, id: string) {
    return `<${element.label} style="width: var(--cms-options-custom-elements-size);" id="${id}" />`;
  }

  getDefaultMasterItem(component: any, newId: string, id: string) {
    return `<div class="component-area default-style" id="${newId}" data-type="${id}" draggable="true" colspan="2">
                    <span class="item-title">${component.label}</span>
                    <span class="item-close" hidden>X</span>
                    ${this.getDefaultElement(component, `comp_${newId}`)}
                </div>
                \n`;
  }

  dispatchEvent(name, detail) {
    this.customElement.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail
      })
    );
  }

  async validate(isSave = false) {
    console.log("Model", this.pageModel);
    return new Promise((resolve, reject) => {
      this.pageModel.errors.name = null;
      this.pageModel.errors.components = null;
      if (!this.pageModel.name || !this.pageModel.name.length) {
        this.pageModel.errors.name += "\nThe name must be filled";
      }
      if (this.pageModel.name && this.pageModel.name.indexOf(" ") >= 0) {
        this.pageModel.errors.name += "\nThe name CANNOT contains space";
      }

      if (pages && pages.length && pageMode !== "edit") {
        if (pages.map(p => p.name).indexOf(this.pageModel.name) >= 0) {
          this.pageModel.errors.name +=
            "\nThis page name already exists. Please, choose another";
        }
      }

      if (isSave) {
        //Validating if required attributes inside selected attributes were all selected
        let errorMessages = [];
        this.pageModel.items.forEach(i => {
          console.log("component", i, i.component);
          if (!i.fieldName && i.component.needApi) {
            errorMessages.push(
              `An api field must be selected for component ${i.name}`
            );
          }

          if (i.modelComponent.type === "MULTI") {
            let api = i.attributes.find(a => a.name == "api");
            if (!api || !api.value) {
              errorMessages.push(
                `A source data field must be selected for component ${i.name}`
              );
            }
          }

          i.modelComponent.attributes.forEach(r => {
            console.debug(`Validating attribute ${r.name}`, r);
            const selectedAttribute = i.attributes.find(s => s.name === r.name);
            console.debug(`Attribute on model ${r.name}`, r);
            if (r.required) {
              console.debug(
                `Attribute on model ${r.name} is required, checking if its ok`
              );

              if (selectedAttribute) {
                console.debug(
                  `Attribute ${r.name} exists on model with value`,
                  selectedAttribute.value
                );
                if (
                  !selectedAttribute.value ||
                  !selectedAttribute.value?.trim().length
                ) {
                  console.debug(
                    `Attribute ${r.name} is required but value is empty`
                  );
                  errorMessages.push(
                    `Field ${i.name} has attribute ${r.name} required but the value is empty`
                  );
                }
              } else if (r.applyAfterSetInComposer) {
                console.debug(
                  `Field ${i.name} contains attribute ${r.name} not presente but is required`
                );
                errorMessages.push(
                  `Field ${i.name} contains attribute ${r.name} not presente but is required`
                );
              }
            }
          });
        });

        if (!this.pageModel.permissionView.length ){
          errorMessages.push(
            `A permission to view this page must be selected`
          );
        }

        if (!this.pageModel.permissionAdd.length ){
          errorMessages.push(
            `A permission to create a new page must be selected`
          );
        }

        if (!this.pageModel.permissionDelete.length ){
          errorMessages.push(
            `A permission to delete this page must be selected`
          );
        }


        if (errorMessages.length) {
          if (this.pageModel.errors.name != null) {
            this.pageModel.errors.name = this.pageModel.errors.name.replace(
              /null/g,
              ""
            );
          }

          this.pageModel.errors.components = errorMessages.join("\n");
          return resolve(false);
        }        

        if (this.pageModel.errors.name != null) {
          this.pageModel.errors.name = this.pageModel.errors.name.replace(
            /null/g,
            ""
          );
          return resolve(false);
        }

        //Validate if api is selected
        if (!this.pageModel.api) {
          this.showConfirm(
            "You did not select an api, do you want to proceed ?",
            ok => {
              return resolve(true);
            }
          );
        } else {
          return resolve(true);
        }
      }
    });
  }

  async save(event: any) {
    const isValid = await this.validate(true);
    console.debug("page", this.pageModel);
    console.debug("Page Is Valid", isValid);
    if (isValid) {
      this.dispatchEvent("changed", {
        name: this.pageModel.name,
        description: this.pageModel.description,
        content: this.getClearModel(),
        pageMode: pageMode
      });
    } else {
      const errors = `${
        this.pageModel.errors.name ? this.pageModel.errors.name : ""
      } \n${
        this.pageModel.errors.components ? this.pageModel.errors.components : ""
      }`;
      this.showMessage(errors);
    }
  }

  cancel(event: any) {
    window.history.back();
  }

  getClearModel() {
    let newObject = Object.assign({}, this.pageModel);
    delete newObject.component;
    delete newObject.errors;

    newObject.items = newObject.items.map(i => {
      delete i.customElement;
      delete i.masterElement;
      delete i.modelComponent;

      return i;
    });
    return newObject;
  }

  showConfirm(message: string, ok: Function, cancel: Function = () => {}) {
    confirmationModal.renderer = function(root, dialog) {
      // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
      if (root.firstElementChild) {
        return;
      }
      const div = window.document.createElement("div");
      div.textContent = message;

      const br = window.document.createElement("br");

      const okButton = window.document.createElement("vaadin-button");
      okButton.setAttribute("theme", "primary");
      okButton.textContent = "OK";
      okButton.setAttribute("style", "margin-right: 1em");
      okButton.addEventListener("click", function() {
        dialog.opened = false;
        return ok();
      });

      const cancelButton = window.document.createElement("vaadin-button");
      cancelButton.textContent = "Cancel";
      cancelButton.setAttribute("theme", "primary");

      cancelButton.addEventListener("click", function() {
        dialog.opened = false;
        return cancel();
      });

      root.appendChild(div);
      root.appendChild(br);
      root.appendChild(okButton);
      root.appendChild(cancelButton);
    };
    confirmationModal.opened = true;
  }

  showMessage(message: string, ok: Function = () => {}) {
    confirmationModal.renderer = function(root, dialog) {
      // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
      if (root.firstElementChild) {
        return;
      }

      const messageBreakLines = message.split(`\n`);
      messageBreakLines.forEach((m, i) => {
        if (i > 0) {
          const br = window.document.createElement("br");
          root.appendChild(br);
        }

        const p = window.document.createElement("p");
        p.textContent = m;
        root.appendChild(p);
      });

      const br = window.document.createElement("br");
      const okButton = window.document.createElement("vaadin-button");
      okButton.setAttribute("theme", "primary");
      okButton.textContent = "OK";
      okButton.setAttribute("style", "margin-right: 1em");
      okButton.addEventListener("click", function() {
        dialog.opened = false;
        return ok();
      });

      root.appendChild(br);
      root.appendChild(okButton);
    };
    confirmationModal.opened = true;
  }
}

const model = new PageBuilderModel();

$: {
  if (selected && components && buildPropertiesComponent && !loaded && (permissions.length)) {
    console.debug(`Page edit mode is selected`, selected);
    pageMode = "edit";
    try {
      model.pageModel.name = selected.content.name;
      model.pageModel.description = selected.content.description;
      model.pageModel.api = selected.content.api;
      model.pageModel.apiData = selected.content.apiData;
      model.pageModel.apiType = selected.content.apiType;
      model.pageModel.validate = selected.content.validate;
      model.pageModel.permissionView = selected.content.permissionView;
      model.pageModel.permissionAdd = selected.content.permissionAdd;
      model.pageModel.permissionDelete = selected.content.permissionDelete;

      //Adding api load to end of queue
      setTimeout(async () => {
        //Loading all fields
        model.apiChanged(selected.content.api, selected.content.apiType, "fieldNames");
      });

      buildPropertiesComponent.pageModel = model;
      if (selected.content.items && selected.content.items.length) {
        selected.content.items.forEach(item => {
          //get Master element
          const component = components.find(c => c.id == item.componentId);
          let masterComponent = model.getDefaultMasterItem(
            component,
            item.id,
            item.componentId
          );
          model.addItemToScreen(
            masterComponent,
            model.pageModel.component,
            item.id
          );
          const modelComponent = model.repository.get(item.id);
          const customElement = modelComponent.customElement;

          //seetting item values
          modelComponent.fieldName = item.fieldName;

          //applying attribute values
          if (item.attributes && item.attributes.length) {
            item.attributes.forEach(a => {
              //Applying page
              if (a.name === "page") {
                console.debug(
                  `Applying page attribute`,
                  a.name,
                  modelComponent.attributes
                );

                if (a && a.value){
                  modelComponent.page = a.value.id;
                  console.log("Page applied", modelComponent);
                }else{
                  console.debug(`Attribute page not found or is not a model`,a)
                }
              }

              //Applying api
              if (a.name === "api") {
                console.debug(
                  `Applying api attribute`,
                  a.name,
                  modelComponent.api
                );
                modelComponent.api = a.value.id;
                if (a && a.value){
                  console.log("Api applied", modelComponent);
                }else{
                  console.debug("Api attribute not found or is not a model", a);
                }

              }


              if (a.name === "fieldDefinition"){
                console.debug(
                  `Applying fieldDefinition attribute aaa`,
                  a.name,
                  a.value
                );
                fields = a.value;
                console.debug(
                  `Fields `,
                  fields
                );
              }

              model.applyAttributeValue(item.id, a.name, a.value, "ATTRIBUTE");
              model.applyPropertyToElement(
                customElement,
                a.name,
                a.value,
                a.type
              );
              model.applyPropertyToModelComponent(
                modelComponent.modelComponent,
                a.name,
                a.value,
                a.type
              );
            });
          }
        });
      }
    } catch (ex) {
      console.error(ex);
    } finally {
      loaded = true;
    }
  }
}

$: {
  //Apply fields attribute if they dont exist for fields
  if (fields){
    model.pageModel.items.forEach(i => {
      i.attributes.forEach(a => {
        
        if (i.modelComponent.type === "MULTI"){
          const fieldDefinitionAttribute = i.attributes.find(a => a.name === "fieldDefinition");
          if (!fieldDefinitionAttribute){
            model.applyAttributeValue(i.id,"fieldDefinition", fields,"ATTRIBUTE");
          }
        }
      })
    })
  }
}
