import { EventsDto } from './../dto/events.dto';
import { Events } from './../entity/events.entity';
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";

@Injectable()
export class EventsMapper extends Mapper<Events, EventsDto> {
  constructor() {
    super(Events, EventsDto);
  }

  toDto(entityObject: Events): EventsDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Events[]): EventsDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: EventsDto): Events {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: EventsDto[]): Events[] {
    return super.toEntityList(dtoArray);
  }
}
