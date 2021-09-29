import config from '../config'
import encripter from '../helpers/encripter'
import user from '../bbdd/user'
import jwt from 'jsonwebtoken'


interface Credentials {
  nickname: string,
  pass: string
}

export default class Auth {
  constructor() { }

  public async login(credentials: Credentials) {
    try {
      if (!credentials || !credentials.nickname || !credentials.pass) {
        return { success: false, message: 'Faltan credenciales' }
      }
      credentials.pass = encripter(credentials.pass)
      let userData = user // usually here I make a find query for a user id in database. For this time I have a mocked user 

      const token = jwt.sign(userData, config.secretKey, {
        expiresIn: 86400
      })
      userData.pass = ''

      return {
        success: true,
        messagge: 'Correct authentication',
        token: token,
        user: user
      }
    } catch (error) {
      throw (error)
    }
  }

  public async encript(pass: string) {
    return encripter(pass)
  }
}

