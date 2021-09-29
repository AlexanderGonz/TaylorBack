import { Router, Request, Response } from 'express'
import AuthService from '../services/auth'


const authRouter = (app: Router) => {
  const router = Router()
  app.use('/auth', router)

  const Auth = new AuthService()
  router.post('/', async (req: Request, res: Response, next) => {
    try {
      let response = await Auth.login(req.body.login)
      res.send(response)
    } catch (e) {
      next(e)
    }
  })


  //helper for generate encripted password. this is made for the mocked user. This way I can get an encripted password from postman or browser
  router.get('/generate', async (req: Request, res: Response, next) => {
    try {
      let response = await Auth.encript('taylor')
      res.send(response)
    } catch (e) {
      next(e)
    }
  })
}

export default authRouter