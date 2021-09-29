import { Router } from 'express'
import restaurantRouter from './restaurant'
import authRouter from './auth'
import userRouter from './user'

export default () => {
  const app = Router()

  restaurantRouter(app)
  authRouter(app)
  userRouter(app)

  return app
}