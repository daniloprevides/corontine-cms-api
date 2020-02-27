import { BasicEntity } from "./../../commons/entity/basic.entity";
import { Attributes } from "./attributes.entity";
import { Components } from "./components.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn
} from "typeorm";
import { Expose } from "class-transformer";

@Entity()
export class Fields extends BasicEntity {
  @Column({
    nullable: false,
    unique: true
  })
  @Expose()
  name: string;

  @Column({ nullable: true })
  @Expose()
  description: string;

  @ManyToOne(
    () => Components,
    (components: Components) => components.fields
  )
  component: Components;

  @OneToMany(
    () => Attributes,
    (attributes: Attributes) => attributes.field
  )
  @JoinColumn()
  attributes: Attributes[];
}
