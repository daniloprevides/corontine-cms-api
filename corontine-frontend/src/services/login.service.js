import { postData } from "./default-service";
import { userDataStorage } from "../stores/user-data.store";
import { pluginDataStorage } from "../stores/plugin-data.store";
userDataStorage.useLocalStorage();

export default {
  logout: () => {
    userDataStorage.delete();
  },
  login: async (username, password) => {
    return new Promise(async (resolve, reject) => {
      //getting plugin data
      let authPlugin = await pluginDataStorage.getAuthPlugin();
      let url = `${authPlugin.apiUrl}/oauth/token`;

      const tokenData = await postData(
        url,
        { username: username, password: password, grant_type: "password" },
        error => {
          let message = error;
          let url = null;

          switch (error.status) {
            case 406: {
              message = `You must change the password before log in`;
              url = `/change-password?username=${username}`;
              break;
            }
            case 404: {
              message = `Username or password not found`;
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
        }
      );

      if (!tokenData) return;

      userDataStorage.set(tokenData);
      resolve(true);
    });
  }
};
