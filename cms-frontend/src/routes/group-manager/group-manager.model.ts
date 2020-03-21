import { webcomponentDataStorage } from "../../stores/webcomponents.store";
import groupService from "../../services/group.service";
import baseService from "../../services/base.service";
import { onMount } from "svelte";
import { BasePage } from "../page/base-page";
import { getContext } from "svelte";
const { open } = getContext("simple-modal");
import { fade } from "svelte/transition";
import { push, pop, replace, location, querystring } from "svelte-spa-router";

let groupManagerComponent;
let component;

export class GroupManagerModel extends BasePage {
  data: any;
  groups: Array<any>;
  columns = [
    {
      label: "Group Name",
      field: "name",
      component: "label",
      properties: {}
    },
    {
      label: "Group Description",
      field: "description",
      component: "label",
      properties: {}
    },
    // {
    //   label: "Scopes",
    //   field: "scopes",
    //   component: "object",
    //   properties: {
    //     field: "name",
    //     isArray: true
    //   }
    // }
  ];

  async loadData() {
    let promiseList = [];
    promiseList.push(baseService.getListData("group_api", {}));
    promiseList.push(baseService.getListData("scopes_api", {}));

    const [groupsResponse, scopesResponse] = await Promise.all(promiseList);

    groupManagerComponent.columns = this.columns;
    groupManagerComponent.data = groupsResponse;

    if (groupsResponse?.items?.length) {
      groupManagerComponent.scopes = scopesResponse.items;
    }
  }

  async bindEvents() {
    groupManagerComponent.addEventListener("add-item", async event => {
      let group = event.detail;
      try {
        let groupResponse = null;
        if (group.id) {
          groupResponse = await groupService.updateGroup(group.id, group);
        } else {
          groupResponse = await groupService.addGroup(group);
        }

        this.showMessage("Sucess", "Group saved sucessfully", () => {});
        this.loadData();
      } catch (error) {
        this.showErrorMessage(error, () => {
        });
      }
    });

    groupManagerComponent.addEventListener("delete-item", async event => {
      let group = event.detail;
      try {
        const deleted = await groupService.deleteGroup(group.id);
        this.showMessage("Sucess", "Group sucessfully deleted", () => {
          this.loadData();
        });
      } catch (error) {
        this.showErrorMessage(error, () => {
        });
      }
    });
   
  }

  async initialize() {
    //Loading groups and users
    await this.loadData();
    await this.bindEvents();
  }
}
const model = new GroupManagerModel(component, open);

onMount(async () => {
  model.component = component;
  customElements.whenDefined("group-manager").then(d => {
    model.initialize();
  });
});
