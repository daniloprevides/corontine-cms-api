import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean, IsBooleanString } from 'class-validator';
import { Expose } from 'class-transformer';
import { User } from '../entity/user.entity';

export class UserUpdateDTO {
  @ApiProperty({ type: String })
  @IsString()
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

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  @IsOptional()
  @Expose()
  mustChangePassword: User['mustChangePassword'];

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  @Expose()
  urlFacebook: User['urlFacebook'];

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  @Expose()
  urlInstagram: User['urlInstagram'];
}
