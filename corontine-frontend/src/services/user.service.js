import { pluginDataStorage } from "../stores/plugin-data.store";
import { putData, postData, fetchData, deleteData } from "./default-service";

export default {
  deleteUser: (id) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/${id}`;
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
  updateUser: (id, user) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/${id}`;
      let error = null;
  
      const data = await putData(url, user, (error) => {
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
   updateUser: (id, user) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/${id}`;
      let error = null;
  
      const data = await putData(url, user, (error) => {
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
  addUser: (user) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user`;
      let error = null;
  
      const data = await postData(url, user,(error) => {
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
  getAllUsers: () => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user`;
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
  validateForgotPasswordRequest: (changeId) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/forgot-password/${changeId}/validate`;
      let error = null;

      const passwordForgotData = await fetchData(url,(error) => {
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
      resolve(passwordForgotData);
    })
    
  },
  forgotPassword: async (username) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/forgot-password`;
      let error = null;

      const passwordForgotData = await postData(url,{email: username},(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
          case 404 : {
            message = `Username not found`;
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
      resolve(passwordForgotData);
    })

  },
  changePasswordById: async(changeId, newPassword, confirmNewPassword) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/forgot-password/${changeId}`;
      let error = null;

      const passwordChangedData = await postData(url,{newPassword: newPassword, confirmNewPassword: confirmNewPassword},(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
          case 404 : {
            message = `Not found`;
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
      resolve(passwordChangedData);
    })
  },
  changePassword: async (username,password, newPassword, confirmNewPassword) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/me/change-password`;
      let error = null;

      const passwordChangedData = await putData(url,{username: username, password: password, newPassword: newPassword, confirmNewPassword: confirmNewPassword},(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
          case 404 : {
            message = `Username not found`;
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
      resolve(passwordChangedData);
    })
  },
  changeUserPassword: async (id, newPassword, confirmNewPassword) => {
    return new Promise(async (resolve,reject) => {
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/api/v1/user/${id}/change-password`;
      let error = null;

      const passwordChangedData = await putData(url,{newPassword: newPassword, confirmNewPassword: confirmNewPassword},(error) => {
        let message = error;
        let url = null;
        error = error;
        switch(error.status){
          case 400 : {
            message = error.data.error.message;
            break;
          }
          case 404 : {
            message = `Username not found`;
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
      resolve(passwordChangedData);
    })
  }
};
