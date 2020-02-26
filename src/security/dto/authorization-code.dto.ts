import { AuthorizationCode } from '../entity/authorization-code.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class AuthorizationCodeDTO {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  name: AuthorizationCode["code"];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  state: AuthorizationCode["state"];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  redirect_uri: AuthorizationCode["redirect_uri"];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  scopes: Array<String>;

}
