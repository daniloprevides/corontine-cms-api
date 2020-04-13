import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
  ErrorHandler
} from "@angular/core";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppInitializerService } from "./services/app-initializer.service";
import { StorageService } from "./services/storage.service";
import { CMSErrorHandler } from "./cms-error-handler";
import { NotificationService } from "./services/notification.service";
import { LoginComponent } from "./pages/login/login.component";
import { AuthService } from "./auth/auth.service";
import { DefaultElementsService } from "./services/default-elements.service";
import { WebComponentsService } from "./services/web-components.service";
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DialogService } from "./services/dialog.service";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PageComponent } from './pages/page/page.component';
import { HomeComponent } from './pages/home/home.component';
import { TokenInterceptor } from './auth/interceptors/http-interceptor';
import { HeaderComponent } from './components/header/header.component';
import { MenuService } from './services/menu.service';
import { PageService } from './services/page.service';
import { ModelService } from './services/model.service';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { UserService } from './services/user.service';
import { GroupManagerComponent } from './pages/group-manager/group-manager.component';
import { PagesManagerComponent } from './pages/pages-manager/pages-manager.component';
import { PageAddComponent } from './pages/pages-manager/page-add/page-add.component';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';
import { AddonManagerComponent } from './pages/addon-manager/addon-manager.component';
import { AddonService } from './services/addon.service';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from "angular-notifier";

export function initializeApp(appInitService: AppInitializerService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationDialogComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    PageComponent,
    HomeComponent,
    HeaderComponent,
    UserManagerComponent,
    GroupManagerComponent,
    PagesManagerComponent,
    PageAddComponent,
    MenuManagerComponent,
    AddonManagerComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NotifierModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AppInitializerService,
    AuthService,
    StorageService,
    DefaultElementsService,
    WebComponentsService,
    DialogService,
    MenuService,
    PageService,
    ModelService,
    UserService,
    AddonService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [
        AppInitializerService,
        HttpClientModule,
        StorageService,
        NotificationService,
        WebComponentsService
      ],
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: CMSErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
