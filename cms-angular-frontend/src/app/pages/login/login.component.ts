import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit{
  @ViewChild("loginComponent", { static: false }) loginComponent: ElementRef;
  username: any;
  pageTranslation : any;
  customElement: any;

  constructor(
    private defaultElementsService: DefaultElementsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notificationService: NotificationService,
    private translate: TranslateService
  ) {
    this.route.queryParamMap.subscribe(map => {
      this.username = map.get("username");
    });
  }

  forgotPasswordEventListener(){
    return () => {
      this.router.navigate(["forgot-password"], {
        queryParams: {
          username: this.username
        }
      });
    }
  }

  async ngOnInit() {
    this.pageTranslation = await this.translate.get("login").toPromise();
    const elementName = await this.defaultElementsService.getComponentByName(
      "login"
    );
    const element = document.createElement(elementName) as any;
    this.loginComponent.nativeElement.innerHTML = "";
    this.loginComponent.nativeElement.append(element);
    this.customElement = element;

    customElements.whenDefined(elementName).then(() => {

      element.i18n = this.pageTranslation;
      element.username = this.username;
      element.opened = true;

      element.addEventListener(
        "forgot-password",
       this.forgotPasswordEventListener()
      );

      element.addEventListener("login", async e => {
        const loginOk = await this.authService.login(e.detail.username,e.detail.password);
        const message = await this.translate.get("login.success_message").toPromise();
        if (loginOk){
          this.notificationService.info(message);
          this.router.navigate([this.defaultElementsService.getDefaultPage()]);
        }else{
          element.disabled = false;
        }

      });
    });
  }

}
