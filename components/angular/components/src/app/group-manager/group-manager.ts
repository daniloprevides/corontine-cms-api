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
import { GroupDTO } from './group-dto';
import { ScopeDTO } from './scope.dto';

@Component({
  selector: "group-manager",
  templateUrl: "./group-manager.html",
  styleUrls: ["./group-manager.scss"],
  entryComponents: [ListDataComponent],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GroupManagerComponent extends BaseComponents implements OnChanges {
  @ViewChild("form", { static: false }) form: ElementRef;

  @Output("add-item") addItemEvent = new EventEmitter();
  @Output("delete-item") deleteItemEvent = new EventEmitter();
  @Output("change-password") changePasswordEvent = new EventEmitter();

  @Input() columns: Array<ColumnsDTO>;
  @Input() data: PaginatedResponse<GroupDTO>;
  @Input() allscopes: PaginatedResponse<ScopeDTO>;

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

  items: Array<GroupDTO>;
  addIcon = faUserPlus;

  constructor(private zone: NgZone, protected modalService: NgbModal) {
    super();
  }

  async buildTable() {
    this.items = this.data.items;
  }

  async selected(group:GroupDTO){
    const modal = this.modalService
      .open(AddPageComponent, { ariaLabelledBy: "modal-basic-title" })
      modal.componentInstance.group = group;
      modal.componentInstance.scopes = this.allscopes.items;

      modal.result.then(
        async result => {
          this.saveItem(result);
        },
        reason => {}
      );

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
      modal.componentInstance.scopes = this.allscopes.items;

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
