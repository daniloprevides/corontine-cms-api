import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebComponentsService {

  constructor() { }

  loadComponent(url:string){
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
        resolve();
      }
    });
  }
}
