import { BasicEntity } from "./../../commons/entity/basic.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { PageScopeEnum } from "../enum/page-scope.enum";
import { Expose } from "class-transformer";

@RequiredScopes(
  "page",
  PageScopeEnum.PAGE_CREATE,
  PageScopeEnum.PAGE_READ,
  PageScopeEnum.PAGE_UPDATE,
  PageScopeEnum.PAGE_DELETE
)
@Entity({ name: "page" })
export class Page extends BasicEntity {
  @Column({ nullable: false })
  @Expose()
  name: string;

  @Column('simple-json', { nullable: false })
  @Expose()
  content: any;

  @Column({ nullable: true })
  @Expose()
  description?: string;

}
