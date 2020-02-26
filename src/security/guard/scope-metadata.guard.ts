import { ScopeEnum } from '../enum/scope.enum';
import { SetMetadata } from '@nestjs/common';

export const NeedScope = (...scopes: ScopeEnum[]) => SetMetadata('scopes', scopes);
