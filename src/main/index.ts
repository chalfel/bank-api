import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { TypeOrmConfig } from '../infra/db/config'
import { setupExpress } from './config/express'

const bootstrap = async () => {
  try {
    dotenv.config()
    await TypeOrmConfig.createConnection()
    const app = setupExpress()
    app.listen(process.env.APP_PORT || 3333, () =>
      console.log('Server is running')
    )
  } catch (err) {
    throw new Error(err.message)
  }
}

bootstrap()
