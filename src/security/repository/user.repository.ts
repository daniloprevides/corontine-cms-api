import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ email }, { relations: ['groups'] });
  }

  async findByEmailAndFacebookId(email: string, facebookId: string) {
    return this.findOne({ email, facebookId });
  }
}
