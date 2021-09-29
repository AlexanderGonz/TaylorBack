import restaurants from '../bbdd/restaurants'

export default class Restaurant {
  constructor() { }

  public async fetchAll() {
    return restaurants
  }

  public async fetch(id: any) {
    let rest = restaurants.filter(rest => rest.id == id)
    return rest
  }
}
