import user from '../bbdd/user' // fake models
import restaurants from '../bbdd/restaurants' // fake models

export default class Restaurant {
  constructor() { }

  public async fetchFavs() {
    const { favs } = user
    const response = restaurants.filter(rest => favs.includes(rest.id))
    return response
  }
}
