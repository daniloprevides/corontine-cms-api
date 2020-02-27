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

@Entity()
export class Components extends BasicEntity {
  @Column({
    nullable: false,
    unique: true
  })
  @Expose()
  name: string;

  @Column({ nullable: true })
  @Expose()
  description: string;

  @Column({ nullable: true, name: "information_url" })
  @Expose()
  informationUrl: string;

  @ManyToOne(
    () => Plugin,
    (plugin: Plugin) => plugin.components
  )
  plugin: Plugin;

  @OneToMany(
    () => Fields,
    (fields: Fields) => fields.component
  )
  @JoinColumn()
  fields: Fields[];
}
