import { getRepository } from 'typeorm'
import { BankUseCase } from '../../application/usecase/Bank'
import { Bank } from '../../domain/entity/Bank'
import { BankController } from '../controller/bank'

export const makeBankController = () => {
  const bankRepository = getRepository(Bank)
  const bankUseCase = new BankUseCase({ bankRepository })

  return new BankController({ bankUseCase })
}
