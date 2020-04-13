import { Component, OnInit } from "@angular/core";
import { ICellRenderer } from "ag-grid-community";

@Component({
  selector: "addon-object-cell-renderer",
  templateUrl: "./object-cell-renderer.component.html",
  styleUrls: ["./object-cell-renderer.component.scss"]
})
export class ObjectCellRendererComponent implements ICellRenderer {
  params: any;

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  getValue() {
    if (this.params.value && this.params.value.map){
      return this.params.value.map(p => p[this.params.field]);
    }

    return [];
    // if (this.params.params && this.params.params.isArray) {
    //   if (this.params.data[this.params.value].map) {
    //     return this.params.data[this.params.value]
    //       .map(p => p[this.params.params.field])
    //       .join(" , ");
    //   } else {
    //     return "";
    //   }
    // } else {
    //   return this.params.value[this.params.params.field];
    // }
  }

  agInit(params: any): void {
    this.params = params;
  }
}
