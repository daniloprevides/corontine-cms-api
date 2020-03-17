import { onMount } from "svelte";
import ComponentWrapper from "./component-wrapper.svelte";

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
/**
 * Export variables
 */
export let columns = [
  { field: "code", label: "Code", sortable: true, filterable: true },
  { field: "name", label: "Name", sortable: true, filterable: true },
  {
    field: "description",
    label: "Description",
    sortable: true,
    filterable: true
  }
];

export let data = null;
export let size = 10;
export let filterable = true;
export let sortable = true;
export let pagination = true;

export class DataTableModel {
  params: any = { page: 1};
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

  if (size){
    model.params.limit = size;
    console.debug("Columns", columns);
  }
}

/**
 * Event Binding
 */

onMount(async () => {
  //Creating data
  model.component = component;
});
