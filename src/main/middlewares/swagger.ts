import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from '../../shared/swagger'
export const setSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}
