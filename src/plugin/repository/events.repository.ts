import { Events } from './../entity/events.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Events)
export class EventsRepository extends Repository<Events> {}
