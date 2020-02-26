import { Scope } from './scope.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Audit } from '../../commons';
import { Expose } from 'class-transformer';

@Entity({ name: 'client-credentials' })
export class ClientCredentials extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({ type: 'varchar' })
  secret: string;

  @ManyToMany<Scope>(
    () => Scope,
    (scope: Scope) => scope.credentials,
  )
  @JoinTable()
  @Expose()
  scopes: Scope[];

}
