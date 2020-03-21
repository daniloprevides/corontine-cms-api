import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);
  
	return {
    subscribe,
    set,
    get: () => {
      return JSON.parse(localStorage.getItem(key));       
    },
    delete: () => {
      localStorage.removeItem(key);
    },
    getToken: () => {
      const data = JSON.parse(localStorage.getItem(key));
      if (data){
        return data.accessToken;
      }
      
      return null;
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

export const userDataStorage = createWritableStore('user-data-storage', "");
userDataStorage.useLocalStorage();