import cors from 'cors'
import { Application } from 'express'
export const setCors = (app: Application) => {
  app.use(cors())
}
