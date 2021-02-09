import { ConnectionOptions, createConnection, getConnection } from 'typeorm'
import ormConfig from './ormconfig'
export class TypeOrmConfig {
  static async createConnection () {
    await createConnection(ormConfig as ConnectionOptions)
  }

  static async close () {
    await getConnection().close()
  }

  static async clear () {
    const connection = getConnection()
    const entities = connection.entityMetadatas

    const promises = entities.map((entity) => {
      const repository = connection.getRepository(entity.name)
      return repository.query(`DELETE FROM ${entity.tableName}`)
    })
    await Promise.all(promises)
  }
}
