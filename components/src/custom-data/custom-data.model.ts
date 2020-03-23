import { onMount } from "svelte";
//The label to display the field
export let element;

//methods from cms to custom element
export let plugins;
export let api;
export let page_api;
export let scopes;
export let page;

//Defining data functions
export let getList;
export let getOne;
export let createItem;
export let updateItem;
export let deleteItem;

let component;

export class CustomDataModel {
  initialize() {
    const customElement = document.createElement(element);
    component.innerHTML = null;
    component.appendChild(customElement);
    customElements.whenDefined(element).then(d => {
      //applying default data
      if (plugins) customElement.plugins = plugins;
      if (api) customElement.api = api;
      if (scopes) customElement.scopes = scopes;
      if (page) customElement.page = page;
      if (page_api) customElement.pageapi = page_api
      //methods
      if (getList) customElement.getList = getList;
      if (getOne) customElement.getOne = getOne;
      if (createItem) customElement.createItem = createItem;
      if (updateItem) customElement.updateItem = updateItem;
      if (deleteItem) customElement.deleteItem = deleteItem;

    });
  }

  changed(value) {
    if (this.validate()) {
      this.dispatchEvent("changed", value);
    }
  }

  validate() {
    return true;
  }

  getErrorMessage() {
    return null;
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

export const model = new CustomDataModel();
export const validateData = model.validate;
export const getErrorMessage = model.getErrorMessage;

onMount(async () => {
  //model.initialize();
});


$:{
  if (scopes && component){
    model.initialize();
  }
}