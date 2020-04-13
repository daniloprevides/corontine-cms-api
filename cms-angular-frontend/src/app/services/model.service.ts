import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { PaginatorDTO } from "../dto/paginator.dto";
import { FindParamsDto } from "../dto/find-params.dto";

@Injectable({
  providedIn: "root"
})
export class ModelService {
  constructor(
    protected httpClient: HttpClient,
    protected storageService: StorageService
  ) {}

  async getByUrl(url: string) {
    return await this.httpClient.get(url).toPromise();
  }

  async getFieldNamesByPluginId(pluginId:string) {
    const plugin = this.storageService.getPluginById(pluginId);
    if (plugin) {
      const url = `${plugin.apiUrl}/field/names`;
      return this.httpClient.get<{
        "add": Array<string>,
        "edit": Array<string>,
        "list": Array<string>,
      }>(url).toPromise();
    }
  }

  async getById(pluginName: string, id: string) {
    const plugin = this.storageService.getPluginByName(pluginName);
    if (plugin) {
      const getUrl = `${plugin.getUrl ? plugin.getUrl : plugin.apiUrl}/${id}`;
      return await this.getByUrl(getUrl);
    }
  }
  async getAllByUrl<T>(
    url: string,
    params?: FindParamsDto
  ): Promise<PaginatorDTO<T>> {
    if (params) {
      const parsedParams = Object.keys(params)
        .map(function(k) {
          if (params[k]) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
          }
        })
        .join("&");
      if (parsedParams && parsedParams.length) {
        url += `?${parsedParams}`;
      }
    }

    return await this.httpClient.get<PaginatorDTO<T>>(url).toPromise();
  }

  async getAll<T>(
    pluginName: string,
    params?: FindParamsDto
  ): Promise<PaginatorDTO<T>> {
    const plugin = this.storageService.getPluginByName(pluginName);
    if (plugin) {
      const getUrl = `${plugin.getUrl ? plugin.getUrl : plugin.apiUrl}`;
      return await this.getAllByUrl(getUrl, params);
    }
  }

  async updateByUrl<T>(
    iUrl: string,
    id:string,
    data: T
  ): Promise<T> {
      const url = `${iUrl}/${id}`;
      return await this.httpClient.put<T>(url,data).toPromise();
  }

  async addByUrl<T>(
    iUrl: string,
    data: T
  ): Promise<T> {
      const url = `${iUrl}`;
      return await this.httpClient.post<T>(url,data).toPromise();
  }

  async deleteByUrl<T>(
    iUrl: string,
    id:string,
  ): Promise<T> {
      const url = `${iUrl}/${id}`;
      return await this.httpClient.delete<T>(url).toPromise();
  }

  async update<T>(
    pluginName: string,
    id:string,
    data: T
  ): Promise<T> {
    const plugin = this.storageService.getPluginByName(pluginName);
    if (plugin) {
      const url = `${plugin.updateUrl ? plugin.updateUrl : plugin.apiUrl}/${id}`;
      return await this.httpClient.put<T>(url,data).toPromise();
    }

    return null;
  }

  async add<T>(
    pluginName: string,
    data: T
  ): Promise<T> {
    const plugin = this.storageService.getPluginByName(pluginName);
    if (plugin) {
      const url = `${plugin.addUrl ? plugin.addUrl : plugin.apiUrl}`;
      return await this.httpClient.post<T>(url,data).toPromise();
    }

    return null;
  }


  async delete<T>(
    pluginName: string,
    id:string,
    data: T
  ): Promise<T> {
    const plugin = this.storageService.getPluginByName(pluginName);
    if (plugin) {
      const url = `${plugin.removeUrl ? plugin.removeUrl : plugin.apiUrl}/${id}`;
      return await this.httpClient.delete<T>(url,data).toPromise();
    }

    return null;
  }
}
