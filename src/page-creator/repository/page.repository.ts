import { Page } from './../entity/page.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Page)
export class PageRepository extends Repository<Page> {}
