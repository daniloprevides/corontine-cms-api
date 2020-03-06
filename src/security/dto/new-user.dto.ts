import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { User } from '../entity/user.entity';

export class NewUserDTO {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  name: User['name'];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  email: User['email'];

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  @IsOptional()
  @Expose()
  mustChangePassword: User["mustChangePassword"];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  password: User['password'];

  @ApiProperty({ type: String })
  @Expose()
  urlFacebook: User['urlFacebook'];

  @ApiProperty({ type: String })
  @Expose()
  urlInstagram: User['urlInstagram'];

  @ApiProperty({ type: Array })
  @Expose()
  groups: Array<string>;



}
