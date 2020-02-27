import { Scope } from './../entity/scope.entity';
import { Group } from './../entity/group.entity';
import { NewScopeDTO } from './new-scope.dto';
import { IsEnum, IsOptional, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class GroupDTO {

  @ApiProperty()
  @IsString()
  @Expose()
  id: Group["id"];

  @ApiProperty()
  @IsString()
  @Expose()
  name: Group["name"];

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  description: Group["description"];

  @ApiProperty({type: () => NewScopeDTO})
  @IsArray()
  @IsOptional()
  @Expose()
  @Type(() => NewScopeDTO)
  scopes: NewScopeDTO[];

}
