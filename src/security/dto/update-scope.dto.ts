import { ScopeEnum } from './../enum/scope.enum';
import { IsString, IsEnum, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeFieldName, ExposeFieldNamesForPage, ComponentDefinition, PageRequirePermission, PermissionsDefinition } from '../../commons/annotations/expose-field-name.decorator';
import { GroupDTO } from './group.dto';

@PageRequirePermission(new PermissionsDefinition(ScopeEnum.SCOPE_UPDATE,ScopeEnum.SCOPE_CREATE, ScopeEnum.SCOPE_DELETE))
export class UpdateScopeDTO {
  @ApiProperty({ type: String })
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text", readonly: "true"}))
  id: string;

  @ApiProperty({type: String})
  @IsString()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "text"}))
  name: ScopeEnum | any;

  @ApiProperty({type: String})
  @IsString()
  @IsOptional()
  @Expose()
  @ExposeFieldName
  @ExposeFieldNamesForPage(new ComponentDefinition("input-data", {type: "textarea"}))
  description: string;

  @ApiProperty({ type: () => GroupDTO })
  @IsArray()
  @ExposeFieldNamesForPage(
    new ComponentDefinition("table-data", {
      sourcefield: "groups",
      api: "group_api",
      page: "edit-group",
      sortable: true,
      filterable: true,
      size: 10,
      pageAdd: "add-group",
      targetfield: "scopes",
      isArray: true,
      crud: true,
      fieldDefinition: [
        {
          name: "name",
          value: "Name",
          order: 1,
          visible: true,
          component: "label"
        },
        {
          name: "description",
          value: "Description",
          order: 2,
          visible: true,
          component: "label"
        }
      ]
    })
  )
  @ExposeFieldNamesForPage(
    new ComponentDefinition("title-data", {
      text: "Groups", position: "center", description: "Groups attached to this scope",  titleType: "subtitle"
  }))
  @Expose()
  groups: GroupDTO[];

}
