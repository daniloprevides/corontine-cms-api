import { GroupController } from './controller/group.controller';
import { GroupService } from './service/group.service';
import { AuthorizationCodeRepository } from './repository/authorization-code.repository';
import { AuthorizationCode } from './entity/authorization-code.entity';
import { ClientCredentialsService } from './service/client-credentials.service';
import { ClientCredentialsMapper } from './mapper/client-credentials.mapper';
import { ClientCredentialsController } from './controller/client-credentials.controller';
import { ScopeRepository } from './repository/scope.repository';
import { GroupRepository } from './repository/group.repository';
import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
import { ChangePassword } from './entity/change-password.entity';
import { ChangePasswordRepository } from './repository/change-password.repository';
import { SecurityController } from './controller/security.controller';
import { UserController } from './controller/user.controller';
import { ChangePasswordService } from './service/change-password.service';
import { ClientCredentials } from './entity/client-credentials.entity';
import { ClientCredentialsRepository } from './repository/client-credentials.repository';
import { SecurityService } from './service/security.service';
import { UserService } from './service/user.service';
import { UserMapper } from './mapper/user.mapper';
import { Group } from './entity/group.entity';
import { Scope } from './entity/scope.entity';
import { AuthorizationCodeService } from './service/authorization-code.service';
import { GroupMapper } from './mapper/group.mapper';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
              secret: configService.get('jwt').secret,
              signOptions: {
                expiresIn: configService.get('jwt').tokenExpiration,
              },
            }),
            inject: [ConfigService],
          }),
          TypeOrmModule.forFeature([
            AuthorizationCode,
            GroupRepository,
            ClientCredentialsRepository,
            ClientCredentials,
            Scope,
            ScopeRepository,
            User,
            Group,
            UserRepository,
            ChangePassword,
            ChangePasswordRepository, 
            AuthorizationCodeRepository,
            
          ]),   
    ],
    controllers: [SecurityController,UserController,ClientCredentialsController, GroupController],
    providers: [SecurityService, UserService, UserMapper, ClientCredentialsMapper, GroupMapper, ClientCredentialsService, ChangePasswordService, AuthorizationCodeService, GroupService],
    exports: [SecurityService, UserService, ClientCredentialsService, AuthorizationCodeService, GroupService],
})
export class SecurityModule {}
