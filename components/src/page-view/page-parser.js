export class PageParser {
  parse(data) {
    let main = `<vaadin-form-layout id="main_form">`;
    let properties = {};
    if (!data) throw new Error("Missing fields");
    if (!data.items || !data.items.length) return `${main} </div>`;

    const fields = data.items.map(item => {    
      let field = `<${item.name} class="dynamic-element" id="${item.id}" `;
      properties[item.id] = {};
      if (item.attributes) {
        item.attributes.forEach(a => {
          if (a.type === "ATTRIBUTE") {
            field += ` ${a.name}="${a.value}"`;
          } else {
            properties[item.id][a.name] = a.value;
          }

          //Getting the reference attribute
          if (item.component && item.component.attributes){
            const referenceAttribute = item.component.attributes.find(r => r.name  === a.name);
            a.details = referenceAttribute;  
          }
        });
      }
      field += `> </${item.name}>`;

      return field;
    });

    main += `${fields.join(" \n ")}  </vaadin-form-layout>`;

    return {
      fields: main,
      properties: properties
    };
  }
}
