import { Router, Request, Response } from 'express'
import user from '../bbdd/user'
import checkToken from '../helpers/checkToken'
import UserService from '../services/user'

const userRouter = (app: Router) => {
  const router = Router()
  app.use('/user', router)

  const User = new UserService()

  router.get('/', checkToken, async (req: Request, res: Response) => {
    let response = user //mocked user data
    res.send(response)
  })

  // returns all user's fav restaurants
  // checkToken middleware is reponsible of verify if there's an user logged
  router.get('/favs', async (req: Request, res: Response) => {
    let response = await User.fetchFavs()
    res.send(response)
  })

  // this code is commented because there is no persintence layer.
  // so its pointless to make a service.
  // checkToken middleware is reponsible of verify if there's an user logged
  router.put('/addFav', checkToken, async (req: Request, res: Response, next) => {
    try {
      // let response = await User.addFav(req.body.login)
      // res.send(response)
    } catch (e) {
      next(e)
    }
  })

  // this code is commented because there is no persintence layer.
  // so its pointless to make a service.
  // checkToken middleware is reponsible of verify if there's an user logged
  router.put('/removeFav', checkToken, async (req: Request, res: Response, next) => {
    try {
      // let response = await User.removeFav(req.body.login)
      // res.send(response)
    } catch (e) {
      next(e)
    }
  })
}

export default userRouter