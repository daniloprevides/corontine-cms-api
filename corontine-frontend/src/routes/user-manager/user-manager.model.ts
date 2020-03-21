import { webcomponentDataStorage } from "../../stores/webcomponents.store";
import userService from "../../services/user.service";
import baseService from "../../services/base.service";
import { onMount } from "svelte";
import { BasePage } from "../page/base-page";
import { getContext } from "svelte";
const { open } = getContext("simple-modal");
import { push, pop, replace, location, querystring } from "svelte-spa-router";
import { fade } from "svelte/transition";

let userManagerComponent;
let component;

export class UserManagerModel extends BasePage {
  data: any;
  groups: Array<any>;
  columns = [
    {
      label: "User Name",
      field: "name",
      component: "label",
      properties: {}
    },
    {
      label: "User Email",
      field: "email",
      component: "label",
      properties: {}
    },
    {
      label: "Groups",
      field: "groups",
      component: "object",
      properties: {
        field: "name",
        isArray: true
      }
    }
  ];

  async loadData() {
    let promiseList = [];
    promiseList.push(userService.getAllUsers());
    promiseList.push(baseService.getListData("group_api", {}));

    const [usersResponse, groupsResponse] = await Promise.all(promiseList);

    this.data = {
      items: usersResponse,
      totalItems: usersResponse.length,
      itemCount: usersResponse.length,
      pageCount: 1
    };

    userManagerComponent.columns = this.columns;
    userManagerComponent.data = this.data;

    if (groupsResponse?.items?.length) {
      userManagerComponent.groups = groupsResponse.items;
    }
  }

  async bindEvents() {
    userManagerComponent.addEventListener("add-item", async event => {
      let user = event.detail;
      try {
        let userResponse = null;
        if (user.id) {
          userResponse = await userService.updateUser(user.id, user);
        } else {
          userResponse = await userService.addUser(user);
        }

        this.showMessage("Sucess", "User saved sucessfully", () => {});
        this.loadData();
      } catch (error) {
        this.showErrorMessage(error, () => {
        });
      }
    });

    userManagerComponent.addEventListener("delete-item", async event => {
      let user = event.detail;
      try {
        const deleted = await userService.deleteUser(user.id);
        this.showMessage("Sucess", "User sucessfully deleted", () => {
          this.loadData();
        });
      } catch (error) {
        this.showErrorMessage(error, () => {
        });
      }
    });

    userManagerComponent.addEventListener("change-password", async event => {
      let user = event.detail.user;
      try {
        const updatedUser = await userService.changeUserPassword(user.id,event.detail.newPassword, event.detail.confirmNewPassword);
        this.showMessage("Sucess", "Password sucessfully changed", () => {
          this.loadData();
        });
      } catch (error) {
        this.showErrorMessage(error, () => {
        });
      }


    })
  }

  async initialize() {
    //Loading groups and users
    await this.loadData();
    await this.bindEvents();
  }
}
const model = new UserManagerModel(component, open);

onMount(async () => {
  model.component = component;
  customElements.whenDefined("user-manager").then(d => {
    model.initialize();
  });
});
