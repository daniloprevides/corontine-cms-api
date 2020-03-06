import { Menu } from './../entity/menu.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Menu)
export class MenuRepository extends Repository<Menu> {}
