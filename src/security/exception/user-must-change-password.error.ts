import { HttpException, HttpStatus } from '@nestjs/common';

export class UserMustChangePasswordError extends HttpException {
  constructor() {
    super('User must change password', HttpStatus.NOT_ACCEPTABLE);
  }
}
