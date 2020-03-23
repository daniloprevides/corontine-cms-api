import { BasicEntity } from "./../../commons/entity/basic.entity";
import { Column, Entity} from "typeorm";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { MenuScopeEnum } from "../enum/menu-scope.enum";
import { Expose } from "class-transformer";

@RequiredScopes(
  "menu",
  MenuScopeEnum.MENU_CREATE,
  [MenuScopeEnum.MENU_READ, MenuScopeEnum.MY_MENU,MenuScopeEnum.MENU_ADD_ENTRY],
  [MenuScopeEnum.MENU_UPDATE,MenuScopeEnum.MENU_ADD_ENTRY],
  MenuScopeEnum.MENU_DELETE
)
@Entity({ name: "menu" })
export class Menu extends BasicEntity {
  @Column({ nullable: false })
  @Expose()
  name: string;

  @Column("simple-json",{ nullable: false })
  @Expose()
  content?: any;

  @Column({ nullable: true })
  @Expose()
  bgColor?: string;

  @Column({ nullable: false, name: "required_permission" })
  @Expose()
  requiredPermission: string;

}
