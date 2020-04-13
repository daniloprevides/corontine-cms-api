import { Mapper } from "./../../commons/mapper/mapper";
import { AuthenticationService } from "./../../commons/services/authentication-service";
import { FindParamsDto } from "./../../commons/dto/find-params.dto";
import { MenuRepository } from "./../repository/menu.repository";
import { GenericService } from "../../commons/services/generic.service";
import {
  Injectable,
  Inject,
  forwardRef,
  ForbiddenException
} from "@nestjs/common";
import { Menu } from "../entity/menu.entity";
import { NewMenuDto } from "../dto/new-menu.dto";
import { UpdateMenuDto } from "../dto/update-menu.dto";
import { MenuDto } from "../dto/menu.dto";
import Request = require("request");
import { MenuAddEntryDTO } from "../dto/menu-add-entry.dto";
import { Transactional } from "typeorm-transactional-cls-hooked";

@Injectable()
export class MenuService extends GenericService<
  Menu,
  MenuRepository,
  NewMenuDto,
  UpdateMenuDto
> {

  public async validateParent(clientId: string, id: string): Promise<boolean> {
    return (
      (await this.repository.findOne({
        where: { clientId: clientId, id: id }
      })) != null
    );
  }

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    @Inject(forwardRef(() => MenuRepository))
    public readonly MenuRepository: MenuRepository,
    @Inject(forwardRef(() => AuthenticationService))
    public readonly authenticationService: AuthenticationService
  ) {
    super(MenuRepository, "Menu");
  }


  @Transactional()
  async addNewEntry(newEntry: MenuAddEntryDTO): Promise<Menu>{
    console.log("Entry",newEntry);

    const menu = await this.repository.findOne({ where: { name: "default" } });
    let customMenu = menu.content?.find(m => m.id === "custom");
    if (!customMenu){      
      menu.content.push({
        id: "custom",
        text: "Addons",
        description: "Custom Menu",
        children: [],
        requiredPermission: "cms"
      });
    }
    customMenu = menu.content.find(m => m.id === "custom");

    //Adding new Entry
    customMenu.children.push({
      "id": newEntry.requiredPermission,
      "text": newEntry.name,
      "children": null,
      "page": newEntry.pageName,
      "idPage": newEntry.pageId,
      "parentId": "custom",
      "requiredPermission": newEntry.requiredPermission
    })

    console.log(customMenu);
    console.log(menu);

    return await this.repository.save(menu);

  }

  public async getMyMenu(request: Request): Promise<MenuDto> {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader)
      throw new ForbiddenException(
        "User has not enought permissions for accessing this resource"
      );

    const localUrl = request.protocol + "://" + request.get("host");
    const tokenDto = await this.authenticationService.getTokenInfo(
      localUrl,
      authorizationHeader
    );
    if (!tokenDto)
      throw new ForbiddenException(
        "User has not enought permissions for accessing this resource"
      );

    const scopes = tokenDto.scope.split(" ");
    const menu = await this.repository.findOne({ where: { name: "default" } });

    //filtering items that user does not have access
    if (menu.content) {
      const getChildren = (items:Array<any>) => {
        const subitems = [];

        if (!items || (items && !items.length)) return null;

        for (const children of items){
          if (scopes.indexOf(children.requiredPermission) >= 0){
            subitems.push(children);
          }
        }

        return subitems;
      }

      const reference = JSON.parse(JSON.stringify(menu.content));
      const items = new Array<any>();
      for (const item of reference){
        item.children = getChildren(item.children);
        if (scopes.indexOf(item.requiredPermission) >= 0 && item.children?.length){
          items.push(item);
        }
      }
      
      menu.content = items;
    }

    

    return new Mapper(Menu, MenuDto).toDto(menu);
  }

  protected getRelations(): Array<string> {
    return [];
  }
}
