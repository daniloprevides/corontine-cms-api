import { EntityActionEnum } from './../../commons/enum/entity.action.enum';
import { EntityMetadataService } from './../../entity-metadata.service';
import { SecurityConstants } from "./../constants";
import { Constants } from "./../../commons/constants";
import * as crypto from "crypto";
import {
  BadRequestException,
  ConflictException,
  forwardRef,
  GoneException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from "@nestjs/common";

import { ChangePasswordService } from "./change-password.service";
import { MailerService } from "@nest-modules/mailer";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { ConfigService } from "@nestjs/config";
import { Group } from "../entity/group.entity";
import { UserRepository } from "../repository/user.repository";
import { User } from "../entity/user.entity";
import { NewUserDTO } from "../dto/new-user.dto";
import { UserUpdateDTO } from "../dto/user-update.dto";
import { ForgotPasswordDTO } from "../dto/forgot-password";
import { ChangePassword } from "../entity/change-password.entity";
import { UserNotFoundError } from "../exception/user-not-found.error";
import { AdminChangePasswordDTO } from "../dto/admin-change-password.dto";
import { ChangePasswordDTO } from "../dto/change-password.dto";
import { ChangePasswordForgotFlowDTO } from "../dto/change-password-forgot-flow.dto";
import { GroupRepository } from "../repository/group.repository";
import { Scope } from "../entity/scope.entity";
import { ScopeEnum } from '../enum/scope.enum';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly repository: UserRepository,
    @Inject(forwardRef(() => ChangePasswordService))
    private readonly changePasswordService: ChangePasswordService,
    @Inject(forwardRef(() => MailerService))
    private readonly mailerService: MailerService,
    @Inject(forwardRef(() => ConfigService))
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => GroupRepository))
    private readonly groupRepository: GroupRepository
  ) {}

  @Transactional()
  public async getAll(): Promise<User[]> {
    return this.repository.find();
  }

  @Transactional()
  public async findById(id: User["id"], loadScopes = false): Promise<User> {
    const options = {
      relations: ["groups"]
    };

    if (loadScopes) options.relations.push("groups.scopes");

    const user: User | undefined = await this.repository.findOne(id, options);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }

  @Transactional()
  public async add(user: NewUserDTO): Promise<User> {
    const salt: string = this.createSalt();
    const hashPassword: string = this.createHashedPassword(user.password, salt);
    //Find groupd by ID
    let groups: Array<Group> = new Array();
    if (user.groups) {
      for (let groupName of user.groups) {
        groups.push(
          await this.groupRepository.findOne({ where: { name: groupName } })
        );
      }
    }
    try {
      return await this.repository.save({
        ...user,
        salt,
        password: hashPassword,
        groups: groups
      });
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY") {
        throw new ConflictException("User with same email already exists");
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  @Transactional()
  public async delete(id: User["id"]): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }

  @Transactional()
  public async update(
    id: User["id"],
    userUpdatedInfo: UserUpdateDTO
  ): Promise<User> {
    const user: User = await this.findById(id);
    return await this.repository.save({
      ...user,
      ...userUpdatedInfo,
      groups: user.groups,
      id: user.id
    });
  }

  public async forgotPassword(
    forgotPasswordDTO: ForgotPasswordDTO
  ): Promise<string> {
    const user: User = await this.findByEmail(forgotPasswordDTO.email);
    const changePassword: ChangePassword = await this.changePasswordService.createChangePasswordRequest(
      user
    );
    await this.sendChangePasswordEmail(user, changePassword.id);
    return changePassword.id;
  }

  @Transactional()
  public async findByEmail(email: string): Promise<User> {
    const user: User = await this.repository.findByEmail(email);
    if (!user) {
      throw new UserNotFoundError();
    }
    return user;
  }

  @Transactional()
  public async findByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    const user: User = await this.findByEmail(email);
    if (!user.validPassword(password)) {
      throw new UserNotFoundError();
    }
    return user;
  }

  @Transactional()
  public async findByEmailAndFacebookId(
    email: string,
    facebookId: string
  ): Promise<User> {
    const user: User = await this.repository.findByEmailAndFacebookId(
      email,
      facebookId
    );
    if (!user) {
      throw new UserNotFoundError();
    }
    return user;
  }

  @Transactional()
  public async validateChangePassword(changePasswordRequestId: string) {
    const changePassword: ChangePassword = await this.changePasswordService.findById(
      changePasswordRequestId
    );
    if (
      Date.now() >
      new Date(changePassword.createdAt).getTime() +
        changePassword.expirationTime
    ) {
      throw new GoneException();
    }
  }

  @Transactional()
  public async getAllUserScopes(id: User["id"]): Promise<Array<Scope>> {
    let user = await this.findById(id, true);
    if (!user) throw new UserNotFoundError();

    const scopes = new Array<Scope>();
    user.groups.forEach(g => g.scopes.forEach(i => scopes.push(i)));

    return scopes;
  }

  @Transactional()
  public async adminChangePassword(
    id: string,
    changePasswordDTO: AdminChangePasswordDTO
  ): Promise<User> {
    if (
      changePasswordDTO.newPassword !== changePasswordDTO.confirmNewPassword
    ) {
      throw new BadRequestException("New passwords does not match");
    }
    const user: User = await this.findById(id);
    user.salt = this.createSalt();
    user.password = this.createHashedPassword(
      changePasswordDTO.newPassword,
      user.salt
    );
    return await this.repository.save(user);
  }

  @Transactional()
  public async changePassword(
    id: string,
    changePasswordDTO: ChangePasswordDTO
  ): Promise<User> {
    if (
      changePasswordDTO.newPassword !== changePasswordDTO.confirmNewPassword
    ) {
      throw new BadRequestException("New passwords does not match");
    }
    const user: User = await this.findById(id);
    if (!user.validPassword(changePasswordDTO.password)) {
      throw new BadRequestException(
        "Old password does not match with given password"
      );
    }
    user.mustChangePassword = false;

    //Adding scopes to context
    EntityMetadataService.Instance.addTableScope("user", EntityActionEnum.UPDATE, [ScopeEnum.USER_UPDATE])

    user.salt = this.createSalt();
    user.password = this.createHashedPassword(
      changePasswordDTO.newPassword,
      user.salt
    );
    return await this.repository.save(user);
  }

  @Transactional()
  public async changePasswordForgotPasswordFlow(
    changePasswordRequestId: string,
    changePasswordDTO: ChangePasswordForgotFlowDTO
  ): Promise<User> {
    if (
      changePasswordDTO.newPassword !== changePasswordDTO.confirmNewPassword
    ) {
      throw new BadRequestException("passwords does not match");
    }
    const { user }: ChangePassword = await this.changePasswordService.findById(
      changePasswordRequestId
    );
    user.salt = this.createSalt();
    user.password = this.createHashedPassword(
      changePasswordDTO.newPassword,
      user.salt
    );
    return await this.repository.save(user);
  }

  private createSalt(): string {
    return crypto.randomBytes(16).toString("hex");
  }

  private createHashedPassword(password: string, salt: string): string {
    return crypto
      .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
      .toString(`hex`);
  }

  private async sendChangePasswordEmail(
    user: User,
    changePasswordRequestId: string
  ): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: user.email,
        from: this.configService.get("mail").from,
        subject: "Password Change Request",
        template: "change-password",
        context: {
          name: user.name,
          urlTrocaSenha: `${this.configService.get("serverUrl")}/${
            Constants.API_PREFIX
          }/${Constants.API_VERSION_1}/${
            SecurityConstants.USER_ENDPOINT
          }/forgot-password/${changePasswordRequestId}`
        }
      });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
