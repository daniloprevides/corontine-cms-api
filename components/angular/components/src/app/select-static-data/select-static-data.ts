import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  ViewChild,
  ElementRef
} from "@angular/core";
import { BaseDataComponent } from '../base-data-component';


@Component({
  selector: "select-static-data",
  templateUrl: "./select-static-data.html",
  styleUrls: ["./select-static-data.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectStaticDataComponent extends BaseDataComponent {
  @Input() options:Array<any> = [];
  @Input() data = {items:[]};
  @ViewChild("form",{static: false}) form:ElementRef;

  public selectedData  = "";

  constructor(
    private zone: NgZone
  ) {
    super();
  }

  doValidateData(){
    //updating data
    const data =  super.doValidateData("selectedData");
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.zone.run(() => {

    });
    return data;
  }

  changed(data:any){
    this.doValidateData();
    this.dispatch(this.form.nativeElement,"changed",data);
  }

  ngOnChanges(changes){
    console.log(changes);
  }
}
