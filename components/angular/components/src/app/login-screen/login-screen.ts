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
  selector: "login-screen",
  templateUrl: "./login-screen.html",
  styleUrls: ["./login-screen.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginScreenComponent extends BaseComponents implements OnChanges {
  @Output("login") loginEvent = new EventEmitter();
  @Output("forgot-password") changePasswordEvent = new EventEmitter();
  @Input() username = "";
  @Input() i18n = {
    "success_message": "Login Sucessfuly",
    page: {
      header: {
        title: "CMS",
        description: "Access to system"
      },
      form: {
        title: "Log in",
        username: "Username",
        password: "Password",
        submit: "Log in",
        forgotPassword: "Forgot password",
      },
      errorMessage: {
        required: "Field is required",
        title: "Incorrect username or password",
        message:
          "Check that you have entered the correct username and password and try again."
      }
    }
  };
  password:string;
  f = {
    username: {
      errors: null
    },
    password: {
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

    return isValid;

  }

  login(){
    this.submitted = true;
    const isValid = this.validate();
    if (isValid){
      this.loginEvent.emit({username: this.username, password: this.password});
    }
  }

  checkSubmit(event){
    if (event.key === "Enter") {
      this.login();
    }
  }

  changePassword(){
    this.changePasswordEvent.emit({username: this.username});
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
