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
import { In, QueryBuilder, SelectQueryBuilder } from "typeorm";

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
    @Inject(forwardRef(() => MenuRepository))
    public readonly MenuRepository: MenuRepository,
    @Inject(forwardRef(() => AuthenticationService))
    public readonly authenticationService: AuthenticationService
  ) {
    super(MenuRepository, "Menu");
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
    let menu = await this.repository.findOne({ where: { name: "default" } });

    return new Mapper(Menu, MenuDto).toDto(menu);
  }

  protected getRelations(): Array<string> {
    return [];
  }
}
