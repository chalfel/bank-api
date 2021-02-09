import { Application, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'
export const setupRoutes = (app: Application): void => {
  const router = Router()
  const routesPath = path.join(__dirname, '../../main/route/')
  app.use('/api', router)
  readdirSync(routesPath).map(async (file) => {
    if (!file.includes('.test.')) {
      const importedfile = await import(routesPath + file)
      importedfile.default(router)
    }
  })
}
