import { ScopeDTO } from './scope.dto';

export class GroupDTO{
  id: string;
  name: string;
  description: string;
  scopes: ScopeDTO[];
}
