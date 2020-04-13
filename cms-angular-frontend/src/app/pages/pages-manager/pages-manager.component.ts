import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';
import { DefaultElementsService } from 'src/app/services/default-elements.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { PagesManagerComponentInterface } from './pages-manager.component.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-manager',
  templateUrl: './pages-manager.component.html',
  styleUrls: ['./pages-manager.component.scss']
})
export class PagesManagerComponent implements OnInit {
  dataLoaded = false;
  @ViewChild("form", { static: false }) form: ElementRef;

  constructor(
    private defaultElementsService: DefaultElementsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private modelService: ModelService,
    private router: Router,
  ) {}

  async loadData(element: PagesManagerComponentInterface) {
    const promiseList = [];
    promiseList.push(this.modelService.getAll("pages_api"));

    const [pagesResponse] = await Promise.all(promiseList);
    const translation = await this.translate.get("pages").toPromise();

    element.data = pagesResponse;
  }

  async bindEvents(element) {
    element.addEventListener("selected", async event => {
      const pageDetail = event.detail;
      const route = await this.defaultElementsService.getComponentByName("pages-add-route");
      this.router.navigate([`${route}/${pageDetail.id}`])
    });

    element.addEventListener("new-item", async event => {
      const route = await this.defaultElementsService.getComponentByName("pages-add-route");
      this.router.navigate([`${route}`])
    });

    element.addEventListener("delete", async event => {
      const page = event.detail;
      const message = await this.translate.get("pages.message").toPromise();
      try {
        const deleted = await this.modelService.delete(
          "pages_api",
          page.id,
          page
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
      "pages-manager"
    );
    const element = (document.createElement(
      elementName
    ) as unknown) as PagesManagerComponentInterface;
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
