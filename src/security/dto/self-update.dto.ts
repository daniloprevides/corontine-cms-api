import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { User } from '../entity/user.entity';

export class SelfUpdateDTO {
  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  @Expose()
  id: User['id'];

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  name: User['name'];

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  email: User['email'];

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  @IsOptional()
  urlFacebook: User['urlFacebook'];

  @ApiProperty({ type: String })
  @IsString()
  @Expose()
  @IsOptional()
  urlInstagram: User['urlInstagram'];
}
