import { fetchData } from "./default-service";
import { pluginDataStorage } from "../stores/plugin-data.store";


export default {
  getApis: async () => {
    return new Promise(async (resolve, reject) => {
      //getting menu data
      let basePlugin = await pluginDataStorage.getPagePlugin();
      let url = `${basePlugin.apiUrl}/api/v1/page/api/data`;

      const apiData = await fetchData(
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

      resolve(apiData);
    });
  }
};
