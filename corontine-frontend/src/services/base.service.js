import { fetchData, postData, putData, deleteData } from "./default-service";
import { pluginDataStorage } from "../stores/plugin-data.store";
pluginDataStorage.useLocalStorage();

export default {
  getPublicInfo: async () => {
    const data = await fetchData(`${process.env.apiUrl}/info`);
    if (data && data.plugins) {
      pluginDataStorage.set(data.plugins);
    }

    return data;
  },

  getFieldNames: async url => {
    return new Promise(async (resolve, reject) => {
      url = `${url}/field/names`;
      const data = await fetchData(url, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  getPage: async (name, paramsDto) => {
    return new Promise(async (resolve, reject) => {
      const plugin = pluginDataStorage.getPagePlugin();
      const url = `${plugin.apiUrl}/api/v1/page/name/${name}`;
      const data = await fetchData(url, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  getListData: async (name, paramsDto) => {
    return new Promise(async (resolve, reject) => {
      const plugin = pluginDataStorage.getPluginByName(name);
      const url = plugin.apiUrl;
      const data = await fetchData(url, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  getItemByUrl: async url => {
    return new Promise(async (resolve, reject) => {
      const data = await fetchData(url, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  getListByUrl: async (url, paramsDto) => {
    if (!paramsDto) paramsDto = {};
    const params = Object.keys(paramsDto)
      .map(function(k) {
        if (paramsDto[k]) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(paramsDto[k]);
        }
      })
      .join("&");
    url += `?${params}`;

    return new Promise(async (resolve, reject) => {
      const data = await fetchData(url, error => {
        let message = error;
        let urlRedirect = null;
        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });

      });

      resolve(data);
    });
  },
  putByUrl: async (url, item) => {
    return new Promise(async (resolve, reject) => {
      const data = await putData(url, item, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  deleteByUrl: async (id, url, item) => {
    return new Promise(async (resolve, reject) => {
      url =  `${url}/${id}`;
      const data = await deleteData(url, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  postByUrl: async (url, item) => {
    return new Promise(async (resolve, reject) => {
      const data = await postData(url, item, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  get: async (name, id) => {
    return new Promise(async (resolve, reject) => {
      const plugin = pluginDataStorage.getPluginByName(name);
      const url = plugin.apiUrl;
      const data = await fetchData(`${url}/${id}`, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  update: async (name, id, item) => {
    return new Promise(async (resolve, reject) => {
      const plugin = pluginDataStorage.getPluginByName(name);
      const url = plugin.apiUrl;
      const data = await putData(`${url}/${id}`, item, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },
  create: async (name, item) => {
    return new Promise(async (resolve, reject) => {
      const plugin = pluginDataStorage.getPluginByName(name);
      const url = plugin.apiUrl;
      const data = await postData(`${url}`, item, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  },

  delete: async (name, id) => {
    return new Promise(async (resolve, reject) => {
      const plugin = pluginDataStorage.getPluginByName(name);
      const url = plugin.apiUrl;
      const data = await deleteData(`${url}/${id}`, error => {
        let message = error;
        let urlRedirect = null;

        switch (error.status) {
          case 403: {
            message = `Access denied to resource ${url}`;
            break;
          }
        }

        return reject({
          message: message,
          url: urlRedirect,
          status: error.status,
          error: error
        });
      });

      resolve(data);
    });
  }
};
