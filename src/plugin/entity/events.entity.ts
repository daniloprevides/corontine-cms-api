import { BasicEntity } from "./../../commons/entity/basic.entity";
import { FieldTypeEnum } from "./../enum/field-type.enum";
import { Fields } from "./fields.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Expose } from "class-transformer";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";

@RequiredScopes(
  "events",
  ScopeEnum.EVENTS_CREATE,
  ScopeEnum.EVENTS_READ,
  ScopeEnum.EVENTS_UPDATE,
  ScopeEnum.EVENTS_DELETE
)
@Entity({ name: "events" })
export class Events extends BasicEntity {
  @Column({
    nullable: false
  })
  @Expose()
  name: string;

  @Column({
    nullable: true
  })
  @Expose()
  description?: string;

  @Column({
    nullable: true,
    name: "output_type"
  })
  @Expose()
  outputType?: FieldTypeEnum;

  @Column("simple-json", { name: "output_object_definition", nullable: true })
  @Expose()
  outputObjectDefinition?: any;

  @Column("simple-json", { nullable: true, name: "default_value" })
  @Expose()
  defaultValue?: any;

  @ManyToOne(
    () => Fields,
    (fields: Fields) => fields.events
  )
  field: Fields;
}
