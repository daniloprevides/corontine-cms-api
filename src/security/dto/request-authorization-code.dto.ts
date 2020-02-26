import { AuthorizationCode } from '../entity/authorization-code.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class RequestAuthorizationCodeDTO {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  response_type: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  client_id: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  redirect_uri: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  scope: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  state: string;


}
