import { BasicEntity } from "./../../commons/entity/basic.entity";
import { FieldTypeEnum } from "./../enum/field-type.enum";
import { Fields } from "./fields.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Audit } from "../../commons";
import { Expose } from "class-transformer";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";
import { AttributeTypeEnum } from "../enum/attribute-type.enum";

@RequiredScopes(
  "attributes",
  ScopeEnum.ATTRIBUTES_CREATE,
  ScopeEnum.ATTRIBUTES_READ,
  ScopeEnum.ATTRIBUTES_UPDATE,
  ScopeEnum.ATTRIBUTES_DELETE
)
@Entity({ name: "attributes"})
export class Attributes extends BasicEntity {
  @Column({
    nullable: false
  })
  @Expose()
  name: string;

  @Column({
    nullable: true,
    length: 5000
  })
  @Expose()
  description: string;

  @Column("simple-json", { nullable: true })
  @Expose()
  value: any;

  @Column({ nullable: true, default: false })
  @Expose()
  required: boolean;

  @Column("simple-json",{ nullable: true })
  @Expose()
  defaultValue: any;

  @Column("simple-json",{ nullable: true, name: "possible_values" })
  @Expose()
  possibleValues: {id: string, label: string}[];

  @Column({ default: FieldTypeEnum.STRING, nullable: false })
  @Expose()
  type: FieldTypeEnum;

  @Column({ default: AttributeTypeEnum.ATTRIBUTE, nullable: true , name: "attribute_type"})
  @Expose()
  attributeType?: AttributeTypeEnum;

  @Column({ default: true, nullable: true , name: "apply_after_set_in_composer"})
  @Expose()
  applyAfterSetInComposer: boolean;

  @ManyToOne(
    () => Fields,
    (fields: Fields) => fields.attributes, 
  )
  @JoinColumn()
  field: Fields;

  @Column({ nullable: false, default: false , name: "remove_when_false"})
  @Expose()
  removeWhenFalse: boolean;
}
