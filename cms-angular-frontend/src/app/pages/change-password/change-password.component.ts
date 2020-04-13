import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultElementsService } from 'src/app/services/default-elements.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import {TranslateService} from '@ngx-translate/core';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild("changePasswordComponent", { static: false })
  changePasswordComponent: ElementRef;
  username: any;
  pageTranslation: any;

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

  async ngOnInit() {
    this.pageTranslation = await this.translate.get("change-password").toPromise();
    const elementName = await this.defaultElementsService.getComponentByName(
      "change-password"
    );
    const element = document.createElement(elementName) as any;
    this.changePasswordComponent.nativeElement.innerHTML = "";
    this.changePasswordComponent.nativeElement.append(element);

    customElements.whenDefined(elementName).then(() => {
      element.username = this.username;
      element.i18n = this.pageTranslation;
      element.addEventListener("change-password-action", async e => {
        const info = e.detail;
        const userInfo = await this.authService.changePassword(
          info.username,
          info.password,
          info.newPassword,
          info.confirmNewPassword
        );
        if (userInfo){
          const message = await this.translate.get("auth.change_password.success_message").toPromise();
          this.router.navigate(["login"], {
            queryParams: {
              username: this.username
            }
          })
          this.notificationService.info(message);
        }
      });
    });
  }
}
