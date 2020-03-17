//The label to display the field
export let label;
//required
export let required = true;
export let readonly = false
export let disabled = false;
//if field must be validated
export let validate = true;
// Required message
export let requiredMessage = "Field cannot be empty";
//Data
let data = "";
//export options
export let options = []

let component;
let errorMessage;

$:{
  if (options) console.log(options);
}

export class InputDataModel {
  changed(value) {
    if (this.validate()) {
      this.dispatchEvent("changed", value);
    }
  }

  dataChanged(value) {
    if (this.validate()) {
      this.dispatchEvent("data-changed", value);
    }
  }

  validate() {
    if (!validate) return true;

    errorMessage = null;
    if (!data || !data.length) {
      errorMessage = requiredMessage;
    }

    return errorMessage == null;
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

export const model = new InputDataModel();
export const validateData = model.validate;