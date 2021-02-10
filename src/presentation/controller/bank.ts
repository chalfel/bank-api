import { BankUseCase } from '../../application/usecase/Bank'
import { ExpressResponseBody } from '../../main/adapter/express'
import { BankDTO } from '../../shared/dto/bank'

type BankControllerData = {
  bankUseCase: BankUseCase;
};
export class BankController {
  bankUseCase: BankUseCase;
  constructor ({ bankUseCase }: BankControllerData) {
    this.bankUseCase = bankUseCase
  }

  createBank = async (payload: any): Promise<ExpressResponseBody> => {
    const { body } = payload
    const { name } = body
    const bankDTO = new BankDTO({ name })
    await this.bankUseCase.createBank(bankDTO)

    return { statusCode: 201, data: { message: 'Bank was Created' } }
  };

  findBank = async (payload: any): Promise<ExpressResponseBody> => {
    try {
      const { params } = payload
      const { id } = params

      const bank = await this.bankUseCase.findBank(id)

      return { statusCode: 200, data: { bank } }
    } catch (err) {
      return { statusCode: 500, data: { message: err.message } }
    }
  };
}
