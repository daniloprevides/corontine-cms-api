import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { User } from '../entity/user.entity';

export class TokenDto {
  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  id: string;

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  type: string;

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  username: string;

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  secret: string;

  @ApiProperty({ type: Number })
  @IsString()
  @Expose()
  iat: number;

  @ApiProperty({ type: Number })
  @IsString()
  @Expose()
  exp: number;

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  scope: string;

}
