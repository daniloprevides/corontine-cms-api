import { onMount } from "svelte";
import ComponentWrapper from "./component-wrapper.svelte";
import PageView from "../page-view/page-view.svelte";

/**
 * Variables
 */
let component = null;
let paginationComponent = null;
let items = [];
let count = 0;
let total = 0;
let pages = 0;
let pageData = [];
let modal;

/**
 * Export variables
 */
export let maxheight = "50vh";
export let columns = [];

export let data = null;
export let size = 10;
export let filterable = true;
export let sortable = true;
export let selectable = false;
export let pagination = true;
export let sourcefield = null;
export let targetfield = null;
export let isArray = false;
export let itemmodel = null;
export let crud = false;
export let pageAdd = null;
export let pageEdit = null;
export let permissions = null;

export let getData = (url:string, params: any, apiId:string) => {
  console.debug('Get data not implemented');
  return null;
};

export class DataTableModel {
  params: any = { page: 1 };
  items: [];
  total: number;
  count: number;
  pages: number;
  component: any;

  getPaginationItems(totalItems, totalPages, pageSize) {}

  goTo(page) {
    if (page > pages) return;
    if (page < 1) return;

    this.params.page = page;

    this.dispatchEvent("load-data", this.params);
  }

  openItem(row) {
    this.dispatchEvent("item-selected", row);
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

  

  createCrudAddModal(modal) {
    modal.renderer = function(root, dialog) {
      const pageView = document.createElement("page-view") as any;
      pageView.getData = getData;
      pageView.data = pageAdd;
      pageView.applyValues({[targetfield]: isArray ? [itemmodel] : itemmodel});
      pageView.hideItems([targetfield]);
      pageView.permissions = permissions;


      const main = document.createElement("div");
      const footer = document.createElement("div");
      const buttonOk = document.createElement("button");
      buttonOk.className = "btn btn-primary";
      buttonOk.type = "button";
      buttonOk.style.padding = "5px";
      buttonOk.textContent = "OK";
      buttonOk.onclick = event => {
        let isValid = model.validateCrudData(pageView);
        let api = pageAdd.content.apiData;
        model.dispatchEvent("add-item", {
          item: pageView.getDataForSave(),
          page: pageAdd,
          api: api
        });
        dialog.opened = false;
      };

      const buttonCancel = document.createElement("button");
      buttonCancel.className = "btn btn-warning";
      buttonCancel.type = "button";
      buttonCancel.textContent = "Cancel";
      buttonCancel.style.padding = "5px";
      buttonCancel.onclick = event => {
        dialog.opened = false;
      };

      footer.style.marginBottom = "20px";
      footer.appendChild(buttonOk);
      footer.appendChild(buttonCancel);

      main.style.cssText = "width: 80vw;height:70vh;";
      main.classList.add("dialog-crud");

      main.appendChild(pageView);
      main.appendChild(footer);
      root.appendChild(main);
    };
    modal.opened = true;
  }
}

const model = new DataTableModel();

/**
 * Functions
 */
const goTo = model.goTo.bind(model);
const openItem = model.openItem.bind(model);

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

  if (itemmodel != null && sourcefield != null) {
    items = itemmodel[sourcefield];
    let dataTable = {
      items: items,
      itemCount: items.length,
      totalItems: items.length,
      pageCount: 1
    };
    data = dataTable;
  }

}

/**
 * Event Binding
 */

onMount(async () => {
  //Creating data
  model.component = component;
});
