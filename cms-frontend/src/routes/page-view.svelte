<script>
  import { onMount } from "svelte";
  import { push, pop, replace } from "svelte-spa-router";
  import baseService from "../services/base.service";

  import { appDataStorage } from "../stores/app-flow.store";
  import { webcomponentDataStorage } from "../stores/webcomponents.store";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  import { fade } from "svelte/transition";

  const { open } = getContext("simple-modal");

  let component = null;
  let ready = false;
  let paginator = null;
  let data = { items: [] };
  let alreadyDefined = false;

  /**
   * Event Binding
   */

  const loadFields = async () => {
    //data = appDataStorage.getProperty("pages-paginator");
    let response = await baseService.getListData("pages_api");
    if (response && response.items) {
      data = response;
    }
  };

  const addPage = event => {
    push(`/add/page`);
  };

  const deletePage = async item => {
    try {
      let response = await baseService.delete("pages_api", item.id);
      await loadFields();
      
      open(Message, {
        title: "Success",
        text: "Page deleted sucessfully",
        showCancel: false,
        onOk: async () => {
          component.data = data;
        }
      });
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

  webcomponentDataStorage.subscribe(async ok => {
    if (ok) {
      await loadFields();

      if (component) {
        customElements.whenDefined("grid-list").then(function() {
          component.data = data;

          component.addEventListener("selected", item => {
            push(`/edit/page/${item.detail.id}`);
          });

          component.addEventListener("delete", item => {
            deletePage(item.detail);
          });

          component.addEventListener("new-item", item => {
            addPage(item);
          });
        });
      }
    }
  });

  onMount(async () => {});

  $: {
  }
</script>

<style>

</style>

<div class="form-page" in:fade="{{duration: 500}}">
  <grid-list bind:this={component} />
</div>

<div hidden class="size-full" />
