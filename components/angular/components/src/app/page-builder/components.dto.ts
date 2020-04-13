import { EventsDTO } from './events.dto';
import { AttributesDTO } from './attributes.dto';

export class ComponentsDTO{
  label: string;
  uniqueId: string;
  id: string;
  tooltip: string;
  type: string;
  defaultEventPath: string;
  needApi: boolean;
  defaultPropertyBind: string;
  defaultEvent: string;
  events: EventsDTO[];
  attributes: AttributesDTO[];
  element: any;
  selected? = false;
}
