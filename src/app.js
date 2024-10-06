import express from 'express'
import routes from './routes'
import { resolve } from 'path'
import cors from 'cors'

import './database'

// const corsOption = {
//   // origin: 'https://codeburger-interface-xi.vercel.app',
//   origin: 'http://localhost:3000',
//   credentials: true
// }

class App {
  constructor () {
    this.app = express()
    this.app.use(cors())

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
    this.app.use('/category-file', express.static(resolve(__dirname, '..', 'uploads')))
  }

  routes () {
    this.app.use(routes)
  }
}

export default new App().app
