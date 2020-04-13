/* eslint-disable @typescript-eslint/camelcase */
import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
  OnChanges
} from "@angular/core";

import { BaseComponents } from "../base-components";
import { PageModel, Page, Attribute, FieldItem } from "../page-model.dto";
import { isObject } from "util";

@Component({
  selector: "page-view",
  templateUrl: "./page-view.html",
  styleUrls: ["./page-view.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageViewComponent extends BaseComponents implements OnChanges {
  @ViewChild("form", { static: false }) form: ElementRef;
  @ViewChild("container", { static: false }) container: ElementRef;
  @Input() data: Page;
  @Input() applyValues = (model:any) => { this.doApplyValues(model)};
  @Input() validateData = () => { return this.doValidateData()};
  @Input() getDataForSave = async () => { return await this.doGetDataForSave()};

  elements: Map<string, { item: FieldItem; element: any }> = new Map();
  model: any = {} as any; //Data Model
  selectedRowForAction: any;

  constructor(private zone: NgZone) {
    super();
  }

  doValidateData() {
    const validationData = {};
    console.debug("Elements", this.elements);
    this.elements.forEach((value,key) => {
      const el = value.element;
      if (el.getErrorMessage && el.validateData){
        const isValid = el.validateData();
        if (!isValid){
          const validationMessage = el.getErrorMessage();
          console.debug("Element", key, isValid, validationMessage);
          validationData[el.getAttribute("id")] = {
            isValid: isValid,
            message: validationMessage,
            field: value.item.fieldName
          };
        }
      }
    });
    console.debug("ValidationData", validationData);
    return validationData;
  }

  /**
   * Apply page values (When in edit mode)
   */
  async doApplyValues(values: any) {
    console.debug(`Applying values`,values);
    this.model = values;
    Object.keys(values).forEach(key => {
      const value = values[key];
      console.debug(`Checking elements`,this.elements);
      if (this.elements.has(key)) {
        const field = this.elements.get(key);
        const element = field.element;
        const item = field.item;
        //Applying the model for all elements
        element.itemmodel = values;

        // if (
        //   item.component &&
        //   item.component.defaultPropertyBind &&
        //   isObject(value)
        // ) {
        //   value = value[item.component.defaultPropertyBind];
        // } else if (item.component.type === "API") {
        //   const apiField = item.attributes.find(a => a.name === "field");
        //   if (apiField && apiField.value) {
        //     if (isObject(value)) {
        //       const currentValue = value[apiField.value];
        //       value = currentValue;
        //     }
        //   }
        // }

        console.debug(`Getting value for ${key}`,value)
        element.data = value;
      }
    });
  }

  async applyAttributes(element: any, name: string, attributes: Attribute[]) {
    console.debug(`Waiting for custom element ${name} to be defined`, attributes);
    customElements.whenDefined(name).then(() => {
      for (const attribute of attributes) {
        //checking if element has a property, if has, is a property otherwise is attribute (Best way)
        if (element[attribute.name] != undefined) {
          //property
          console.debug(
            `Applying property ${attribute.name} to element ${name} with value`,
            attribute.value
          );
          if (attribute.value != undefined){
            element[attribute.name] = attribute.value;
          }

        } else {
          console.debug(
            `Applying attribute ${attribute.name} to element ${name} with value`,
            attribute.value
          );
          if (attribute.value != undefined){
            element.setAttribute(attribute.name, attribute.value);
          }
        }
      }
    });
  }

  async populatePage(content: PageModel, page: Page) {
    //cleaning the container
    this.container.nativeElement.innerHtml = "";
    this.elements = new Map<string, { item: FieldItem; element: any }>();
    const element = this.container.nativeElement;
    //applying the elements to screen
    for (const item of content.items) {
      const currentElement = document.createElement(item.name);
      currentElement.classList.add("col-md-" + parseInt(item.columns) * 6);
      currentElement.setAttribute("id",item.id);
      element.append(currentElement);
      this.elements.set(item.fieldName, {
        item: item,
        element: currentElement
      });
      await this.applyDefaultMethods(currentElement,item.name);
      await this.applyListeners(currentElement,item);
      await this.applyCustomConfiguration(currentElement,item);
      await this.applyAttributes(currentElement, item.name, item.attributes);
    }
  }

  parseAction(action:{action:string, params: { page:string, details:any}}){
    switch(action.action){
      case "openPage": {
        this.dispatch(this.form.nativeElement,"open-page", action.params);
      }
    }
  }

  async applyCustomConfiguration(currentElement: HTMLElement, item: FieldItem) {
    switch(item.component.type){
      case "MULTI": {
        customElements.whenDefined(item.name).then(() => {
          currentElement.addEventListener("item-selected",(event:any) => {
            const data = event.detail;
            this.parseAction(data);
          })
        });
      }
    }
    console.debug(item);
  }

  async applyListeners(currentElement: HTMLElement, item: FieldItem) {
    const eventName = item.component.defaultEvent;
    console.debug(`Checking listener for ${item.name} of event ${eventName}`);
    if (eventName){
      customElements.whenDefined(item.name).then(() => {
        console.debug(`Binding event ${eventName} to ${item.name}`,item);
        currentElement.addEventListener(eventName,(event:any) => {
          //this.dispatch(currentElement,eventName,event);
          const data = event.detail;
          this.model[item.fieldName] = data;
          //Making sure that all components model are up to date
          this.doApplyValues(this.model);
        })
      });
    }
  }
  async applyDefaultMethods(element: any, name:string) {
    customElements.whenDefined(name).then(() => {
      element.plugins = this.plugins;
      element.api = this.api;
      element.scopes = this.scopes;
      element.pageModel = this.pageModel;
      element.getList = this.getList;
      element.getOne = this.getOne;
      element.createItem = this.createItem;
      element.updateItem = this.updateItem;
      element.deleteItem = this.deleteItem;
      element.notificationService = this.notificationService;
    });
  }

  async doGetDataForSave(){
    return this.model;
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (this.data) {
      await this.populatePage(this.data.content, this.data);
    }

    if (changes.page){
      console.debug("Page", changes);
    }

  }
}
