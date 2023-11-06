import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/controllers/models/User'
// import configDataBase from '../config/database'
import Product from '../app/controllers/models/Product'
import Category from '../app/controllers/models/Category'

const models = [User, Product, Category]

class DataBase {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize(
      'postgres://postgres:aDGA2D2BFf2*cEgGfcad6a6aE35a*CaE@roundhouse.proxy.rlwy.net:42769/railway'
    )

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:DeggD6F-HF6G6eB-cdgG-21Df35DH5cf@viaduct.proxy.rlwy.net:41765',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  }
}

export default new DataBase()
