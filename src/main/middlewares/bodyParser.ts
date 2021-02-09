import express, { Application } from 'express'

export const setBodyParser = (app: Application) => {
  app.use(express.json())
}
