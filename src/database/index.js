import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/controllers/models/User'
import configDataBase from '../config/database'
import Product from '../app/controllers/models/Product'
import Category from '../app/controllers/models/Category'

const models = [User, Product, Category]

class DataBase {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize(configDataBase)

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/codeburger',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  }
}

export default new DataBase()
