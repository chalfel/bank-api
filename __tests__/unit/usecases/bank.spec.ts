import { getRepository, Repository } from 'typeorm'
import { BankUseCase } from '../../../src/application/usecase/Bank'
import { Bank } from '../../../src/domain/entity/Bank'
import { TypeOrmConfig } from '../../../src/infra/db/config'

describe('Bank UseCase', () => {
  let bankRepository: Repository<Bank>
  const makeBankUseCase = () => {
    bankRepository = getRepository(Bank)
    return new BankUseCase({ bankRepository })
  }

  beforeAll(async () => {
    await TypeOrmConfig.createConnection()
  })

  afterAll(async () => {
    await TypeOrmConfig.close()
  })

  describe('Find Bank', () => {
    it('should return a valid bank', async () => {
      const sut = makeBankUseCase()

      jest
        .spyOn(bankRepository, 'findOne')
        .mockImplementationOnce(async () => new Bank({ id: '1' }))
      const bank = await sut.findBank('1')
      expect(sut).toBeDefined()
      expect(bank).toBeDefined()
      expect(bank.id).toBe('1')
    })
  })
  it('should throw a error because bank doesnt not exist', async () => {
    const sut = makeBankUseCase()
    jest
      .spyOn(bankRepository, 'findOne')
      .mockImplementationOnce(async () => null)

    expect(sut).toBeDefined()
    await expect(sut.findBank('')).rejects.toBeInstanceOf(Error)
  })
})
