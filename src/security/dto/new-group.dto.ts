import { NewScopeDTO } from './new-scope.dto';
import { IsEnum, IsOptional, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Group } from '../entity/group.entity';

export class NewGroupDTO {
  @ApiProperty()
  @IsString()
  @Expose()
  name: Group["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description: Group["description"];

  @ApiProperty({type: Array})
  @IsArray()
  @IsOptional()
  @Expose()
  scopes: string[];

}
