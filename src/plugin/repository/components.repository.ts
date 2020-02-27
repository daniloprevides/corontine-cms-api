import { Components } from "../entity/components.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Components)
export class ComponentsRepository extends Repository<Components> {}
