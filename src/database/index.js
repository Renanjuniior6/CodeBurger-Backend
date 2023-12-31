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
      'postgresql://postgres:3dC4DAf*D-1c4*DCCFdAe4fG*gBC1F42@viaduct.proxy.rlwy.net:46666/railway'
    )

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:adEbBg-d1BHdDDb2BAFDce1h35AahEF6@monorail.proxy.rlwy.net:21675',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  }
}

export default new DataBase()
