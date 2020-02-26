import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChangePasswordRepository } from '../repository/change-password.repository';
import { User } from '../entity/user.entity';
import { ChangePassword } from '../entity/change-password.entity';

@Injectable()
export class ChangePasswordService {
  constructor(
    private readonly repository: ChangePasswordRepository,
    private readonly configService: ConfigService,
  ) {}

  public async createChangePasswordRequest(
    user: User,
  ): Promise<ChangePassword> {
    const changePassword: ChangePassword = new ChangePassword();
    changePassword.user = user;
    changePassword.expirationTime = this.configService.get<number>('changePasswordExpirationTime');
    return this.repository.save(changePassword);
  }

  public async findById(id: string) {
    const changePassword: ChangePassword = await this.repository.findOne(
      { id },
      { relations: ['user'] },
    );
    if (!changePassword) {
      throw new NotFoundException();
    }
    return changePassword;
  }
}
