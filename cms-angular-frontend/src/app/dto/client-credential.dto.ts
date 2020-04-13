import { ScopeDTO } from './scope.dto';

export class ClientCredentialDTO{
  name: string;
  secret?: string;
  scopes: ScopeDTO[]
}
