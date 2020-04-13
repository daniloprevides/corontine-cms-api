import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultElementsService } from "src/app/services/default-elements.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild("forgotPasswordComponent", { static: false }) forgotPasswordComponent: ElementRef;
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
    this.pageTranslation = await this.translate.get("forgot-password").toPromise();
    const elementName = await this.defaultElementsService.getComponentByName(
      "forgot-password"
    );
    const element = document.createElement(elementName) as any;
    this.forgotPasswordComponent.nativeElement.innerHTML = "";
    this.forgotPasswordComponent.nativeElement.append(element);

    customElements.whenDefined(elementName).then(() => {
      element.username = this.username;
      element.i18n = this.pageTranslation;

      element.addEventListener("forgot-password-action", async e => {
        const responseOk = await this.authService.forgotPassword(e.detail.username);
        if (responseOk){
          const message = await this.translate.get("forgot_password.success_message").toPromise();
          this.router.navigate([this.defaultElementsService.getDefaultPage()]);
          this.notificationService.info(message);
        }
      });
    });
  }

}
