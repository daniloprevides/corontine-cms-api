import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ComponentsDTO } from '../components.dto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild("container",{static:true}) container:ElementRef;
  @ViewChild("confirmation", { static: false }) confirmation: ElementRef;
  @Input() component:ComponentsDTO;
  @Input() i18n = {"delete_message": "Are you sure you want to delete this item?", ok: "OK", cancel: "Cancel"};
  @Output("remove-item") removeItemEmitter = new EventEmitter();
  @Output("select-item") selectItemEmitter = new EventEmitter();

  constructor(protected modalService: NgbModal){}

  async deleteItem(item:ComponentsDTO){
    try {
      const result = await this.modalService.open(this.confirmation).result;
      if (result) this.removeItemEmitter.emit(item.uniqueId);
    }catch(no){
      console.debug(`Answer ` + no);
    }
  }

  async selectItem(item:ComponentsDTO){
    item.selected = !item.selected;
    this.selectItemEmitter.emit(item.uniqueId);
  }

  ngOnInit(): void {
    const element = document.createElement(this.component.label);
    this.container.nativeElement.append(element);
    this.component.element = element;
  }

}
