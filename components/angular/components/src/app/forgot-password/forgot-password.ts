/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { BaseComponents } from "../base-components";

@Component({
  selector: "forgot-password",
  templateUrl: "./forgot-password.html",
  styleUrls: ["./forgot-password.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ForgotPasswordComponent extends BaseComponents implements OnChanges {
  @Output("forgot-password-action") changePasswordEvent = new EventEmitter();
  @ViewChild("main", {static: false}) main:ElementRef;
  @Input() username = "";
  @Input() i18n = {
    page: {
      header: {
        title: "Forgot Your Password",
      },
      form: {
        username: "Username",
        submit: "Ok",
        cancel: "Cancel",
      },
      errorMessage: {
        required: "Field is required",
      }
    }
  };
  f = {
    username: {
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
    if (this.username === null || (this.username !== null && this.username.trim() === "")){
      isValid = false;
      this.f.username.errors = {required: true};
    }
    return isValid;
  }

  doSubmit(){
    this.submitted = true;
    this.zone.run(() => {
      const isValid = this.validate();
      if (isValid){
        this.changePasswordEvent.emit({username: this.username});
      }
    });
  }

  checkSubmit(event){
    if (event.key === "Enter") {
      this.doSubmit();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
