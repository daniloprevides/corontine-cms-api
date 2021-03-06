import { Scope } from "./scope.entity";
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable
} from "typeorm";
import { Audit } from "../../commons";
import { Expose } from "class-transformer";
import { User } from "./user.entity";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";
import { BasicEntity } from "../../commons/entity/basic.entity";

@RequiredScopes(
  "group",
  ScopeEnum.GROUP_CREATE,
  ScopeEnum.GROUP_READ,
  ScopeEnum.GROUP_UPDATE,
  ScopeEnum.GROUP_DELETE
)
@Entity({ name: "group" })
export class Group extends BasicEntity {


  @Column({
    nullable: false,
    unique: true
  })
  @Expose()
  name: string;

  @Column({
    nullable: true
  })
  @Expose()
  description: string;

  @Column({
    nullable: false, default: false
  })
  @Expose()
  isAdmin: boolean;

  @ManyToMany<Scope>(
    () => Scope,
    (scope: Scope) => scope.groups
  )
  @JoinTable({name: "group_scopes"})
  @Expose()
  scopes: Scope[];

  @ManyToMany<User>(
    () => User,
    (user: User) => user.groups
  )
  @Expose()
  users: User[];
}
