import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);
  
	return {
    subscribe,
    set,
    get: () => {
      return JSON.parse(localStorage.getItem(key));       
    },
    getAuthPlugin: () => {
      const data = JSON.parse(localStorage.getItem(key));       

      let authPlugin = null;
      if (data && data.find) {
        authPlugin = data.find(d => d.pluginType === "AUTH");
      }         
      return authPlugin;
    },
    getPluginByName: (name) => {
      const data = JSON.parse(localStorage.getItem(key));       

      let plugin = null;
      if (data && data.find) {
        plugin = data.find(d => d.name === name);
      }         
      return plugin;
    },    
    getPluginById: (id) => {
      const data = JSON.parse(localStorage.getItem(key));       

      let plugin = null;
      if (data && data.find) {
        plugin = data.find(d => d.id === id);
      }         
      return plugin;
    },     
    getMenuPlugin: () => {
      const data = JSON.parse(localStorage.getItem(key));       

      let authPlugin = null;
      if (data && data.find) {
        authPlugin = data.find(d => d.pluginType === "MENU");
      }         
      return authPlugin;
    },    
    getBasePlugin: () => {
      const data = JSON.parse(localStorage.getItem(key));       

      let basePlugin = null;
      if (data && data.find) {
        basePlugin = data.find(d => d.pluginType === "BASE");
      }         
      return basePlugin;
    },  
    getRedirectorPlugin: () => {
      const data = JSON.parse(localStorage.getItem(key));       

      let basePlugin = null;
      if (data && data.find) {
        basePlugin = data.find(d => d.pluginType === "REDIRECTOR");
      }         
      return basePlugin;
    },  
    getPagePlugin: () => {
      const data = JSON.parse(localStorage.getItem(key));       

      let basePlugin = null;
      if (data && data.find) {
        basePlugin = data.find(d => d.pluginType === "PAGES");
      }         
      return basePlugin;
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

export const pluginDataStorage = createWritableStore('plugin-data-storage', "");
pluginDataStorage.useLocalStorage();