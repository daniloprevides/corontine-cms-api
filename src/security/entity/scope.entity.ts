import { Group } from './group.entity';
import { AuthorizationCode } from './authorization-code.entity';
import { ScopeEnum } from './../enum/scope.enum';
import { ClientCredentials } from './client-credentials.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Audit } from '../../commons/entity';
import { Expose } from 'class-transformer';
import { BasicEntity } from '../../commons/entity/basic.entity';

@Entity({name: 'scope'})
export class Scope extends BasicEntity {


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

  @Expose()
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
  @JoinColumn()
  groups: Group[];


  @ManyToMany<ClientCredentials>(
    () => ClientCredentials,
    (clientCredentials: ClientCredentials) => clientCredentials.scopes,
  )
  @Expose()
  @JoinColumn()
  credentials: ClientCredentials[];

}
