import { Scope } from './scope.entity';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Audit } from '../../commons';
import { Expose } from 'class-transformer';
import { User } from './user.entity';

@Entity()
export class Group extends Audit {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @Column({
    nullable: false,
    unique: true
  })
  @Expose()
  name: string;

  @Column({
    nullable: true,
  })
  @Expose()
  description: string;

  @ManyToMany<Scope>(
    () => Scope,
    (scope: Scope) => scope.groups,
  )
  @JoinTable()
  @Expose()
  scopes: Scope[];

  @ManyToMany<User>(
    () => User,
    (user: User) => user.groups,
  )
  @Expose()
  users: User[];
}
