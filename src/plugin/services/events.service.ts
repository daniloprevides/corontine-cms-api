import { UpdateEventsDto } from './../dto/update-events.dto';
import { NewEventsDto } from './../dto/new-events.dto';
import { FieldsRepository } from './../repository/fields.repository';
import { Events } from './../entity/events.entity';
import {GenericService} from "../../commons/services/generic.service";
import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { EventsRepository } from '../repository/events.repository';

@Injectable()
export class EventsService extends GenericService<
  Events,
  EventsRepository,
  NewEventsDto,
  UpdateEventsDto
> {

  constructor(
    @Inject(forwardRef(() => EventsRepository))
    public readonly eventsRepository: EventsRepository,
    @Inject(forwardRef(() => FieldsRepository))
    public readonly fieldsRepository: FieldsRepository
    
    ) {
    super(eventsRepository, "Events");
  }

  public async validateParent(clientId: string, id: string): Promise<boolean> {
    return await this.fieldsRepository.findOne({where: {clientId: clientId, id: id}}) != null;
  }

  protected getRelations(): Array<string> {
    return ["field"];
  }
}
