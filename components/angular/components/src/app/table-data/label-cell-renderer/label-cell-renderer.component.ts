import { Component } from '@angular/core';
import { ICellRenderer } from 'ag-grid-community';

@Component({
  selector: 'addon-label-cell-renderer',
  templateUrl: './label-cell-renderer.component.html',
  styleUrls: ['./label-cell-renderer.component.scss']
})
export class LabelCellRendererComponent implements ICellRenderer {
  params:any;

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  agInit(params:any): void {
    this.params = params;
  }
}
