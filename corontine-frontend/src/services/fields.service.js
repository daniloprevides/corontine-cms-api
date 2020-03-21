import { fetchData } from "./default-service";
import { pluginDataStorage } from "../stores/plugin-data.store";


export default {
  getAvailableFields: async () => {
    return new Promise(async (resolve, reject) => {
      //getting menu data
      let basePlugin = await pluginDataStorage.getBasePlugin();
      let url = `${basePlugin.apiUrl}/fields`;

      const fieldsData = await fetchData(
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

      resolve(fieldsData);
    });
  }
};
