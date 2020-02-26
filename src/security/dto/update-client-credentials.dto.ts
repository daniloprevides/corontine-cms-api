import { NewScopeDTO } from './new-scope.dto';
import { IsEnum, IsOptional, IsString, IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientCredentialsDTO {

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
