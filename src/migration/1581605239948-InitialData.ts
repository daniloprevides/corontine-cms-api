import { ScopeEnum } from './../security/enum/scope.enum';
import { Scope } from './../security/entity/scope.entity';
import { Group } from './../security/entity/group.entity';
import { ClientCredentialsEnum } from '../security/enum/client-credentials.enum';
import { ClientCredentials } from '../security/entity/client-credentials.entity';
import {MigrationInterface, QueryRunner, getRepository} from "typeorm";

export class InitialData1581605239948 implements MigrationInterface {

    private async createScopes(){
        const scopeRepository = getRepository<Scope>("scope");
        const createScope = async (scopeEnum:ScopeEnum, description:string) => {
            let scope = new Scope();
            scope.name = scopeEnum;
            scope.description = description;
            return await scopeRepository.save(scope);
        }

        return {
            [ScopeEnum.USER_CREATE] : await createScope(ScopeEnum.USER_CREATE, "Create permission for user"),
            [ScopeEnum.USER_READ] : await createScope(ScopeEnum.USER_READ, "Reading permission for user"),
            [ScopeEnum.USER_DELETE] : await createScope(ScopeEnum.USER_DELETE, "Delete permission for user"),
            [ScopeEnum.USER_UPDATE] : await createScope(ScopeEnum.USER_UPDATE, "Update permission for user"),
            [ScopeEnum.USER_CHANGE_PASSWORD] : await createScope(ScopeEnum.USER_CHANGE_PASSWORD, "Change password permission for user"),
            [ScopeEnum.USER_FORGOT_PASSWORD] : await createScope(ScopeEnum.USER_FORGOT_PASSWORD, "Change password forgotten permission for user"),

            [ScopeEnum.GROUP_CREATE] : await createScope(ScopeEnum.GROUP_CREATE, "Create permission for group"),
            [ScopeEnum.GROUP_READ] : await createScope(ScopeEnum.GROUP_READ, "Reading permission for group"),
            [ScopeEnum.GROUP_DELETE] : await createScope(ScopeEnum.GROUP_DELETE, "Delete permission for group"),
            [ScopeEnum.GROUP_UPDATE] : await createScope(ScopeEnum.GROUP_UPDATE, "Update permission for group"),

            [ScopeEnum.CLIENT_CREDENTIALS_CREATE] : await createScope(ScopeEnum.CLIENT_CREDENTIALS_CREATE, "Create permission for client credentials"),
            [ScopeEnum.CLIENT_CREDENTIALS_READ] : await createScope(ScopeEnum.CLIENT_CREDENTIALS_READ, "Reading permission for client credentials"),
            [ScopeEnum.CLIENT_CREDENTIALS_DELETE] : await createScope(ScopeEnum.CLIENT_CREDENTIALS_DELETE, "Delete permission for client credentials"),
            [ScopeEnum.CLIENT_CREDENTIALS_UPDATE] : await createScope(ScopeEnum.CLIENT_CREDENTIALS_UPDATE, "Update permission for client credentials"),

            [ScopeEnum.TOKEN_INFO] : await createScope(ScopeEnum.TOKEN_INFO, "Allows retrieving informations from a token"),

        }
    }

    public async up(queryRunner: QueryRunner): Promise<any> {

       
        const clientCredentialsRepository = getRepository<ClientCredentials>("client-credentials");
        const groupRepository = getRepository<Group>("group");

        //Creating default scopes
        const scopes = await this.createScopes();

        //Creating default valures for Client Credentials
        let userCredential = new ClientCredentials();
        userCredential.name = ClientCredentialsEnum["USER@APP"].toString();
        userCredential.secret = "OIDAIDOAHPDADH3232";
        userCredential.scopes = [scopes[ScopeEnum.USER_READ]];

        let pluginCredential = new ClientCredentials();
        pluginCredential.name = ClientCredentialsEnum["PLUGIN@APP"].toString();
        pluginCredential.secret = "8202ndhdskHauwbxmsksgsiyfewjlda890AAg0";
        pluginCredential.scopes = Object.values(scopes); //All Scopes

        let adminCredential = new ClientCredentials();
        adminCredential.name = ClientCredentialsEnum["ADMIN@APP"].toString();
        adminCredential.secret = "a3NiYWtpcHFqSVkpOXctcWp3ZcOncW5xdXVUKFQ2NzcpKiYwNzAmKCkqKSnCqCk";
        adminCredential.scopes = Object.values(scopes); //All Scopes

        let testCredential = new ClientCredentials();
        testCredential.name = ClientCredentialsEnum["TEST@APP"].toString();
        testCredential.secret = "TESTTESTAPP";


        userCredential = await clientCredentialsRepository.save(userCredential);
        pluginCredential = await clientCredentialsRepository.save(pluginCredential);
        testCredential = await clientCredentialsRepository.save(testCredential);
        adminCredential = await clientCredentialsRepository.save(adminCredential);

        //Creating default group
        let adminGroup = new Group();
        adminGroup.name = "admin";
        adminGroup.description = "Admin Group";
        adminGroup.scopes = [];
        adminGroup.scopes.push(...Object.values(scopes));
        adminGroup = await groupRepository.save(adminGroup);
    
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
       
    
    }

}
