<script lang="ts">
  import { pluginDataStorage } from '../stores/plugin-data.store';
  import { userDataStorage } from '../stores/user-data.store';
  import baseService from '../services/base.service';
  let label = 'MyLabel';
  let page = {
    apiData: {
      apiUrl: 'http://myUrl',
    },
  };
  let component;

  customElements.whenDefined('addon-store').then(d => {
    //applying default data
    const defaultUrl = page.apiData.apiUrl;
    const userData = userDataStorage.get();
    component.plugins = pluginDataStorage.get();
    component.api = page.apiData;
    component.scopes = userData.scope.split(' ');
    component.page = page;

    //Defining data functions
    component.getData = async (params: any, url?: string) => {
      const appUrl = url
        ? url
        : page.apiData.getAllUrl
        ? page.apiData.getAllUrl
        : defaultUrl;
      return await baseService.getListByUrl(appUrl, params);
    };

    component.getOne = async (id: string, url?: string) => {
      let appUrl = url
        ? url
        : page.apiData.getUrl
        ? page.apiData.getUrl
        : defaultUrl;
      appUrl = `${appUrl}/${id}`;
      return await baseService.getItemByUrl(appUrl);
    };

    component.createItem = async (item: any, url?: string) => {
      let appUrl = url
        ? url
        : page.apiData.addUrl
        ? page.apiData.addUrl
        : defaultUrl;
      return await baseService.postByUrl(appUrl, item);
    };

    component.updateItem = async (id: string, item: any, url?: string) => {
      let appUrl = url
        ? url
        : page.apiData.addUrl
        ? page.apiData.addUrl
        : defaultUrl;
      appUrl = `${appUrl}/${id}`;

      return await baseService.putByUrl(appUrl, item);
    };

    component.deleteItem = async (id: string, url?: string) => {
      let appUrl = url
        ? url
        : page.apiData.addUrl
        ? page.apiData.addUrl
        : defaultUrl;

      return await baseService.deleteByUrl(id, appUrl);
    };
  });
</script>

<addon-store {label} bind:this={component} />
