import { Repository } from 'typeorm'
import { Bank } from '../../domain/entity/Bank'
import { BankDTO } from '../../shared/dto/bank'

export type BankUseCaseData = {
  bankRepository: Repository<Bank>;
};

export class BankUseCase {
  private bankRepository: Repository<Bank>;

  constructor ({ bankRepository }: BankUseCaseData) {
    this.bankRepository = bankRepository
  }

  async findBank (id: string): Promise<Bank> {
    const bank = await this.bankRepository.findOne(id)
    if (!bank) {
      throw new Error('Bank Error')
    }
    return bank
  }

  async createBank (bankDTO: BankDTO): Promise<void> {
    const bank = new Bank(bankDTO)
    await this.bankRepository.insert(bank)
  }
}
