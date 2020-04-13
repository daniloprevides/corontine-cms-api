import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultElementsService } from 'src/app/services/default-elements.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { GroupManagerComponentInterface } from './group-manager.component.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.scss']
})
export class GroupManagerComponent implements OnInit {
  dataLoaded = false;
  @ViewChild("form", { static: false }) form: ElementRef;
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
  ];
  constructor(
    private defaultElementsService: DefaultElementsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private userService: UserService,
    private modelService: ModelService,
  ) {}

  async loadData(element: GroupManagerComponentInterface) {
    const promiseList = [];
    promiseList.push(this.userService.getAll("group_api"));
    promiseList.push(this.modelService.getAll("scopes_api"));

    const [groupsResponse, scopesResponse] = await Promise.all(promiseList);
    const translation = await this.translate.get("group.columns").toPromise();
    const translationGroup = await this.translate.get("group_manager").toPromise();
    this.columns[0].label = translation.name;
    this.columns[1].label = translation.description;
    element.columns = this.columns;
    element.data = groupsResponse;
    element.i18n = translationGroup;

    if (scopesResponse){
      element.allscopes = scopesResponse;
    }
  }

  async bindEvents(element) {
    element.addEventListener("add-item", async event => {
      const group = event.detail;
      const message = await this.translate.get("group.message").toPromise();
      try {
        let groupResponse = null;
        if (group.id) {
          groupResponse = await this.userService.update(
            "group_api",
            group.id,
            group
          );
        } else {
          groupResponse = await this.userService.add("group_api", group);
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
      const message = await this.translate.get("group.message").toPromise();
      try {
        const deleted = await this.userService.delete(
          "group_api",
          user.id,
          user
        );
        this.loadData(element);
        this.notificationService.info(message.deleted);
      } catch (error) {
        this.notificationService.error(message.error);
        throw error;
      }
    });

  }

  async populate() {
    this.form.nativeElement.innerHTML = "";
    const elementName = await this.defaultElementsService.getComponentByName(
      "group-manager"
    );
    const element = (document.createElement(
      elementName
    ) as unknown) as GroupManagerComponentInterface;
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
