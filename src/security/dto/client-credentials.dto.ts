import { ClientCredentials } from './../entity/client-credentials.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ClientCredentialsDTO {

  @ApiProperty({ type: Number })
  @Expose()
  id: ClientCredentials['id'];

  @ApiProperty({type: String})
  @Expose()
  name: ClientCredentials['name'];

  @ApiProperty({type: Array})
  @Expose()
  scopes: ClientCredentials['scopes'];

}
