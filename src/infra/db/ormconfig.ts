import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config()
export default {
  type: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:
    process.env.NODE_ENV === 'test' ? ':memory:' : process.env.DB_DATABASE,
  synchronize: process.env.NODE_ENV === 'test',
  logging: false,
  entities: [path.join(__dirname, '/../../domain/entity/**/*')],
  migrations: [path.join(__dirname, '/../../infra/db/migration/**/*')],
  cli: {
    entitiesDir: 'src/domain/entity',
    migrationsDir: 'src/infra/db/migration/'
  }
}
