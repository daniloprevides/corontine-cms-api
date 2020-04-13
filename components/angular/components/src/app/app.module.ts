import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InputDataComponent } from "./input-data/input-data";
import { CheckboxDataComponent } from "./checkbox-data/checkbox-data";
import { SelectDataComponent } from "./select-data/select-data";
import { TitleDataComponent } from "./title-data/title-data";
import { AgGridModule } from "ag-grid-angular";
import { TableDataComponent } from "./table-data/table-data";
import { LabelCellRendererComponent } from "./table-data/label-cell-renderer/label-cell-renderer.component";
import { ObjectCellRendererComponent } from "./table-data/object-cell-renderer/object-cell-renderer.component";
import { PageViewComponent } from "./page-view/page-view";
import { AddPageComponent } from './table-data/add-page/add-page.component';
import { SelectStaticDataComponent } from './select-static-data/select-static-data';
import { LoginScreenComponent } from './login-screen/login-screen';
import { ForgotPasswordComponent } from './forgot-password/forgot-password';
import { ChangePasswordComponent } from './change-password/change-password';
import { HeaderComponent } from './header/header';
import { PageBuilderComponent } from './page-builder/page-builder';
import { ResizableModule } from 'angular-resizable-element';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DynamicComponentComponent } from './page-builder/dynamic-component/dynamic-component.component';
import { ClonePipe } from './clone.pipe';
import { UserManagerComponent } from './user-manager/user-manager';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { ListDataComponent } from './user-manager/list-data/list-data.component';
import { AddPageComponent as AddPageComponentUser } from './user-manager/add-page/add-page.component';
import { ChangePasswordComponent as UserChangePasswordComponent } from './user-manager/change-password/change-password.component';
import { AddPageComponent as AddPageComponentGroup } from './group-manager/add-page/add-page.component';
import { GroupManagerComponent } from './group-manager/group-manager';
import { ListDataComponent as ListDataComponentGroup} from './group-manager/list-data/list-data.component';


@NgModule({
  entryComponents: [
    InputDataComponent,
    CheckboxDataComponent,
    SelectDataComponent,
    TitleDataComponent,
    TableDataComponent,
    PageViewComponent,
    SelectStaticDataComponent,
    LoginScreenComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HeaderComponent,
    PageBuilderComponent,
    UserManagerComponent,
    ListDataComponent,
    UserChangePasswordComponent,
    AddPageComponentUser,
    AddPageComponentGroup,
    ListDataComponentGroup
  ],
  declarations: [
    InputDataComponent,
    CheckboxDataComponent,
    SelectDataComponent,
    TitleDataComponent,
    TableDataComponent,
    LabelCellRendererComponent,
    ObjectCellRendererComponent,
    PageViewComponent,
    AddPageComponent,
    SelectStaticDataComponent,
    LoginScreenComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HeaderComponent,
    PageBuilderComponent,
    DynamicComponentComponent,
    ClonePipe,
    ListDataComponent,
    UserManagerComponent,
    UserChangePasswordComponent,
    AddPageComponentUser,
    AddPageComponentGroup,
    GroupManagerComponent,
    ListDataComponentGroup
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ResizableModule,
    AgGridModule.withComponents([]),
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.registerItem("input-data", InputDataComponent);
    this.registerItem("checkbox-data", CheckboxDataComponent);
    this.registerItem("select-data", SelectDataComponent);
    this.registerItem("title-data", TitleDataComponent);
    this.registerItem("table-data", TableDataComponent);
    this.registerItem("page-view", PageViewComponent);
    this.registerItem("select-static-data", SelectStaticDataComponent);
    this.registerItem("login-screen", LoginScreenComponent);
    this.registerItem("forgot-password", ForgotPasswordComponent);
    this.registerItem("change-password", ChangePasswordComponent);
    this.registerItem("header-data", HeaderComponent);
    this.registerItem("page-builder", PageBuilderComponent);
    this.registerItem("user-manager", UserManagerComponent);
    this.registerItem("group-manager", GroupManagerComponent);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngDoBootstrap() {}

  registerItem(name: string, item: any) {
    const el = createCustomElement(item, {
      injector: this.injector
    });
    customElements.define(name, el as any);
  }

  registerItemAsStrategy(name: string, item: any) {
    const strategyFactory = new ElementZoneStrategyFactory(item, this.injector);
    const el = createCustomElement(item, {
      injector: this.injector, strategyFactory
    });
    customElements.define(name, el as any);
  }

}
