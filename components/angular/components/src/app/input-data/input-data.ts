import {
  ViewEncapsulation,
  Component,
  NgZone
} from "@angular/core";

import { BaseInputComponent } from '../base-input-component';

@Component({
  selector: "input-data",
  templateUrl: "./input-data.html",
  styleUrls: ["./input-data.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InputDataComponent extends BaseInputComponent {

  constructor(
    private zone: NgZone
  ) {
    super();
  }

  doValidateData(){
    //updating data
    const data =  super.doValidateData();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.zone.run(() => {

    });
    return data;
  }
}
