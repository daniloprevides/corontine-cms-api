export class PluginDto {
  id: string;

  name: string;

  description?: string;

  componentsUrl: string;

  apiUrl: string;

  addUrl?: string;

  removeUrl: string;

  updateUrl: string;

  getUrl: string;

  getAllUrl: string;

  accessToken: string;

  tokenType: string;

  pluginType: string;

  enabled: boolean;

  environment: string;

  clientId: string;

  components: Array<any>;
}
