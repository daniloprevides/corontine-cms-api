/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";
import { BaseComponents, PaginatedResponse } from "../base-components";
import { ColumnsDTO } from "./columns.dto";
import { UserDTO } from "./user-dto";
import { ListDataComponent } from "./list-data/list-data.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddPageComponent } from "./add-page/add-page.component";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { ChangePasswordComponent } from '../change-password/change-password';

@Component({
  selector: "user-manager",
  templateUrl: "./user-manager.html",
  styleUrls: ["./user-manager.scss"],
  entryComponents: [ListDataComponent,ChangePasswordComponent],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserManagerComponent extends BaseComponents implements OnChanges {
  @ViewChild("form", { static: false }) form: ElementRef;

  @Output("add-item") addItemEvent = new EventEmitter();
  @Output("delete-item") deleteItemEvent = new EventEmitter();
  @Output("change-password") changePasswordEvent = new EventEmitter();

  @Input() columns: Array<ColumnsDTO>;
  @Input() data: PaginatedResponse;
  @Input() groups: PaginatedResponse;
  // eslint-disable-next-line @typescript-eslint/camelcase
  @Input() i18n = {
    message_delete: "Are you sure you want to delete this item?",
    ok: "ok",
    cancel: "cancel",
    add: "Add",
    title: "User",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    delete: "delete",
    groups: "Groups",
    changePassword: "change password",
    save: "save",
    required: "Item is required",
    notEqual: "Passwords don`t match"
  };

  items: Array<UserDTO>;
  addIcon = faUserPlus;

  constructor(private zone: NgZone, protected modalService: NgbModal) {
    super();
  }

  async buildTable() {
    this.items = this.data.items;
  }

  async selected(user:UserDTO){
    const modal = this.modalService
      .open(AddPageComponent, { ariaLabelledBy: "modal-basic-title" })
      modal.componentInstance.groups = this.groups;
      modal.componentInstance.user = user;
      modal.componentInstance.showPassword = false;

      modal.result.then(
        async result => {
          this.saveItem(result);
        },
        reason => {}
      );

  }

  async changePasswordItem(item:any){
    this.changePasswordEvent.emit(item);
  }

  async delete(item:any){
    this.deleteItemEvent.emit(item);
  }


  async saveItem(user:UserDTO){
    this.addItemEvent.emit(user);
  }

  async add() {
    const modal = this.modalService
      .open(AddPageComponent, { ariaLabelledBy: "modal-basic-title" })
      modal.componentInstance.groups = this.groups;

      modal.result.then(
        async result => {
          this.saveItem(result);
        },
        reason => {}
      );
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (this.columns.length && this.data) {
      await this.buildTable();
    }
  }
}
