import { fetchData, postData, putData, deleteData } from "./default-service";
import { pluginDataStorage } from "../stores/plugin-data.store";
pluginDataStorage.useLocalStorage();

export default {
  getInfo: async (addonUrl) => {
    return new Promise(async (resolve, reject) => {
      //getting plugin data
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${addonUrl}?callback_uri=${authPlugin.apiUrl}`;

      const data = await fetchData(
        url,
        error => {
          let message = error;
          let url = null;

          switch (error.status) {
            case 403 : {
              message = `Access denied to resource`;
              break;
            }
  
          }

          return reject({
            message: message,
            url: url,
            status: error.status,
            error: error
          });
        }
      );

      resolve(data);
    });
  },
  setInformation: async (addonUrl, addonData) => {
    return new Promise(async (resolve, reject) => {
      let url = `${addonUrl}`;

      const data = await putData(
        url,
        addonData,
        error => {
          let message = error;
          let url = null;

          switch (error.status) {
            case 403 : {
              message = `Access denied to resource`;
              break;
            }
  
          }

          return reject({
            message: message,
            url: url,
            status: error.status,
            error: error
          });
        }
      );

      resolve(data);
    });
  },
  createClientCredential: async (clientCredential) => {
    return new Promise(async (resolve, reject) => {
      //getting plugin data
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/credentials/generate/new`;

      const data = await postData(
        url,
        clientCredential,
        error => {
          let message = error;
          let url = null;

          switch (error.status) {
            case 403 : {
              message = `Access denied to resource`;
              break;
            }
  
          }

          return reject({
            message: message,
            url: url,
            status: error.status,
            error: error
          });
        }
      );

      resolve(data);
    });
  },
  getCode: async (name,state, pluginUrl) => {
    return new Promise(async (resolve, reject) => {
      //getting plugin data
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/oauth/code?app_name=${name}&state=${state}&redirect_uri=${pluginUrl}`;

      const data = await fetchData(
        url,
        { name: name, description: description },
        error => {
          let message = error;
          let url = null;

          switch (error.status) {
            case 403 : {
              message = `Access denied to resource`;
              break;
            }
  
          }

          return reject({
            message: message,
            url: url,
            status: error.status,
            error: error
          });
        }
      );

      resolve(data);
    });
  }
};
