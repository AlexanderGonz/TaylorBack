import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from '../routes'
import config from '../config'

export default ({ app }: { app: Application }) => {
  /**
   * Health Check endpoints
   */
  app.get('/status', (req: Request, res: Response) => {
    res.send('hello, everything ok!')
    res.status(200).end()
  })
  app.head('/status', (req: Request, res: Response) => {
    res.status(200).end()
  })

  // Set CORS
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

  // Transforms the raw string of req.body into something else
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  // Load API routes
  app.use(config.api.prefix, routes())

  // catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err: any = new Error('404 Not Found')
    err.status = '404'
    next(err)
  })

  // error handler
  app.use((err: any, req: Request, res: Response) => {
    // ONLY SHOW SERVER ERRORS
    const status = Number.parseInt(err.status) || 500
    res.status(status)
    res.json({
      errors: {
        message: err.message,
      },
    })
  })
}
