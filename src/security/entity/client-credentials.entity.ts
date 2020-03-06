import { Scope } from "./scope.entity";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Audit } from "../../commons";
import { Expose } from "class-transformer";
import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
import { ScopeEnum } from "../enum/scope.enum";

@RequiredScopes(
  "user",
  ScopeEnum.CLIENT_CREDENTIALS_CREATE,
  ScopeEnum.CLIENT_CREDENTIALS_READ,
  ScopeEnum.CLIENT_CREDENTIALS_UPDATE,
  ScopeEnum.CLIENT_CREDENTIALS_DELETE
)
@Entity({ name: "client-credentials" })
export class ClientCredentials extends Audit {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true
  })
  name: string;

  @Column({ type: "varchar" })
  secret: string;

  @ManyToMany<Scope>(
    () => Scope,
    (scope: Scope) => scope.credentials
  )
  @JoinTable({ name: "client-credentials_scopes" })
  @Expose()
  scopes: Scope[];
}
