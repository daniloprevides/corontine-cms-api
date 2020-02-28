import { Group } from './group.entity';
import { AuthorizationCode } from './authorization-code.entity';
import { ScopeEnum } from './../enum/scope.enum';
import { ClientCredentials } from './client-credentials.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Audit } from '../../commons/entity';
import { Expose } from 'class-transformer';

@Entity({name: 'scope'})
export class Scope extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  description: string;

  @ManyToMany<ClientCredentials>(
    () => ClientCredentials,
    (credentials: ClientCredentials) => credentials.scopes,
  )
  @Expose()
  credentials: ClientCredentials[];


  @ManyToMany<AuthorizationCode>(
    () => AuthorizationCode,
    (authorizationCodes: AuthorizationCode) => authorizationCodes.scopes,
  )
  @Expose()
  codes: AuthorizationCode[];

  @ManyToMany<Group>(
    () => Group,
    (group: Group) => group.scopes,
  )
  @Expose()
  groups: Group[];

}
