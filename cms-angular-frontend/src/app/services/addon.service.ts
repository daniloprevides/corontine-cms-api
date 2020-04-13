import { Injectable } from '@angular/core';
import { ModelService } from './model.service';
import { ScopeDTO } from '../dto/scope.dto';
import { ClientCredentialDTO } from '../dto/client-credential.dto';

@Injectable({
  providedIn: 'root'
})
export class AddonService extends ModelService{

  async createClientCredential(clientCredential:ClientCredentialDTO){
    const authPlugin = this.storageService.getPluginByType("AUTH");
    const url = `${authPlugin.apiUrl}/api/v1/credentials/generate/new`;
    return await this.httpClient.post<ClientCredentialDTO>(
      url,
      clientCredential,
    ).toPromise();
  }

  async getInfo(addonUrl:string){
     const authPlugin = this.storageService.getPluginByType("AUTH");
     const url = `${addonUrl}?callback_uri=${authPlugin.apiUrl}`;
     return await this.httpClient.get(
       url,
     ).toPromise();
  }

  async setInformation(addonUrl:string, addonData:any){
    const url = `${addonUrl}`;

    return await this.httpClient.put(
      url,
      addonData,
    ).toPromise();
  }
}
