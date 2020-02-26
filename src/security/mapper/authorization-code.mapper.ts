import { AuthorizationCodeDTO } from './../dto/authorization-code.dto';
import { AuthorizationCode } from '../entity/authorization-code.entity';

import { Injectable } from '@nestjs/common';
import { Mapper } from '../../commons/mapper';

@Injectable()
export class AuthorizationCodeMapper extends Mapper<AuthorizationCode, AuthorizationCodeDTO> {
  constructor() {
    super(AuthorizationCode, AuthorizationCodeDTO);
  }

  toDto(entityObject: AuthorizationCode): AuthorizationCodeDTO {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: AuthorizationCode[]): AuthorizationCodeDTO[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: AuthorizationCodeDTO): AuthorizationCode {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: AuthorizationCodeDTO[]): AuthorizationCode[] {
    return super.toEntityList(dtoArray);
  }
}
