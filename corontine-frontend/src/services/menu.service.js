import { postData, fetchData } from "./default-service";
import { userDataStorage } from "../stores/user-data.store";
import { pluginDataStorage } from "../stores/plugin-data.store";
userDataStorage.useLocalStorage();

export default {
  getMenu: async () => {
    return new Promise(async (resolve, reject) => {
      //getting menu data
      let menuPlugin = await pluginDataStorage.getMenuPlugin();
      let url = `${menuPlugin.apiUrl}/api/v1/menu/my-menu`;

      const menuData = await fetchData(
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

      resolve(menuData);
    });
  }
};
