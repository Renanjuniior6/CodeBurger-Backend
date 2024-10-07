import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/models/User'
import configDataBase from '../config/database'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class DataBase {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize(
      configDataBase
      // 'postgresql://postgres:3dC4DAf*D-1c4*DCCFdAe4fG*gBC1F42@viaduct.proxy.rlwy.net:46666/railway'
    )

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/CodeBurgerMongo',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  }
}

export default new DataBase()
