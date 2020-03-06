import { MenuRepository } from "./../repository/menu.repository";
import {GenericService} from "../../commons/services/generic.service";
import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { Menu } from "../entity/menu.entity";
import { NewMenuDto } from "../dto/new-menu.dto";
import { UpdateMenuDto } from "../dto/update-menu.dto";

@Injectable()
export class MenuService extends GenericService<
  Menu,
  MenuRepository,
  NewMenuDto,
  UpdateMenuDto
> {
  public async validateParent(clientId: string, id: string): Promise<boolean> {
    return await this.repository.findOne({where: {clientId: clientId, id: id}}) != null;
  }

  constructor(
    @Inject(forwardRef(() => MenuRepository))
    public readonly MenuRepository: MenuRepository,   
    ) {
    super(MenuRepository, "Menu");
  }

  protected getRelations(): Array<string> {
    return ["parent"];
  }
}
