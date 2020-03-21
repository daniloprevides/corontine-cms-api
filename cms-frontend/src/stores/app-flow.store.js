import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);
  
	return {
    subscribe,
    set,
    get: () => {
      return JSON.parse(localStorage.getItem(key));       
    },
    getProperty: (name) => {
      const data = JSON.parse(localStorage.getItem(key));       

      let prop = null;
      if (data && data.find) {
        prop = data.find(d => d.name === name);
      }         
      if (prop) return prop.value;

      return null;
      
    },
    setProperty: (name, value) => {
      const data = JSON.parse(localStorage.getItem(key));       

      let prop = null;
      if (data && data.find) {        
        prop = data.find(d => d.name === name);
      }         

      if (prop){
        prop.value = value;
      }else{
        data.push({name: name, value: value})
      }

      localStorage.setItem(key,JSON.stringify(data));      
    },
               
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }
      
      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    }
  };
}

export const appDataStorage = createWritableStore('app-data-storage', []);
appDataStorage.useLocalStorage();