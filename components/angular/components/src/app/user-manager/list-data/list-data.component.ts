/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input, OnChanges, SimpleChanges, NgZone, Output, EventEmitter } from '@angular/core';
import { UserDTO } from '../user-dto';

import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit, OnChanges {
  @Input() items: Array<UserDTO>;
  // eslint-disable-next-line @typescript-eslint/camelcase
  @Input() i18n = {
    message_delete: "Are you sure you want to delete this item?",
    ok: "ok",
    cancel: "cancel",
    add: "Add",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    delete: "delete",
    changePassword: "change password",
    save: "save",
    required: "Item is required",
    notEqual: "Passwords don`t match"
  };
  @Output() selected = new EventEmitter();
  @Output("change-password") changePasswordEvent  = new EventEmitter();
  @Output("delete-item") deleteItemEvent  = new EventEmitter();

  icon = faUserTie;

  constructor(private zone:NgZone,protected modalService: NgbModal){

  }

  changePassword(user:UserDTO){
    this.modalService.open(ChangePasswordComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result){
        this.changePasswordEvent.emit({user: user, ...result});
      }
    }, (reason) => {
    });
  }

  delete(content,user:UserDTO){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.deleteItemEvent.emit(user);
    }, (reason) => {
    });
  }

  select(user:UserDTO){
    this.selected.emit(user);
  }

  ngOnInit(): void {
    console.debug("started");
  }

  ngOnChanges(changes:SimpleChanges){
    console.debug("Changes", changes);
    this.items = changes.items.currentValue;
    this.zone.run(() => {
      this.items = changes.items.currentValue;
    });
  }

}
