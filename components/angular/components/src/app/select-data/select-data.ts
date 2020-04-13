import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges
} from "@angular/core";
import { BaseDataComponent } from '../base-data-component';
import { FindParamsDto } from '../find-params.dto';


@Component({
  selector: "select-data",
  templateUrl: "./select-data.html",
  styleUrls: ["./select-data.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectDataComponent extends BaseDataComponent {
  @Input() options:Array<any> = [];
  @Input() displayLabel = "";
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

  async ngOnChanges(changes:SimpleChanges){
    if (this.api){
      const plugin = this.plugins.find(p => p.name === this.api.name);
      const url = plugin .getAllUrl ? plugin .getAllUrl : plugin .apiUrl;
      const data = await this.getList(new FindParamsDto(), url);
      this.data = data;
      this.zone.run(() => {
        this.data = data;
      });

    }
  }
}
