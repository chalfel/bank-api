import { getRepository } from 'typeorm'
import { User } from '../../domain/entity/User'
import { UserController } from '../controller/user'
import { UserService } from '../service/user'

export const makeUserController = () => {
  const userRepository = getRepository(User)
  const userService = new UserService(userRepository)
  const userController = new UserController(userService)
  return userController
}
