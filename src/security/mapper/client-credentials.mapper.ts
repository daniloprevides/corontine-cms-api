import { ClientCredentialsDTO } from './../dto/client-credentials.dto';
import { ClientCredentials } from './../entity/client-credentials.entity';
import { Injectable } from '@nestjs/common';
import { Mapper } from '../../commons/mapper';

@Injectable()
export class ClientCredentialsMapper extends Mapper<ClientCredentials, ClientCredentialsDTO> {
  constructor() {
    super(ClientCredentials, ClientCredentialsDTO);
  }

  toDto(entityObject: ClientCredentials): ClientCredentialsDTO {
    return super.toDto(entityObject,false);
  }

  toDtoList(entityArray: ClientCredentials[]): ClientCredentialsDTO[] {
    return super.toDtoList(entityArray,false);
  }

  toEntity(dtoObject: ClientCredentialsDTO): ClientCredentials {
    return super.toEntity(dtoObject,false);
  }

  toEntityList(dtoArray: ClientCredentialsDTO[]): ClientCredentials[] {
    return super.toEntityList(dtoArray,false);
  }
}
