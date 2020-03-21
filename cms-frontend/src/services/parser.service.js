export class ParserService {
  getVariablesArray(
    value
  ) {
    const variables = new Array();
    let getData = false;
    let data = "";
    let unformattedData = "";
    for (let index = 0; index < value.split("").length; index++) {
      if (getData) {
        if (data === "") data = "this.";
        data += value.charAt(index);
        unformattedData += value.charAt(index);
      }

      if (value.charAt(index) === "{") {
        getData = true;
      }
      if (value.charAt(index) === "}") {
        getData = false;
        variables.push({
          data: data.substring(0, data.length - 1)
          ,unformattedData: unformattedData.substring(0, unformattedData.length - 1)
        });

        //restarting variables
        data = "";
        unformattedData = "";
      }
    }

    return variables;
  }

  parseVariables(
    variables,
    context,
    value
  ) {
    function evalInScope(code, context) {
      //# Return the results of the in-line anonymous function we .call with the passed context
      return function() {
        {
          return eval(code);
        }
      }.call(context);
    }

    for (let variable of variables) {
      try {
        const result = evalInScope(variable.data, context);
        value = value.replace(`{${variable.unformattedData}}`,result);
      } catch (ex) {
        console.error(ex);
      }
    }

    return value;
  }

  parse(value, context) {
    if (!value) return value;

    if (value.indexOf("{") >= 0) {
      return this.parseVariables(this.getVariablesArray(value), context, value);
    }
    return value;
  }
}
