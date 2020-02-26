import { ScopeEnum } from './../enum/scope.enum';
import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewScopeDTO {
  @ApiProperty()
  @IsEnum(ScopeEnum)
  name: ScopeEnum | any;

  @ApiProperty({type: String})
  @IsString()
  description: string;

}
