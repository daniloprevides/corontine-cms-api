import { BaseDataComponent } from "./base-data-component";
import { Input, ViewChild, ElementRef } from "@angular/core";

export class BaseInputComponent extends BaseDataComponent {
  @Input() type = "text";
  @ViewChild("form",{static: false}) form:ElementRef;



  changed(data:string){
    this.validateData();
    this.dispatch(this.form.nativeElement,"changed",data);
  }

  keyDown(data:string){
    this.dispatch(this.form.nativeElement,"data-changed",data);
  }


}
