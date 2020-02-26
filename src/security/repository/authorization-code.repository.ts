import { AuthorizationCode } from '../entity/authorization-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AuthorizationCode)
export class AuthorizationCodeRepository extends Repository<AuthorizationCode> {
  
}
