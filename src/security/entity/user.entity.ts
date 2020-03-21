import { ScopeEnum } from "./../enum/scope.enum";
import { Group } from "./group.entity";
import * as crypto from "crypto";
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable
} from "typeorm";
import { Audit } from "../../commons";
import { ChangePassword } from "./change-password.entity";
import { Expose } from "class-transformer";

import { RequiredScopes } from "../../commons/annotations/entity-scope.decorator";
@RequiredScopes(
  "user",
  ScopeEnum.USER_CREATE,
  [ScopeEnum.USER_READ,ScopeEnum.USER_ME_READ],
  [ScopeEnum.USER_UPDATE, ScopeEnum.USER_ME_UPDATE, ScopeEnum.USER_CHANGE_PASSWORD],
  [ScopeEnum.USER_DELETE]
)
@Entity({ name: "user" })
export class User extends Audit {
  @PrimaryGeneratedColumn("uuid")
  @Expose()
  id: string;

  @Column({
    nullable: false
  })
  @Expose()
  name: string;

  @Column({ unique: true })
  @Expose()
  email: string;

  @Column()
  @Expose()
  password: string;

  @Column({ name: "url_facebook", nullable: true })
  @Expose()
  urlFacebook: string;

  @Column({ name: "url_instagram", nullable: true })
  @Expose()
  urlInstagram: string;

  @Column({ name: "home_page", nullable: false, default: "home" })
  @Expose()
  homePage: string;

  @Column({
    default: ""
  })
  @Expose()
  salt: string;

  @Column({
    default: false,
    name: "must_change_password"
  })
  @Expose()
  mustChangePassword: boolean;

  @Column({ name: "facebook_id", nullable: true })
  @Expose()
  facebookId: string;

  @Column({ name: "google_sub", nullable: true })
  @Expose()
  googleSub: string;

  @ManyToMany<Group>(
    () => Group,
    (group: Group) => group.users
  )
  @JoinTable({ name: "user_groups" })
  @Expose()
  @RequiredScopes(
    "user_groups",
    ScopeEnum.GROUP_CREATE,
    ScopeEnum.GROUP_READ,
    ScopeEnum.GROUP_UPDATE,
    ScopeEnum.GROUP_DELETE
  )
  groups: Group[];

  @OneToMany<ChangePassword>(
    () => ChangePassword,
    (changePassword: ChangePassword) => changePassword.user
  )
  @Expose()
  changePasswordRequests: ChangePassword[];

  validPassword(password: string) {
    const hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
      .toString(`hex`);
    return this.password === hash;
  }
}
