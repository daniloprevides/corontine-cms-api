import { ScopeEnum } from './../enum/scope.enum';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, PageRequirePermission, PermissionsDefinition } from '../../commons/annotations/expose-field-name.decorator';

@PageRequirePermission(new PermissionsDefinition(ScopeEnum.SCOPE_CREATE,ScopeEnum.SCOPE_CREATE, ScopeEnum.SCOPE_DELETE))
export class NewScopeDTO {
  @ApiProperty({type: String})
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  name: ScopeEnum | any;

  @ApiProperty({type: String})
  @IsString()
  @Expose()
  @ExposeFieldName
  @IsOptional()
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  description: string;

}
