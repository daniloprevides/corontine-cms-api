/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, NgZone, Input, SimpleChanges, ViewChild, ElementRef, OnInit, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PaginatedResponse } from 'src/app/base-components';
import { ScopeDTO } from '../scope.dto';


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
  @Input() scopes: Array<ScopeDTO> = [];
  formattedScopes:Array<ScopeDTO>;

  @Input() group = {
    name: null, description: null, scopes: []
  }

  errors = {
    name: {
      required: null
    }

  }

  validate(){
    let isValid = true;
    this.errors = {
      name: {
        required: null
      }
    }

    if (!this.group.name || (this.group.name && !this.group.name.length)){
      this.errors.name.required = this.i18n.required;
      isValid = false;
    }

    return isValid;
  }

  constructor(ngZone:NgZone, private dialog:NgbActiveModal) {

  }

  ngOnInit(): void {
    if (this.scopes){
      this.formattedScopes = this.scopes.map(g => {
        const userGroup = this.group.scopes.find(ug => ug.id === g.id);
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
      this.group.scopes = this.formattedScopes.filter(g => g.selected);
      this.dialog.close(this.group);
    }
  }

}
