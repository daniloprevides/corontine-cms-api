<script>
  import { onMount } from "svelte";
  import { push, pop, replace } from "svelte-spa-router";
  import LoginService from "../services/login.service";
  import FieldsService from "../services/fields.service";
  import pageService from "../services/page.service";
  import baseService from "../services/base.service";
  import { fade } from "svelte/transition";

  import { pluginDataStorage } from "../stores/plugin-data.store";
  import { webcomponentDataStorage } from "../stores/webcomponents.store";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  const { open } = getContext("simple-modal");
  export let params = {};
  let component = null;
  let authPlugin = null;
  let fields = null;
  let apiData = null;
  let selected = null;
  let pages = [];
  let permissions = [];

  /**
   * Event Binding
   */
  const loadFields = async () => {
    let promises = [
      FieldsService.getAvailableFields(),
      pageService.getApis(),
      baseService.getListData("pages_api"),
      baseService.getListData("scopes_api")
    ];

    const [
      itemsPagination,
      apiResponse,
      pagesResponse,
      scopesResponse
    ] = await Promise.all(promises);
    if (params && params.id) {
      selected = pagesResponse.items.find(p => p.id === params.id);
    }

    fields = itemsPagination.items;
    apiData = apiResponse;
    pages = pagesResponse.items;
    permissions = scopesResponse.items.map(s => s.name);
  };

  webcomponentDataStorage.subscribe(async ok => {
    if (ok) {
      await loadFields();
      component.pages = pages;
      component.sources = apiData.plugins.filter(p => p.pluginType === "API");
      if (selected) {
        component.selected = selected;
      }
      component.components = fields
        .filter(f => f.allowInComposer)
        .map(f => {
          return {
            label: f.name,
            id: f.id,
            tooltip: f.description,
            type: f.type,
            defaultEventPath: f.defaultEventPath,
            needApi: f.needApi,
            defaultPropertyBind: f.defaultPropertyBind,
            defaultEvent: f.defaultEvent,
            defaultElement: `<${f.name} style="width: var(--cms-options-custom-elements-size);" />`,
            events: f.events,
            attributes: f.attributes.map(a => {
              if (JSON.stringify(a.defaultValue) === "{}") {
                a.defaultValue = null;
              }
              return a;
            })
          };
        });
      component.addEventListener("api-changed", async event => {
        const { id, type, fieldName } = event.detail;
        const source = component.sources.find(s => s.id === id);
        const url = source.apiUrl;
        const fieldNames = await baseService.getFieldNames(url);
        component[fieldName] = fieldNames[type].map((i, ix) => {
          return {
            name: i,
            value: i,
            order: ix,
            visible: true
          };
        });
      });

      component.permissions = permissions;

      component.addEventListener("changed", async event => {
        const item = event.detail;

        try {
          let pageResponse = null;
          let message = null;
          if (item.pageMode === "add") {
            pageResponse = await baseService.create("pages_api", item);
            message = "Page sucessfully created";
          } else {
            item.id = params.id;
            pageResponse = await baseService.update(
              "pages_api",
              params.id,
              item
            );
            message = "Page sucessfully Updated";
          }

          open(Message, {
            title: "Success",
            text: message,
            showCancel: false,
            onOk: () => {
              push("/manager/pages");
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
      });
    }
  });

  onMount(async () => {});
</script>

<style>
  .login-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<div in:fade={{ duration: 500 }}>
  <page-builder bind:this={component} />
</div>

<div hidden class="size-full" />
