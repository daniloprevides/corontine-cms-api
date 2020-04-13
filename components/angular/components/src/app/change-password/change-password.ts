/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { BaseComponents } from "../base-components";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.html",
  styleUrls: ["./change-password.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChangePasswordComponent extends BaseComponents implements OnChanges {
  @Output("change-password-action") passwordEvent = new EventEmitter();
  @Input() username = "";
  @Input() i18n = {
    page: {
      header: {
        title: "Change Password",
      },
      form: {
        username: "Username",
        password: "Password",
        newPassword: "New Password",
        confirmNewPassword: "Confirm New Password",
        submit: "Change Password",
      },
      errorMessage: {
        required: "Field is required",
        match: "The passwords must be the same"
      }
    }
  };
  password:string;
  newPassword:string;
  confirmNewPassword:string;
  f = {
    username: {
      errors: null
    },
    password: {
      errors: null
    },
    newPassword: {
      errors: null
    },
    confirmNewPassword: {
      errors: null
    }
  };
  submitted = false;
  loading = false;

  constructor(private zone: NgZone) {
    super();
  }

  validate(){
    let isValid = true;
    this.f.username.errors = null;
    this.f.password.errors = null;
    if (this.username == null || (this.username && !this.username.length)){
      isValid = false;
      this.f.username.errors = {required: true};
    }
    if (this.password == null || (this.password && !this.password.length)){
      isValid = false;
      this.f.password.errors = {required: true};
    }

    if (this.newPassword == null || (this.newPassword && !this.newPassword.length)){
      isValid = false;
      this.f.newPassword.errors = {required: true};
    }

    if (this.confirmNewPassword == null || (this.confirmNewPassword && !this.confirmNewPassword.length)){
      isValid = false;
      this.f.confirmNewPassword.errors = {required: true};
    }

    if (this.confirmNewPassword !== this.newPassword){
      isValid = false;
      this.f.confirmNewPassword.errors = {match: true};
    }

    return isValid;

  }

  changePasssword(){
    this.submitted = true;
    const isValid = this.validate();
    if (isValid){
      this.passwordEvent.emit({username: this.username, password: this.password, newPassword: this.newPassword, confirmNewPassword: this.confirmNewPassword});
    }
  }

  checkSubmit(event){
    if (event.key === "Enter") {
      this.changePasssword();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
