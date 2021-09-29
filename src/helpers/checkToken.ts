import { Router, Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'


export default (req: any, res: Response, next: NextFunction) => {
  const checkToken = (token: any) => {

    if (token) {
      let result: any = jwt.verify(token, config.secretKey)
      if (result.id) {
        return { success: true, message: 'Token verified', user: result }
      }
    } else {
      let err: any = new Error('No token provided')
      err.status = 401
      return err
    }
  }

  let token = req.body.token || req.query.token || req.headers['authorization']
  let body = checkToken(token)



  if (body.message == 'Token verified' && body.success) {
    req.user = body.user
    next()
  } else {
    let error: any = new Error(body.message)
    error.status = 401
    next(error)
  }
}