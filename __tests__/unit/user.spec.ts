import { getRepository } from 'typeorm'

import { User } from '../../src/domain/entity/User'
import { TypeOrmConfig } from '../../src/infra/db/config'
import { UserService } from '../../src/presentation/service/user'

const makeUserService = () => {
  const userRepository = getRepository(User)
  jest.spyOn(userRepository, 'find').mockImplementation(async () => {
    const user = new User({ id: '123', firstName: 'Jose' })
    return [user]
  })
  return new UserService(userRepository)
}
describe('UserService', () => {
  beforeAll(async () => {
    await TypeOrmConfig.createConnection()
  })
  afterAll(async () => {
    await TypeOrmConfig.close()
  })

  beforeEach(async () => {})

  it('Test', async () => {
    const sut = makeUserService()
    const users = await sut.findUser()
    expect(sut).toBeDefined()
    expect(users.length).toBe(1)
  })
})
