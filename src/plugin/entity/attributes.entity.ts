import { BasicEntity } from "./../../commons/entity/basic.entity";
import { FieldTypeEnum } from "./../enum/field-type.enum";
import { Fields } from "./fields.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Audit } from "../../commons";
import { Expose } from "class-transformer";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";

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

  @Column({ nullable: false, default: false })
  @Expose()
  required: boolean;

  @Column("simple-json",{ nullable: true })
  @Expose()
  defaultValue: any;

  @Column({ default: FieldTypeEnum.STRING, nullable: false })
  @Expose()
  type: FieldTypeEnum;

  @ManyToOne(
    () => Fields,
    (fields: Fields) => fields.attributes, 
  )
  field: Fields;
}
