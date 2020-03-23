import { User } from "./../security/entity/user.entity";
import { ScopeEnum } from "../security/enum/scope.enum";
import { Scope } from "../security/entity/scope.entity";
import { Group } from "../security/entity/group.entity";
import { ClientCredentialsEnum } from "../security/enum/client-credentials.enum";
import { ClientCredentials } from "../security/entity/client-credentials.entity";
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import * as crypto from "crypto";

export class SecurityData1581605239948 implements MigrationInterface {
  private async createScopes() {
    const scopeRepository = getRepository<Scope>("scope");
    const createScope = async (scopeEnum: ScopeEnum, description: string) => {
      let scope = new Scope();
      scope.name = scopeEnum;
      scope.description = description;
      return await scopeRepository.save(scope);
    };

    return {
      [ScopeEnum.USER_CREATE]: await createScope(
        ScopeEnum.USER_CREATE,
        "Create permission for user"
      ),
      [ScopeEnum.USER_READ]: await createScope(
        ScopeEnum.USER_READ,
        "Reading permission for user"
      ),
      [ScopeEnum.USER_DELETE]: await createScope(
        ScopeEnum.USER_DELETE,
        "Delete permission for user"
      ),
      [ScopeEnum.USER_UPDATE]: await createScope(
        ScopeEnum.USER_UPDATE,
        "Update permission for user"
      ),
      [ScopeEnum.USER_CHANGE_PASSWORD]: await createScope(
        ScopeEnum.USER_CHANGE_PASSWORD,
        "Change password permission for user"
      ),
      [ScopeEnum.USER_FORGOT_PASSWORD]: await createScope(
        ScopeEnum.USER_FORGOT_PASSWORD,
        "Change password forgotten permission for user"
      ),
      [ScopeEnum.USER_ME_READ]: await createScope(
        ScopeEnum.USER_ME_READ,
        "Permission for getting user own info"
      ),
      [ScopeEnum.USER_ME_UPDATE]: await createScope(
        ScopeEnum.USER_ME_UPDATE,
        "Permission for updating user own info"
      ),

      [ScopeEnum.GROUP_CREATE]: await createScope(
        ScopeEnum.GROUP_CREATE,
        "Create permission for group"
      ),
      [ScopeEnum.GROUP_READ]: await createScope(
        ScopeEnum.GROUP_READ,
        "Reading permission for group"
      ),
      [ScopeEnum.GROUP_DELETE]: await createScope(
        ScopeEnum.GROUP_DELETE,
        "Delete permission for group"
      ),
      [ScopeEnum.GROUP_UPDATE]: await createScope(
        ScopeEnum.GROUP_UPDATE,
        "Update permission for group"
      ),

      [ScopeEnum.CLIENT_CREDENTIALS_CREATE]: await createScope(
        ScopeEnum.CLIENT_CREDENTIALS_CREATE,
        "Create permission for client credentials"
      ),
      [ScopeEnum.CLIENT_CREDENTIALS_READ]: await createScope(
        ScopeEnum.CLIENT_CREDENTIALS_READ,
        "Reading permission for client credentials"
      ),
      [ScopeEnum.CLIENT_CREDENTIALS_DELETE]: await createScope(
        ScopeEnum.CLIENT_CREDENTIALS_DELETE,
        "Delete permission for client credentials"
      ),
      [ScopeEnum.CLIENT_CREDENTIALS_UPDATE]: await createScope(
        ScopeEnum.CLIENT_CREDENTIALS_UPDATE,
        "Update permission for client credentials"
      ),

      [ScopeEnum.SCOPE_CREATE]: await createScope(
        ScopeEnum.SCOPE_CREATE,
        "Create permission for scope"
      ),
      [ScopeEnum.SCOPE_READ]: await createScope(
        ScopeEnum.SCOPE_READ,
        "Reading permission for scope"
      ),
      [ScopeEnum.SCOPE_DELETE]: await createScope(
        ScopeEnum.SCOPE_DELETE,
        "Delete permission for scope"
      ),
      [ScopeEnum.SCOPE_UPDATE]: await createScope(
        ScopeEnum.SCOPE_UPDATE,
        "Update permission for scope"
      ),

      [ScopeEnum.TOKEN_INFO]: await createScope(
        ScopeEnum.TOKEN_INFO,
        "Allows retrieving informations from a token"
      )
    };
  }

  public async up(queryRunner: QueryRunner): Promise<any> {
    const clientCredentialsRepository = getRepository<ClientCredentials>(
      "client-credentials"
    );
    const userRepository = getRepository<User>("user");

    const groupRepository = getRepository<Group>("group");

    //Creating default scopes
    const scopes = await this.createScopes();

    let defaultUserCredential = new ClientCredentials();
    defaultUserCredential.name = ClientCredentialsEnum["USER_PERMISSIONS@APP"];
    defaultUserCredential.secret =
      "QSBNaW5oYSB0aWEgdGluaGEgdW1hIHZhcXVpbmhhIHF1ZSBkaXppYSAyMDIwIHZpcmVpIHZlZ2Fubw==";

    await clientCredentialsRepository.save(defaultUserCredential);

    //Creating default group
    let adminGroup = new Group();
    adminGroup.name = "admin";
    adminGroup.description = "Admin Group";
    adminGroup.isAdmin = true;
    adminGroup.scopes = [];
    adminGroup.scopes.push(...Object.values(scopes));
    adminGroup = await groupRepository.save(adminGroup);

    //Creating default user
    let defaultUser = new User();
    defaultUser.email = "daniloprevides@gmail.com";
    defaultUser.name = "admin";
    defaultUser.mustChangePassword = true;
    defaultUser.salt = crypto.randomBytes(16).toString("hex");
    defaultUser.password = crypto
      .pbkdf2Sync("Change@Password", defaultUser.salt, 1000, 64, `sha512`)
      .toString(`hex`);
    defaultUser.groups = [adminGroup];

    await userRepository.save(defaultUser);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
