import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from './services/dialog.service';
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class CMSErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }
  async handleError(error) {
      console.debug(error.message);
      super.handleError(error);
//      alert(`Error occurred:${error.message}`);
  }
}
