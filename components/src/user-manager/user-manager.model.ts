import { onMount } from "svelte";
import ComponentWrapper from "./component-wrapper.svelte";
import UserEditComponent from "./user-edit-component.svelte";
/**
 * Variables
 */
let component = null;
let items = [];
let count = 0;
let total = 0;
let pages = 0;
let pageData = [];
//Modal window
let modal;

/**
 * Export variables
 */
export let columns = [];

export let data = null;
export let size = 10;
export let filterable = true;
export let sortable = true;
export let itemmodel = null;
export let crud = true;
export let permissions = null;
export let groups = [];



export class UserManagerModel {
  params: any = { page: 1 };
  items: [];
  total: number;
  count: number;
  pages: number;
  component: any;

  openItem(row) {
    this.createCrudAddModal(modal,row);
  }

  validateCrudData(pageView) {
    const validationData = pageView.validate();
    let validationErrorFields = [];
    Object.keys(validationData).forEach(k => {
      let value = validationData[k];
      const item = pageView.shadowRoot.querySelector("#" + k);
      if (!value.isValid) {
        item.classList.add("error");
        validationErrorFields.push({ field: k, message: value.message });
      } else {
        item.classList.remove("error");
      }
    });

    return validationErrorFields == null;
  }

  createCrudAddModal(modal:any, item?:any) {
    modal.renderer = function(root, dialog) {
      const pageView = document.createElement("user-edit-component") as any;
      pageView.dialog = modal;
      pageView.groups = groups;

      if (item){
        pageView.state = "edit";
        pageView.model = item;
      }

      customElements.whenDefined("user-edit-component").then(d => {
        pageView.addEventListener("add-item", (event) => {
          dispatchEvent("add-item", event.detail);
          modal.opened = false;
        });

        pageView.addEventListener("delete-item", (event) => {
          dispatchEvent("delete-item", event.detail);
          modal.opened = false;
        });

        pageView.addEventListener("change-password", (event) => {
          dispatchEvent("change-password", event.detail);
          modal.opened = false;
        });
      });

      root.appendChild(pageView);
    };
    modal.opened = true;
  }
}

const model = new UserManagerModel();

/**
 * Functions
 */
const openItem = model.openItem.bind(model);

const dispatchEvent = (name, detail:any) => {
  component.dispatchEvent(
    new CustomEvent(name, {
      composed: true,
      cancelable: false,
      detail: detail
    })
  );
}

//Data Changed
$: {
  if (data) {
    items = data.items;
    total = data.totalItems;
    count = data.itemCount;
    pages = data.pageCount;

    model.items = data.items;
    model.total = total;
    model.count = count;
    model.pages = pages;
    if (pages) {
      pageData = [];
      for (let p = 1; p <= pages; p++) {
        pageData.push(p);
      }
    }
  }

  if (size) {
    model.params.limit = size;
    console.debug("Columns", columns);
  }

}

/**
 * Event Binding
 */

onMount(async () => {
  //Creating data
});
