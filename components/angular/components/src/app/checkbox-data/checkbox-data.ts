import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input
} from "@angular/core";

import { BaseInputComponent } from "../base-input-component";

@Component({
  selector: "checkbox-data",
  templateUrl: "./checkbox-data.html",
  styleUrls: ["./checkbox-data.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CheckboxDataComponent extends BaseInputComponent {
  @Input() type = "checkbox";

  doValidateData() {
    return true;
  }
  constructor(
    private zone: NgZone
  ) {
    super();
  }
}
