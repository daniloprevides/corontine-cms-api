import { handleError } from "./default-service";
let loadedList = [];

export default {
  loadWebComponent: async url => {
    if (loadedList.indexOf(url) >= 0) return;
    loadedList.push(url);

    return new Promise((resolve, reject) => {
      try {
        var link = document.createElement("script");
        link.setAttribute("src", url);
        link.onload = function() {
          resolve();
        };
        link.onerror = function(error){
            console.debug(error);
            resolve(true);
        };
        document.body.appendChild(link);
      } catch (ex) {
        handleError(ex);
        resolve();
      }
    });
  }
};
