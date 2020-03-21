<script>
  import BaseService from "../services/base.service";
  import { webcomponentDataStorage } from "../stores/webcomponents.store";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  const { open } = getContext("simple-modal");

  /**
   * Variables
   *
   */
  let component = null;
  export let params = {};

  /**
   * Functions
   */

  webcomponentDataStorage.subscribe(async ok => {
    if (ok) {
      if (params && params.name) {
        loadData({});
      }
    }
  });

  const loadData = async queryParams => {
    try {
      let data = await BaseService.getListData(params.name, queryParams);
      component.data = data;
      if (data && data.items && data.items.length){
        component.columns = Object.keys(data.items[0]).map(c => {
            return {
                filterable: true,
                sortable: true,
                field: c,
                label: c
            }
        })
      }

    } catch (error) {
      open(Message, {
        title: "Error",
        text: error.message,
        showCancel: false,
        onOk: () => {
          if (error.url) {
            push(error.url);
          }
        }
      });
    }
  };

  $: {
  }
</script>

<style>
  .spacer {
    margin-bottom: 10px;
  }
</style>

<div class="main-page">
  <h1 class="page-title">Listing {params.name}</h1>
  <small>Page description here...</small>
  <span class="spacer" />
  <prevides-data-table id="table" bind:this={component} />
</div>
