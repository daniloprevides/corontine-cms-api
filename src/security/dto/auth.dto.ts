import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GrantTypeEnum } from '../enum/grant-type.enum';

export class AuthDTO {
  @ApiProperty({ enum: ['client_credentials', 'password', 'refresh_token'] })
  @IsEnum(GrantTypeEnum)
  // tslint:disable-next-line:variable-name
  grant_type: GrantTypeEnum;

  @ApiProperty()
  @IsString()
  @IsOptional()
  username: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  refresh_token: string;


  @ApiProperty()
  @IsString()
  @IsOptional()
  redirect_uri: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  code: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  client_id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  client_secret: string;

  
}
