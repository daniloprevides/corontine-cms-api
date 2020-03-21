import Message from "../../modals/message.svelte";
import { push, pop, replace } from "svelte-spa-router";
import {AuthorizationService} from '../../services/authorization.service';

export class BasePage {
    constructor(component, openFunction){
      this.component = component;
      this.open = openFunction;
      this.authorizationService = new AuthorizationService();
    }


    hasPermission(requiredPermission){
      return this.authorizationService.hasPermission(requiredPermission);
    }

    showMessage(title, message, ok = () => {}){
      this.open(Message, {
        title: title,
        text: message,
        showCancel: false,
        onOk: () => {
          ok();
        }
      });
    }

    showConfirm(title, message, ok = () => {}){
      this.open(Message, {
        title: title,
        text: message,
        showCancel: true,
        onOk: () => {
          ok();
        }
      });
    }

    checkStatusCode(error,statusCode){
      return error &&
      error.message &&
      error.message.data &&
      error.message.data.error &&
      error.message.data.error.error &&
      error.message.data.error.statusCode === statusCode
    }

    showErrorMessage(error, ok= () => {}) {
        let message = error.message;
          if (
            this.checkStatusCode(error) === 400 || error.status === 400
          ) {
            const fields = error.message.data.error.message.map(m => {
              let property = m.property;
              let value = m.constraints;
              return property;
              //return {property: property, value: value};
            });
      
            message = `Fields have errors (${fields.join(",")})`;
          } else if (
            this.checkStatusCode(error) === 500 || error.status === 500
          ) {
            message = error.message.data.error.message;
          }else if (
            this.checkStatusCode(error) === 404 || error.status === 404
          ) {
            message = "Not found.";
          }else if (
            this.checkStatusCode(error) === 404 || error.status === 409
          ) {
            message = "Item already exists";
          }
          this.open(Message, {
            title: "Error",
            text: message,
            showCancel: false,
            onOk: () => {
              if (error.url) {
                push(error.url);
              }else{
                ok();
              }
            }
          });
      }
}