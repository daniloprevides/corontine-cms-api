import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { Router, ActivatedRoute } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";
import { NotificationService } from "src/app/services/notification.service";
import { TranslateService } from "@ngx-translate/core";
import { PageService } from "src/app/services/page.service";
import { ModelService } from "src/app/services/model.service";
import { UserManagerComponentInterface } from "./user-manager.component.interface";
import { DialogService } from "src/app/services/dialog.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-manager",
  templateUrl: "./user-manager.component.html",
  styleUrls: ["./user-manager.component.scss"]
})
export class UserManagerComponent implements OnInit {
  dataLoaded = false;
  @ViewChild("form", { static: false }) form: ElementRef;
  columns = [
    {
      label: "User Name",
      field: "name",
      detail: {
        component: "label",
        properties: {}
      }
    },
    {
      label: "User Email",
      field: "email",
      detail: {
        component: "label",
        properties: {}
      }
    },
    {
      label: "Groups",
      field: "groups",
      detail: {
        component: "object",
        properties: {
          field: "name",
          isArray: true
        }
      }
    }
  ];

  constructor(
    private defaultElementsService: DefaultElementsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private userService: UserService,
  ) {}

  async loadData(element: UserManagerComponentInterface) {
    const promiseList = [];

    promiseList.push(this.userService.getAll("user_api"));
    promiseList.push(this.userService.getAll("group_api"));

    const [usersResponse, groupsResponse] = await Promise.all(promiseList);

    const data = {
      items: usersResponse,
      totalItems: usersResponse.length,
      itemCount: usersResponse.length,
      pageCount: 1
    };
    const translation = await this.translate.get("user.columns").toPromise();
    this.columns[0].label = translation.name;
    this.columns[1].label = translation.description;
    this.columns[2].label = translation.group;

    const translationUser = await this.translate.get("user_manager").toPromise();

    element.columns = this.columns;
    element.data = data;
    element.i18n = translationUser;

    if (groupsResponse && groupsResponse.items && groupsResponse.items.length) {
      element.groups = groupsResponse.items;
    }
  }

  async bindEvents(element) {
    element.addEventListener("add-item", async event => {
      const user = event.detail;
      const message = await this.translate.get("user.message").toPromise();
      try {
        let userResponse = null;
        if (user.id) {
          userResponse = await this.userService.update(
            "user_api",
            user.id,
            user
          );
        } else {
          userResponse = await this.userService.add("user_api", user);
        }

        this.notificationService.info(message.success);
        this.loadData(element);
      } catch (error) {
        this.notificationService.error(message.error);
        throw error;
      }
    });

    element.addEventListener("delete-item", async event => {
      const user = event.detail;
      const message = await this.translate.get("user.message").toPromise();
      try {
        const deleted = await this.userService.delete(
          "user_api",
          user.id,
          user
        );
        this.notificationService.info(message.deleted);
        this.loadData(element);
      } catch (error) {
        this.notificationService.error(message.error);
        throw error;
      }
    });

    element.addEventListener("change-password", async event => {
      const user = event.detail.user;
      const message = await this.translate.get("user.message").toPromise();

      try {
        const updatedUser = await this.userService.changeUserPassword(
          user.id,
          event.detail.newPassword,
          event.detail.confirmNewPassword
        );
        this.notificationService.info(message.success);
        this.loadData(element);
      } catch (error) {
        this.notificationService.error(message.error);
        throw error;
      }
    });
  }

  async populate() {
    this.form.nativeElement.innerHTML = "";
    const elementName = await this.defaultElementsService.getComponentByName(
      "user-manager"
    );
    const element = (document.createElement(
      elementName
    ) as unknown) as UserManagerComponentInterface;
    this.form.nativeElement.append(element);
    customElements.whenDefined(elementName).then(async () => {
      await this.loadData(element);
      await this.bindEvents(element);
    });
  }

  async ngOnInit() {
    setTimeout(async () => {
      await this.populate();
      this.dataLoaded = true;
    });
  }
}
