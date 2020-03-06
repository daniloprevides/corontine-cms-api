import { BasicEntity } from "./../../commons/entity/basic.entity";
import { Fields } from "./fields.entity";
import { Plugin } from "./plugin.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn
} from "typeorm";
import { Expose } from "class-transformer";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";

@RequiredScopes(
  "components",
  ScopeEnum.COMPONENTS_CREATE,
  ScopeEnum.COMPONENTS_READ,
  ScopeEnum.COMPONENTS_UPDATE,
  ScopeEnum.COMPONENTS_DELETE
)
@Entity({ name: "components"})
export class Components extends BasicEntity {
  @Column({
    nullable: false
  })
  @Expose()
  name: string;

  @Column({ nullable: true })
  @Expose()
  description: string;

  @Column({ nullable: true, name: "information_url" })
  @Expose()
  informationUrl: string;

  @Column({ nullable: false, name: "url" })
  @Expose()
  url: string;

  @ManyToOne(
    () => Plugin,
    (plugin: Plugin) => plugin.components,
    { onDelete: 'CASCADE', nullable: false}
  )
  @JoinColumn()
  plugin: Plugin;

  @OneToMany(
    () => Fields,
    (fields: Fields) => fields.component,
    {
      cascade: ["insert", "update","remove"]
    }
  )
  @JoinColumn({ name: "components_fields"})
  @RequiredScopes(
    "components_fields",
    ScopeEnum.FIELDS_CREATE,
    ScopeEnum.FIELDS_READ,
    ScopeEnum.FIELDS_UPDATE,
    ScopeEnum.FIELDS_DELETE
  )
  fields: Fields[];
}
