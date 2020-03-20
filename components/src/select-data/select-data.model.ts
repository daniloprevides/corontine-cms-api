//The label to display the field
export let label;
//The label to display from data
export let displayLabel = "label";
//the source field
export let field = "name";
//required
export let required = true;
//if field must be validated
export let validate = true;
export let readonly = false;
export let disabled = false;

// Required message
export let requiredMessage = "Field cannot be empty";

//Data
export let options = null;

export let data = "";

let selectedValue;
let component;
let errorMessage;


export class SelectDataModel {
  changed(value) {
    if (this.validate()) {
      this.dispatchEvent("changed", value);
    }
  }

  validate() {
    if (!validate) return true;

    errorMessage = null;
    if (!selectedValue || !selectedValue.length) {
      errorMessage = requiredMessage;
    }

    return errorMessage == null;
  }

  getErrorMessage(){
    return errorMessage;
  }


  dispatchEvent(name, detail) {
    component.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail
      })
    );
  }
}

export const model = new SelectDataModel();
export const validateData = model.validate;
export const getErrorMessage = model.getErrorMessage;
