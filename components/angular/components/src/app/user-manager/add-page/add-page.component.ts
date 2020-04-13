/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, NgZone, Input, SimpleChanges, ViewChild, ElementRef, OnInit, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PaginatedResponse } from 'src/app/base-components';


@Component({
  selector: 'addon-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  @Input() i18n = {
    ok: "ok",
    cancel: "cancel",
    add: "Add",
    title: "User",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    save: "save",
    required: "Item is required",
    notEqual: "Passwords don`t match",
    groups: "Groups",
    user: {
      email: "Email",
      name: "name"
    }
  };
  @Input() groups: Array<any> = [];
  formattedGroups:Array<any>;

  @Input() user = {
    name: null, email: null,password:null,  newPassword: null, confirmNewPassword: null, groups: []
  }
  @Input() showPassword = true;
  errors = {
    newPassword: {
      required: null
    },
    confirmNewPassword: {
      required: null,
      notequal: null
    },
    email: {
      required: null
    },
    name: {
      required: null
    }

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
      },
      email: {
        required: null
      },
      name: {
        required: null
      }
    }

    if (!this.user.name || (this.user.name && !this.user.name.length)){
      this.errors.name.required = this.i18n.required;
      isValid = false;
    }

    if (!this.user.email || (this.user.email && !this.user.email.length)){
      this.errors.email.required = this.i18n.required;
      isValid = false;
    }

    if (this.showPassword){
      if (!this.user.newPassword || (this.user.newPassword && !this.user.newPassword.length)){
        this.errors.newPassword.required = this.i18n.required;
        isValid = false;
      }

      if (!this.user.confirmNewPassword || (this.user.confirmNewPassword && !this.user.confirmNewPassword.length)){
        this.errors.confirmNewPassword.required = this.i18n.required;
        isValid = false;
      }

      if (this.user.confirmNewPassword != this.user.newPassword){
        this.errors.confirmNewPassword.notequal = this.i18n.notEqual;
        isValid = false;
      }
    }


    return isValid;
  }

  constructor(ngZone:NgZone, private dialog:NgbActiveModal) {

  }

  ngOnInit(): void {
    if (this.groups){
      this.formattedGroups = this.groups.map(g => {
        const userGroup = this.user.groups.find(ug => ug.id === g.id);
        if (userGroup){
          g.selected = true;
        }
        return g;
      });
    }
  }

  dismiss(msg: string|boolean){
    this.dialog.dismiss(msg);
  }

  async save(){
    const isValid = this.validate();
    if (isValid){
      this.user.password = this.user.newPassword;
      this.user.groups = this.formattedGroups.filter(g => g.selected);

      this.dialog.close(this.user);
    }
  }

}
