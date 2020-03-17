import { FieldSelectionTypeEnum } from "./../enum/field-selection.type.enum";
import { Events } from "./events.entity";
import { BasicEntity } from "./../../commons/entity/basic.entity";
import { Attributes } from "./attributes.entity";
import { Components } from "./components.entity";
import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from "typeorm";
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
@Entity({ name: "fields" })
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

  @Column({ nullable: false, default: FieldSelectionTypeEnum.SINGLE })
  @Expose()
  type: string;

  @Column({ nullable: false, name: "default_property_bind", default: "value" })
  @Expose()
  defaultPropertyBind: string;

  @Column({ nullable: false, name: "need_api", default: true })
  @Expose()
  needApi: boolean;

  @Column({ nullable: true, name: "default_event" })
  @Expose()
  defaultEvent: string;

  @Column({ nullable: true, name: "default_event_path" })
  @Expose()
  defaultEventPath: string;

  @Column({ nullable: false, name: "allow_in_composer", default: true , type: Boolean})
  @Expose()
  allowInComposer: boolean;

  @ManyToOne(
    () => Components,
    (components: Components) => components.fields,
    { onDelete: "CASCADE" }
  )
  component: Components;

  @OneToMany(
    () => Attributes,
    (attributes: Attributes) => attributes.field,
    {
      cascade: ["insert", "update", "remove"]
    }
  )
  @JoinColumn({ name: "fields_attributes" })
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
      cascade: ["insert", "update", "remove"]
    }
  )
  @JoinColumn({ name: "fields_events" })
  @RequiredScopes(
    "fields_events",
    ScopeEnum.EVENTS_CREATE,
    ScopeEnum.EVENTS_READ,
    ScopeEnum.EVENTS_UPDATE,
    ScopeEnum.EVENTS_DELETE
  )
  events: Events[];
}
