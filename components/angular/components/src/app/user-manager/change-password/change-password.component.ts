/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  NgZone,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter
} from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "addon-change-password",
  templateUrl: "./change-password.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent {
  @Input() i18n = {
    message_delete: "Are you sure you want to delete this item?",
    ok: "ok",
    cancel: "cancel",
    add: "Add",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    save: "save",
    required: "Item is required",
    notEqual: "Passwords don`t match"
  };
  errors = {
    newPassword: {
      required: null
    },
    confirmNewPassword: {
      required: null,
      notequal: null
    }
  }
  newPassword:string;
  confirmNewPassword:string;
  constructor(ngZone: NgZone, private dialog: NgbActiveModal) {}

  dismiss(msg: string | boolean) {
    this.dialog.dismiss(msg);
  }

  validate(){
    let isValid = true;
    this.errors = {
      newPassword: {
        required: null
      },
      confirmNewPassword: {
        required: null,
        notequal: null
      }
    }


    if (!this.newPassword || (this.newPassword && !this.newPassword.length)){
      this.errors.newPassword.required = this.i18n.required;
      isValid = false;
    }

    if (!this.confirmNewPassword || (this.confirmNewPassword && !this.confirmNewPassword.length)){
      this.errors.confirmNewPassword.required = this.i18n.required;
      isValid = false;
    }

    if (this.confirmNewPassword != this.newPassword){
      this.errors.confirmNewPassword.notequal = this.i18n.notEqual;
      isValid = false;
    }


    return isValid;
  }

  async save() {
    const isValid = this.validate();
    if (isValid){
      this.dialog.close({
        newPassword: this.newPassword,
        confirmNewPassword: this.confirmNewPassword
      });
    }
  }
}
