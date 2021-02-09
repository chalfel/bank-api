import express from 'express'
import { setBodyParser } from '../middlewares/bodyParser'
import { setCors } from '../middlewares/cors'
import { setSwagger } from '../middlewares/swagger'
import { setupRoutes } from './route'

export const setupExpress = () => {
  const app = express()
  setupRoutes(app)
  setSwagger(app)
  setBodyParser(app)
  setCors(app)
  return app
}
