import { Router, Request, Response } from 'express'
import data from '../bbdd/restaurants'
import RestaurantService from '../services/restaurant'


const restaurantRouter = (app: Router) => {
  const router = Router()
  app.use('/restaurant', router)

  const Restaurant = new RestaurantService()

  router.get('/', async (req: Request, res: Response, next) => {
    let response = await Restaurant.fetchAll()
    res.send(response);

  })

  router.get('/:id', async (req: Request, res: Response, next) => {
    let response = await Restaurant.fetch(req.params.id)
    res.send(response)
  })

  router.post('/', async (req: Request, res: Response, next) => {
    // let response = await Restaurant.add(req.body.restaurant) 
    // res.send(response)
  })
  router.put('/', async (req: Request, res: Response, next) => {
    // let response = await Restaurant.update(req.body.restaurant) 
    // res.send(response)
  })
  router.delete('/', async (req: Request, res: Response, next) => {
    // let response = await Restaurant.delete(req.body.restaurant) 
    // res.send(response)
  })
}

export default restaurantRouter