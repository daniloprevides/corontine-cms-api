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
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { BaseComponents, PaginatedResponse } from "../base-components";
import { ColumnsDTO } from "./columns.dto";
import { LabelCellRendererComponent } from "./label-cell-renderer/label-cell-renderer.component";
import { ObjectCellRendererComponent } from "./object-cell-renderer/object-cell-renderer.component";
import { IGetRowsParams } from "ag-grid-community";
import { FindParamsDto } from "../find-params.dto";
import { FieldDefinitionDTO } from "./field-definition.dto";
import { PageModel, Page } from "../page-model.dto";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPageComponent } from './add-page/add-page.component';

@Component({
  selector: "table-data",
  templateUrl: "./table-data.html",
  styleUrls: ["./table-data.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TableDataComponent extends BaseComponents
  implements OnChanges, OnInit {
  @ViewChild("table", { static: false }) table: ElementRef;
  @ViewChild("content", { static: false }) content: ElementRef;
  @ViewChild("confirmation", { static: false }) confirmation: ElementRef;

  @Input() data: PaginatedResponse<any> = { items: [] } as PaginatedResponse;
  @Input() columns: Array<ColumnsDTO> = null;
  @Input() size = 10;
  @Input() filterable = true;
  @Input() sortable = true;
  @Input() selectable = false;
  @Input() pagination = true;
  @Input() sourcefield = null;
  @Input() targetfield = null;
  @Input() isArray = false;
  @Input() i18n = {add: "Add", delete: "Delete", "message_delete": "Do you really want to delete this item?", ok: "ok", cancel: "cancel", "message_success": "Item created successfully"};
  @Input() itemmodel = {};
  @Input() crud = false;
  @Input() pageAdd = {} as Page;
  @Input() pageEdit = {};
  @Input() permissions = [];
  @Input() page: Page = {} as Page;
  @Input() fieldDefinition: Array<FieldDefinitionDTO> = [];
  @Output("item-selected") itemSelectedEvent = new EventEmitter();
  @Output("table-item-selected") tableItemSelectedEvent = new EventEmitter();
  tableColumns: { headerName: string; field: string }[];

  frameworkComponents = {
    label: LabelCellRendererComponent,
    object: ObjectCellRendererComponent
  };
  loadingCellRenderer = "label";
  loadingCellRendererParams = {};
  defaultColDef: any;
  cellRendererMap = new Map<string, string>();
  gridApi: any;
  gridColumnApi: any;
  rowModelType = "infinite";
  gridParams: any;
  rowSelection = "single";
  rowData = [];


  constructor(protected modalService: NgbModal, private zone:NgZone){
    super();
  }

  async delete(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(async (result) => {
      const plugin = this.plugins.find(p => p.name === this.pageAdd.content.apiData.name);
      const url = plugin.removeUrl ? plugin.removeUrl : plugin.apiUrl;
      await this.deleteItem(this.rowData[0].id,url);
      const value  = this.data.items.filter(i => i.id !== this.rowData[0].id);
      this.data = value as any;
      this.gridApi.removeItems(this.rowData);
      this.gridApi.refreshView();
      this.gridApi.refreshInfiniteCache();
      this.zone.run(() => {
        this.gridApi.removeItems(this.rowData);
        this.gridApi.refreshView();
      });
      this.rowData = [];
    }, (reason) => {
    });
  }

  selectionChanged(event){
    if (this.crud){
      this.rowData = this.gridApi.getSelectedRows();
      //this.tableItemSelectedEvent.emit(this.rowData);
      this.zone.run(() => {
        this.rowData = this.gridApi.getSelectedRows();
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.tableColumns = this.columns.map(c => {
        console.log("Params", c.detail);
        this.cellRendererMap.set(c.field, c.detail.component);
        return {
          headerName: c.label,
          field: c.field,
          cellRenderer: c.detail.component,
          cellRendererParams: c.detail
        };
      });
    }

    if (changes.fieldDefinition) {
      this.populateColumnsFromFieldDefinition(this.fieldDefinition);
    }

    if (changes.data) {
      console.debug(`Table received data.. selecting mode static`);
      if (this.gridParams) this.onGridReady(this.gridParams);
    }

    if (changes.crud || changes.selectable){
      this.defaultColDef.headerCheckboxSelection = this.isFirstColumn;
      this.defaultColDef.checkboxSelection = this.isFirstColumn;
    }


    if (changes.crud) {
      console.debug(`Table received crud.. enabling crud options`)
    }
  }

  populateColumnsFromFieldDefinition(
    fieldDefinition: Array<FieldDefinitionDTO>
  ) {
    const sortedData = fieldDefinition
      .sort((a, b) => {
        return a.order - b.order;
      })
      .filter(c => c.visible);
    this.columns = sortedData.map(c => {
      const column = new ColumnsDTO();
      column.field = c.name;
      column.label = c.value;
      const detail = {
        component: c.component,
        ...c.params
      };
      column.detail = detail;
      return column;
    });
    this.tableColumns = this.columns.map(c => {
      return {
        headerName: c.label,
        field: c.field,
        cellRenderer: c.detail.component,
        cellRendererParams: c.detail
      };
    });
  }

  clicked(event: any) {
    const action = "openPage";
    const params = { page: this.page.name, details: { id: event.data.id } };
    this.itemSelectedEvent.emit({ action: action, params: params });
  }

  async showAdd(){

    const modalRef = this.modalService.open(AddPageComponent,{ size: 'xl' });
    //adding data to page
    modalRef.componentInstance.data = this.pageAdd;
    modalRef.componentInstance.permissions = this.permissions;
    modalRef.componentInstance.page = this.pageAdd;
    modalRef.componentInstance.plugins = this.plugins;
    modalRef.componentInstance.api = this.pageAdd.content.apiData;
    modalRef.componentInstance.scopes = this.scopes;
    modalRef.componentInstance.pageModel = this.pageAdd.content;
    modalRef.componentInstance.getList = this.getList;
    modalRef.componentInstance.getOne = this.getOne;
    modalRef.componentInstance.updateItem = this.updateItem;
    modalRef.componentInstance.createItem = this.createItem;
    modalRef.componentInstance.deleteItem = this.deleteItem;
    const result = await modalRef.result;
    //setting fixed filter to item
    result[this.targetfield] = this.itemmodel;
    const plugin = this.plugins.find(p => p.name === this.api.name);
    const url = plugin.addUrl ? plugin.addUrl : plugin.apiUrl;
    const newItem = await this.createItem(result,url);
    this.data.items.push(newItem);
    this.data = this.data.items as any;
    this.gridApi.refreshView();
    this.gridApi.refreshInfiniteCache();
    this.zone.run(() => {
      this.gridApi.refreshView();
    });

    this.notificationService.info(this.i18n.message_success);
  }

  private isFirstColumn (params) {
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    const thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {


    this.defaultColDef = {
      editable: false,
      sortable: this.sortable,
      flex: 1,
      minWidth: 100,
      filter: this.filterable,
      resizable: true,
      pagination: this.pagination,
      rowModelType: "infinite",
      datasource: this.serverSideDatasource()
    };
  }

  formatParams(params: IGetRowsParams): FindParamsDto {
    const findParams = new FindParamsDto();
    const page = params.endRow / this.size;
    const limit = this.size;

    findParams.page = page;
    findParams.limit = limit;
    console.debug(params.sortModel);
    const sort = {} as any;
    if (params.sortModel) {
      params.sortModel.forEach(m => {
        const column = m.colId;
        const sortOption = m.sort.toString().toUpperCase();
        sort[column] = sortOption;
      });
    }

    if (params.filterModel) {
      const query = {} as any;
      Object.keys(params.filterModel).forEach(k => {
        const columnName = k;
        const value = params.filterModel[k];
        if (value.operator) {
        } else {
          const filterType = value.filterType;
          const type = value.type;
          const filter = value.filter;
          switch (type) {
            case "contains":
              query[columnName] = { $like: filter };
              break;
            case "equals":
              query[columnName] = { $eq: filter };
              break;
            case "notContains":
              query[columnName] = { $notlike: filter };
              break;
            case "notEqual":
              query[columnName] = { $ne: filter };
              break;
            case "startsWith":
              query[columnName] = { $starts: filter };
              break;
            case "endsWith":
              query[columnName] = { $ends: filter };
              break;
          }
        }
      });
      findParams.q = JSON.stringify(query);
    }

    findParams.sort = JSON.stringify(sort);
    // findParams.q = params.filterModel;
    return findParams;
  }

  serverSideDatasource() {
    return {
      getRows: (params: IGetRowsParams) => {
        console.log("[Datasource] - rows requested by grid: ", params);
        if (this.getList) {
          // getting page
          const page = params.endRow / this.size;
          const findParams = this.formatParams(params);
          console.log("[GetList Found]", { page: page });
          this.getList(findParams).then(response => {
            console.log("Response", response);
            setTimeout(function() {
              if (response) {
                params.successCallback(response.items, response.totalItems);
              } else {
                params.failCallback();
              }
            }, 200);
          });
        }
      }
    };
  }

  staticSideDatasource() {
    return {
      getRows: (params: IGetRowsParams) => {
        const value = (this.data as unknown) as Array<any>;
        const paginatedResponse = {} as PaginatedResponse;
        paginatedResponse.itemCount = value.length;
        paginatedResponse.items = value;
        paginatedResponse.totalItems = value.length;
        paginatedResponse.pageCount = value.length;
        this.data = paginatedResponse;
        this.size = paginatedResponse.totalItems;
        console.log("[Static list Found]", paginatedResponse);
        params.successCallback(paginatedResponse.items, paginatedResponse.totalItems);
      }
    };
  }

  onGridReady(params) {
    this.gridParams = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const isDynamic = (!(this.data as any).length);
    if (isDynamic) {
      console.log("Starting grid... dynamic", params);
      const datasource = this.serverSideDatasource();
      this.gridApi.setDatasource(datasource);
    } else {
      console.log("Starting grid... static", params);
      const datasource = this.staticSideDatasource();
      this.gridApi.setDatasource(datasource);
    }

    if (this.selectable){
      this.rowSelection = "single";
    }
  }
}
