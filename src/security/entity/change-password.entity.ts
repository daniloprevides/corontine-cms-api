import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from '../../commons/entity';
import { User } from './user.entity';

@Entity()
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
