import express from 'express'
import expressLoader from './loaders/express'

const app = express()

expressLoader({ app })


app.listen(5000, () => console.log('server running'))