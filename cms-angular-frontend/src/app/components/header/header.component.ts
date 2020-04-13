import { Component, OnInit, ViewChild, ElementRef, OnDestroy, NgZone } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { MenuService } from "src/app/services/menu.service";
import { PageService } from "src/app/services/page.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: "cms-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild("headerComponent", { static: false }) headerComponent: ElementRef;
  isLoggedIn = false;
  customElement: any;
  loginSubscription: Subscription;

  constructor(
    private defaultElementsService: DefaultElementsService,
    private menuService: MenuService,
    private pagesService: PageService,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private zone: NgZone,
  ) {}

  ngOnDestroy(){
    this.loginSubscription.unsubscribe();
  }

  async buildScreen(){
    this.isLoggedIn = this.authService.isLoggedIn();
    const elementName = await this.defaultElementsService.getComponentByName(
      "header"
    );
    const name = await this.translate.get("name").toPromise();

    const element = document.createElement(elementName) as any;
    this.headerComponent.nativeElement.innerHTML = "";
    this.headerComponent.nativeElement.append(element);
    this.customElement = element;

    customElements.whenDefined(elementName).then(async () => {
      if (this.isLoggedIn) {
        element.values = await this.menuService.getMenu();
        element.name = name;
        element.addEventListener(
          "item-clicked",
          async event => {
            const menuItem = event.detail;
            const pageId = menuItem.idPage;
            const page = await this.pagesService.getPageById(pageId);
            if (menuItem.action) {
              return await menuItem.action();
            } else {
              if (menuItem.route) {
                this.router.navigate([menuItem.route]);
              } else {
                this.router.navigate([`/page/${page.name}`]);
              }
            }
          }
        );
      }
    });
  }

  async ngOnInit() {
    this.loginSubscription = this.authService.loginSubscription.subscribe((isLoggedin: boolean) => {
      this.isLoggedIn = isLoggedin;
      if (this.isLoggedIn){
        this.buildScreen();
      }
      this.zone.run(() => {
        this.isLoggedIn = isLoggedin;
      })
    })

    await this.buildScreen();

  }
}
