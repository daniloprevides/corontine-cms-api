<script>
  import { webcomponentDataStorage } from "../stores/webcomponents.store";
  import { userDataStorage } from "../stores/user-data.store";
  import { appDataStorage } from "../stores/app-flow.store";
  import menuService from "../services/menu.service";
  import baseService from "../services/base.service";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  import { fade } from "svelte/transition";
  const { open } = getContext("simple-modal");

  let menuData = null;
  let pagesData = null;
  let component = null;
  let ready = false;
  let menuItems = null;
  let bgColor = null;
  let requiredPermission = null;
  let requiredPermissionArray = null;
  let eventsConfigured = false;
  let id = null;

  const loadFields = async () => {
    //menuData = await menuService.getMenu();
    requiredPermissionArray = userDataStorage.get().scope;
    pagesData = await baseService.getListData("pages_api");
    const menuResponse = appDataStorage.getProperty("menu_data");
    const content = appDataStorage.getProperty("menu");
    menuResponse.content = content;
    menuData = menuResponse;
    bgColor = menuResponse.bgColor;
    id = menuResponse.id;
  };

  webcomponentDataStorage.subscribe(async ok => {
    if (ok) {
      await loadFields();
      ready = true;
    }
  });

  $: {
    //Setting components data
    if (component && menuData) {
      component.menuItems = menuData.content;
      console.log("Menu",component.menuItems);
      component.pageItems = pagesData;
      component.permissions = requiredPermissionArray.split(" ").sort();
      component.bgColor = bgColor;

      if (!eventsConfigured) {
        component.addEventListener("changed", async e => {
          menuItems = e.detail.items;
          bgColor = e.detail.bgColor;
          requiredPermission = e.detail.requiredPermission;
        });
        eventsConfigured = true;
      }
    }
  }

  const cancel = event => {
    window.history.back();
  };

  const save = async event => {
    try {
      if (!menuItems || !menuItems.length) return false;

      console.log(menuItems);
      const menu = await baseService.update("menu_api", id, {
        name: menuData.name,
        bgColor: bgColor,
        content: menuItems,
        id: menuData.id
      });
      const value = await userDataStorage.get();
      await userDataStorage.set(value);
      open(Message, {
        title: "Success",
        text: "Items sucessfully saved",
        showCancel: false,
        onOk: () => {}
      });
    } catch (error) {
      component.disabled = false;
      open(Message, {
        title: "Wrong Password",
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
</script>

{#if ready}
  <div class="form-page" in:fade="{{duration: 500}}">
    <h1>Menu Management</h1>
    <menu-manager bind:this={component} />

    <div class="form-page-footer">
      <button
        class="btn btn-primary"
        type="button"
        on:click={event => {
          save(event);
        }}>
        Save
      </button>
      <button
        class="btn btn-warning"
        type="button"
        on:click={event => {
          cancel(event);
        }}>
        Cancel
      </button>
    </div>

  </div>
{/if}
