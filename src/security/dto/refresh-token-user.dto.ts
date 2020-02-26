import { User } from "../entity/user.entity";

export class RefreshTokenUserDTO {
  user: User;

  isRefreshToken: boolean;

}
