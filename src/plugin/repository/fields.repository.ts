import { EntityRepository, Repository } from "typeorm";
import { Fields } from "../entity/fields.entity";

@EntityRepository(Fields)
export class FieldsRepository extends Repository<Fields> {}
