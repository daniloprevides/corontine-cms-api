/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input, OnChanges, SimpleChanges, NgZone, Output, EventEmitter } from '@angular/core';
import { UserDTO } from '../user-dto';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'list-data-group',
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
    title: "Group",
    save: "save",
    required: "Item is required",
    delete: "delete",
    scopes: "Scopes",
    group: {
      description: "Description",
      name: "name"
    }
  };
  @Output() selected = new EventEmitter();
  @Output("change-password") changePasswordEvent  = new EventEmitter();
  @Output("delete-item") deleteItemEvent  = new EventEmitter();

  icon = faUsers;
  removeIcon = faTrashAlt;

  constructor(private zone:NgZone,protected modalService: NgbModal){

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
