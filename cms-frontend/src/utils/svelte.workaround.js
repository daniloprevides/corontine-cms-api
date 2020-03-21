function updateAttribute(node, name, value) {
    if (value==null || value==+false) {
      node.removeAttribute(name);
    }
    else node.setAttribute(name, value+"");
  }
  
  //calls setAttribute or removeAttribute
  export function attr(node, entry) {
    if(entry) {
       updateAttribute(node, entry[0], entry[1]);
     }
  
    return {
      update(updated) {
        if(!updated) return;
        updateAttribute(node, updated[0], updated[1]);
      }
    }
  }
  
  //assigns the given value to the given key
  export function prop(node, entry) {
    if(entry) {
       node[ entry[0] ] = entry[1];
    }
  
    return {
      update(updated) {
        if(!updated) return;
        node[ updated[0] ] = updated[1];
      }
    }
  }