import { UserService } from '../service/user'

export class UserController {
  userService: UserService;
  constructor (userService: UserService) {
    this.userService = userService
  }

  findUser = async (body: any) => {
    const users = await this.userService.findUser()
    return { statusCode: 200, data: { users } }
  };
}
