import { ScopeEnum } from './../enum/scope.enum';
import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NewScopeDTO {
  @ApiProperty({type: String})
  @IsEnum(ScopeEnum)
  @Expose()
  name: ScopeEnum | any;

  @ApiProperty({type: String})
  @IsString()
  @Expose()
  description: string;

}
