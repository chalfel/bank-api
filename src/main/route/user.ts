import { Router } from 'express'
import { ExpressAdapter } from '../adapter/express'
import { makeUserController } from '../../presentation/factory/user'

export default (router: Router) => {
  const userController = makeUserController()
  router.get('/user', ExpressAdapter.adapt(userController.findUser))
}
