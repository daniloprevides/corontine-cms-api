import { BasicEntity } from "./../../commons/entity/basic.entity";
import { FieldTypeEnum } from "./../enum/field-type.enum";
import { Fields } from "./fields.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Audit } from "../../commons";
import { Expose } from "class-transformer";

@Entity()
export class Attributes extends BasicEntity {
  @Column({
    nullable: false
  })
  @Expose()
  name: string;

  @Column("simple-json", { nullable: false })
  @Expose()
  value: any;

  @Column("simple-json", { nullable: false })
  @Expose()
  definition: any;

  @Column({ default: FieldTypeEnum.STRING, nullable: false })
  @Expose()
  type: FieldTypeEnum;

  @ManyToOne(
    () => Fields,
    (fields: Fields) => fields.attributes,
    { onDelete: 'CASCADE' }
  )
  field: Fields;
}
