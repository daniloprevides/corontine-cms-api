import { BaseComponents } from './base-components';
import { OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

export class BaseDataComponent extends BaseComponents implements OnInit, OnChanges{

  @Input() i18n:any = {"choose": "choose", messages: {required: "Field cannot be empty"}};
  @Input() id:string;
  @Input() label:string;
  @Input() field:string;
  @Input() required = true;
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() validate = true;
  @Input() requiredMessage = this.i18n.messages.required;
  @Input() placeHolder = null;
  @Input() autofocus = null;
  @Input() data:any;
  @Input() getErrorMessage = () => {
    return this.doGetErrorMessage();
  };
  @Input() validateData = () => {
    return this.doValidateData();
  };

  errorMessage:string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  doValidateData(field?:string) {
    if (!this.validate) return true;

    this.errorMessage = null;
    const value = field ? this[field] : this.data;
    if ((this.required) && ((value === undefined || !value )|| (value && !value.length))) {
      this.errorMessage = this.requiredMessage;
    }
    console.debug(`Starting data validation for ${this.id}`, value, this.errorMessage);
    return this.errorMessage == null;
  }

  doGetErrorMessage(){
    return this.errorMessage;
  }

}
