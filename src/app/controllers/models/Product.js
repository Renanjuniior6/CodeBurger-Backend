import Sequelize, { Model } from 'sequelize'

class Product extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        path: Sequelize.STRING,
        offer: Sequelize.BOOLEAN,
        url: {
          type: Sequelize.VIRTUAL,
          get () {
            return `https://codeburger-backend-production-12f3.up.railway.app/product-file/${this.path}`
          }
        }
      },
      {
        sequelize
      }
    )
    return this
  }

  static associate (models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
  }
}

export default Product
