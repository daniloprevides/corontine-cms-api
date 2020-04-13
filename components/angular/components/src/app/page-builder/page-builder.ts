/* eslint-disable @typescript-eslint/camelcase */
import {
  ViewEncapsulation,
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

import { BaseComponents } from "../base-components";
import { ComponentsDTO } from "./components.dto";
import { ComponentDraggableItemDTO } from "./component-draggable-item.dto";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "page-builder",
  templateUrl: "./page-builder.html",
  styleUrls: ["./page-builder.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageBuilderComponent extends BaseComponents implements OnChanges {
  @ViewChild("form", { static: false }) form: ElementRef;
  @ViewChild("componentsContainer", { static: false })
  componentsContainer: ElementRef;
  @ViewChild("mainContainer", { static: false }) mainContainer: ElementRef;
  @ViewChild("propertiesContainer", { static: false })
  propertiesContainer: ElementRef;
  @Input() components: Array<ComponentsDTO> = [];

  draggableComponents: Array<ComponentDraggableItemDTO> = [];
  pageComponentsList: Array<ComponentDraggableItemDTO> = [];

  currentItem: ComponentDraggableItemDTO;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.components) {
      this.draggableComponents = changes.components.currentValue.map(
        (c: ComponentsDTO) => {
          const element = document.createElement(c.label).innerHTML;
          const item = new ComponentDraggableItemDTO();
          item.content = element;
          item.data = c;
          return item;
        }
      );
    }
  }

  selectItem(id: string) {
    // alert(id);
    this.currentItem = this.pageComponentsList.find(
      p => p.data.uniqueId === id
    );
  }

  removeItem(id: string) {
    alert(id);
    console.debug(this.pageComponentsList);
    this.pageComponentsList = this.pageComponentsList.filter(
      c => c.data.uniqueId !== id
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );


      //Clonning and adding unique IDs to items
      this.pageComponentsList = this.pageComponentsList.map(i => {
        const item = Object.assign({},i);
        item.data.uniqueId = Math.random().toString(36).substr(2, 9)
        return item;
      });

      // const item = (event.container.data[event.currentIndex] as any).data;

      //Find new item in array
      // const register = this.pageComponentsList[this.pageComponentsList.length -1];
      // const newItem = Object.assign({}, item);
      // newItem.uniqueId = Math.random().toString(36).substr(2, 9);
      // register.data = newItem;

      // console.debug("Item", register.data);
    }

    //this.applyDefaultValues(event);
  }

  applyDefaultValues(event: any) {
    const item = (event.container.data[event.currentIndex] as any).data;
    const element = event.item.element.nativeElement;
    console.debug(`Adding component ${item.label}`);
    customElements.whenDefined(item.label).then(() => {
      for (const attribute of item.attributes) {
        const value = attribute.defaultValue;
        if (value != null) {
          console.debug(`Applying attribute ${attribute.name}`, value);
          element[attribute.name] = value;
        }
      }
      console.debug(item);
    });
  }
}
