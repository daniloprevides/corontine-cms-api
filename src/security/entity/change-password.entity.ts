import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from '../../commons/entity';
import { User } from './user.entity';
import { RequiredScopes } from '../../commons/annotations/entity-scope.decorator';
import { ScopeEnum } from '../enum/scope.enum';

@Entity({name: "change-password"})
@RequiredScopes(
  "change-password",
  [ScopeEnum.USER_CHANGE_PASSWORD, ScopeEnum.USER_FORGOT_PASSWORD, ScopeEnum.USER_CREATE],
  [ScopeEnum.USER_CHANGE_PASSWORD, ScopeEnum.USER_FORGOT_PASSWORD, ScopeEnum.USER_READ],
  [ScopeEnum.USER_CHANGE_PASSWORD, ScopeEnum.USER_FORGOT_PASSWORD, ScopeEnum.USER_UPDATE],
  [ScopeEnum.USER_CHANGE_PASSWORD, ScopeEnum.USER_FORGOT_PASSWORD, ScopeEnum.USER_DELETE]
)
export class ChangePassword extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  expirationTime: number;

  @ManyToOne<User>(
    () => User,
    (user: User) => user.changePasswordRequests,
  )
  user: User;
}
