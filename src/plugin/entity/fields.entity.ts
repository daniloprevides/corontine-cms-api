import { Events } from './events.entity';
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
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";

@RequiredScopes(
  "fields",
  ScopeEnum.FIELDS_CREATE,
  ScopeEnum.FIELDS_READ,
  ScopeEnum.FIELDS_UPDATE,
  ScopeEnum.FIELDS_DELETE
)
@Entity({name: "fields"})
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
    (components: Components) => components.fields,
    { onDelete: 'CASCADE'}
  )
  component: Components;

  @OneToMany(
    () => Attributes,
    (attributes: Attributes) => attributes.field,
    {
      cascade: ["insert", "update","remove"]
    }

  )
  @JoinColumn({ name: "fields_attributes"})
  @RequiredScopes(
    "fields_attributes",
    ScopeEnum.ATTRIBUTES_CREATE,
    ScopeEnum.ATTRIBUTES_READ,
    ScopeEnum.ATTRIBUTES_UPDATE,
    ScopeEnum.ATTRIBUTES_DELETE
  )
  attributes: Attributes[];


  @OneToMany(
    () => Events,
    (events: Events) => events.field,
    {
      cascade: ["insert", "update","remove"]
    }

  )
  @JoinColumn({ name: "fields_events"})
  @RequiredScopes(
    "fields_events",
    ScopeEnum.EVENTS_CREATE,
    ScopeEnum.EVENTS_READ,
    ScopeEnum.EVENTS_UPDATE,
    ScopeEnum.EVENTS_DELETE
  )
  events: Events[];
}
