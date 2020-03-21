import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);
  
	return {
    subscribe,
    set,
    loaded: (isLoaded) => {
      set(isLoaded);
    },
    get: () => {
      return JSON.parse(localStorage.getItem(key));       
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

export const webcomponentDataStorage = createWritableStore('webcomponent-data-storage', "");