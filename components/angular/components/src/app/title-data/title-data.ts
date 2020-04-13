import {
  ViewEncapsulation,
  Component,
  NgZone,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { BaseComponents } from '../base-components';

@Component({
  selector: "title-data",
  templateUrl: "./title-data.html",
  styleUrls: ["./title-data.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleDataComponent extends BaseComponents implements OnChanges{

  @Input() text = '';
  @Input() description = '';
  @Input() position = 'center';
  @Input() titleType = 'title';
  alignClass = 'text-center';

  constructor(
    private zone: NgZone
  ) {
    super();
  }
  ngOnChanges(changes:SimpleChanges): void {
    if (changes && changes.position){
      if (this.position) {
        switch (this.position) {
          case 'center':
            this.alignClass = 'text-center';
            break;
          case 'left':
            this.alignClass = 'text-left';
            break;
          case 'right':
            this.alignClass = 'text-right';
            break;
          default: {
            this.alignClass = 'text-right';
            break;
          }
        }
      }
    }

  }

}
