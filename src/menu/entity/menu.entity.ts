import { BasicEntity } from "./../../commons/entity/basic.entity";
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn
} from "typeorm";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { MenuScopeEnum } from "../enum/menu-scope.enum";

@RequiredScopes(
  "menu",
  MenuScopeEnum.MENU_CREATE,
  MenuScopeEnum.MENU_READ,
  MenuScopeEnum.MENU_UPDATE,
  MenuScopeEnum.MENU_DELETE
)
@Entity({ name: "menu" })
export class Menu extends BasicEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  label: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false, name: "required_permission" })
  requiredPermission: string;

  @OneToOne(
    type => Menu,
    menu => menu.menu,
    {
      cascade: true
    }
  )
  @JoinColumn()
  parent: Menu;

  @OneToOne(
    type => Menu,
    menu => menu.parent,    
  )
  menu: Menu;
}
