import { SetMetadata } from '@nestjs/common';

export const NeedScope = (...scopes:  string[]) => SetMetadata('scopes', scopes);
