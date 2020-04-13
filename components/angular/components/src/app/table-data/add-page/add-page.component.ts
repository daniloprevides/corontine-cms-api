import { Component, NgZone, Input, SimpleChanges, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PageViewComponent } from 'src/app/page-view/page-view';
import { Page } from 'src/app/page-model.dto';

@Component({
  selector: 'addon-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent extends PageViewComponent implements AfterViewInit {

  constructor(ngZone:NgZone, private dialog:NgbActiveModal) {
    super(ngZone);
  }

  dismiss(msg: string|boolean){
    this.dialog.dismiss(msg);
  }

  async save(msg:string){
    const errors = await super.doValidateData();
    console.log("Errors", errors);

    if (JSON.stringify(errors) === JSON.stringify({})){
      const model = this.getDataForSave();
      this.dialog.close(model);
    }
  }

  async init(){
    await this.populatePage(this.data.content, this.data);
  }

  async ngAfterViewInit(){
    this.init();
  }

}
