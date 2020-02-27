import { Attributes } from "./../entity/attributes.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Attributes)
export class AttributesRepository extends Repository<Attributes> {}
