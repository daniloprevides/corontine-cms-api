import { pluginDataStorage } from "../stores/plugin-data.store";
import { putData, postData, fetchData, deleteData } from "./default-service";

export default {
  deleteGroup: (id) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/group/${id}`;
      let error = null;
  
      const data = await deleteData(url,(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
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
      });
  
      if (error) return;
      resolve(data);  
    })

  },
  updateGroup: (id, group) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/group/${id}`;
      let error = null;
  
      const data = await putData(url, group, (error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
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
      });
  
      if (error) return;
      resolve(data);  
    })

  },  
  addGroup: (group) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/group`;
      let error = null;
  
      const data = await postData(url, group,(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
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
      });
  
      if (error) return;
      resolve(data);  
    })

  },
  getAllGroups: () => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/group`;
      let error = null;
  
      const data = await fetchData(url,(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
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
      });
  
      if (error) return;
      resolve(data);  
    })
  },
};
