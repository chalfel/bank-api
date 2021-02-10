import { Router } from 'express'
import { ExpressAdapter } from '../adapter/express'
import { makeBankController } from '../../presentation/factory/bank'

export default (router: Router) => {
  const bankController = makeBankController()
  router.use('/bank', router)
  router.get('/:id', ExpressAdapter.adapt(bankController.findBank))
  router.post('', ExpressAdapter.adapt(bankController.createBank))
}
