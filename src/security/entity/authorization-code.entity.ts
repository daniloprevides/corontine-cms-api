import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Audit } from '../../commons';
import { Scope } from './scope.entity';
import { Expose } from 'class-transformer';
import { RequiredScopes } from '../../commons/annotations/entity-scope.decorator';

@Entity({ name: 'authorization-code' })
export class AuthorizationCode extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  code: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  state: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  redirect_uri: string;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  app_name: string;


  @Column({
    type: 'boolean',
    nullable: false,
    unique: false,
    default: false
  })
  consumed: boolean;


  @ManyToMany<Scope>(
    () => Scope,
    (scope: Scope) => scope.codes,
  )
  @JoinTable({name: "authorization-code_scopes"})
  @Expose()
  scopes: Scope[];

}
