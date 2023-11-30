import Sequelize, { Model } from 'sequelize'

class Category extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get () {
            return `https://codeburger-backend-production-6629.up.railway.app/category-file/${this.path}`
          }
        }
      },
      {
        sequelize
      }
    )

    return this
  }
}

export default Category
