import { BasicEntity } from "./../../commons/entity/basic.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { MenuScopeEnum } from "../enum/menu-scope.enum";
import { Expose } from "class-transformer";

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
  @Expose()
  name: string;

  @Column({ nullable: false })
  @Expose()
  label: string;

  @Column({ nullable: true })
  @Expose()
  description?: string;

  @Column({ nullable: true })
  @Expose()
  link?: string;

  @Column({ nullable: true, default: 1 })
  @Expose()
  order: number;

  @Column({ nullable: false, name: "required_permission" })
  @Expose()
  requiredPermission: string;

  @ManyToOne(
    type => Menu,
    menu => menu.children
  )
  @JoinColumn()
  @Expose()
  parent: Menu;
  

  @OneToMany(
    type => Menu,
    menu => menu.parent,
    {
      cascade: true,
      onDelete: "CASCADE"
    }
  )
  @JoinColumn()
  @Expose()
  children: Menu[];
}
