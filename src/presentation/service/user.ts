import { Repository } from 'typeorm'
import { User } from '../../domain/entity/User'

export class UserService {
  private userRepository: Repository<User>;
  constructor (userRepository: Repository<User>) {
    this.userRepository = userRepository
  }

  findUser = () => {
    return this.userRepository.find()
  };
}
