import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { PaginatorDTO } from '../dto/paginator.dto';
import { PageDTO } from '../dto/page.dto';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pages:PaginatorDTO<PageDTO>;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  async getPageByName(name:string): Promise<PageDTO>{
    if (!this.pages) await this.getAllPages();

    return this.pages.items.find(p => p.name === name);
  }

  async getPageById(id:string): Promise<PageDTO>{
    if (!this.pages) await this.getAllPages();

    return this.pages.items.find(p => p.id === id);
  }


  async getAllPages() : Promise<PaginatorDTO<PageDTO>>{
    if (this.pages) return this.pages;

    const plugin = this.storageService.getPluginByName("pages_api");
    if (plugin) {
      const url = `${plugin.apiUrl}`;
      this.pages = await this.httpClient.get<PaginatorDTO<PageDTO>>(url).toPromise();
    }

    return null;
  }
}
