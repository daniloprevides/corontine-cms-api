import { GlobalInfoDto } from "../../commons/dto/global-info.dto";
import { RedirectorService } from "../../commons/services/redirector.service";
import { AuthenticationService } from "../../commons/services/authentication-service";
import { PageRepository } from "../repository/page.repository";
import { GenericService } from "../../commons/services/generic.service";
import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { Page } from "../entity/page.entity";
import { NewPageDto } from "../dto/new-page.dto";
import { UpdatePageDto } from "../dto/update-page.dto";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { PageDto } from "../dto/page.dto";
import { NewCustomPluginPageDto } from "../dto/new-custom-plugin-page";
import {v4} from "uuid";

@Injectable()
export class PageService extends GenericService<
  Page,
  PageRepository,
  NewPageDto,
  UpdatePageDto
> {
  public async validateParent(clientId: string, id: string): Promise<boolean> {
    return true;
  }

  constructor(
    @Inject(forwardRef(() => PageRepository))
    public readonly PageRepository: PageRepository,
    @Inject(forwardRef(() => AuthenticationService))
    public readonly authenticationService: AuthenticationService,
    @Inject(forwardRef(() => RedirectorService))
    public readonly redirectorService: RedirectorService
  ) {
    super(PageRepository, "Page");
  }

  @Transactional()
  addCustomPage(
    newItem: NewCustomPluginPageDto,
    clientId?:string
  ): PromiseLike<Page> {
    const pageTemplate = {
      validate: false,
      type: "custom",
      permissionView: "cms",
      permissionAdd: "",
      permissionDelete: "",
      api: newItem.pageApi.id,
      apiData: newItem.pageApi,
      apiType: "custom",
      name: newItem.name,
      description: newItem.description,
      style: "",
      items: [
        {
          id: "id_" + v4(),
          name: "custom-data",
          attributes: [
            { name: "colspan", value: "2", type: "ATTRIBUTE" },
            { name: "bindingProperty", value: "value", type: "ATTRIBUTE" },
            {
              name: "api",
              value: newItem.api,
              type: "ATTRIBUTE"
            },
            { name: "element", value: newItem.elementName, type: "ATTRIBUTE" }
          ],
          columns: "2",
          page: "",
          api: newItem.api.id,
          componentId: newItem.component.id,
          component: newItem.component
        }
      ]
    };
    const page = new Page();
    page.clientId = clientId;
    page.name = newItem.name;
    page.description = newItem.description;
    page.content = pageTemplate;

    return this.repository.save(page);

  }

  @Transactional()
  public async getApis(url: string): Promise<GlobalInfoDto> {
    return await this.redirectorService.getGlobalInfoDto(url);
  }

  protected getRelations(): Array<string> {
    return [];
  }
}
