
import { User } from 'src/entities/User';
import { EntityRepository, Repository } from 'typeorm';



@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Add custom methods or queries if needed




}
