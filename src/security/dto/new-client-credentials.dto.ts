import { NewScopeDTO } from './new-scope.dto';
import { IsEnum, IsOptional, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewClientCredentialsDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  secret: string;

  @ApiProperty({type: Array})
  @IsArray()
  scopes: NewScopeDTO[];

}
