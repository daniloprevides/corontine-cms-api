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
import { MenuDTO } from './menu.dto';

@Component({
  selector: "header-data",
  templateUrl: "./header.html",
  styleUrls: ["./header.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent extends BaseComponents implements OnChanges {
  @Output("item-clicked") itemSelectedEvent = new EventEmitter();
  @Input() values = new Array<MenuDTO>();
  @Input() name = 'APP';

  constructor(private zone: NgZone) {
    super();
  }

  validate(){
    const isValid = true;

    return isValid;
  }

  leave(myDrop){
    myDrop.close();
  }

  async open(myDrop){
    console.debug(myDrop);
    await myDrop.open();
  }

  select(item:MenuDTO){
    const isValid = this.validate();
    if (isValid){
      this.itemSelectedEvent.emit(item);
    }
  }

  checkSubmit(event, item:MenuDTO){
    if (event.key === "Enter") {
      this.select(item);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
