const ProductRepositoryImpl = require('./ProductRepositoryImpl');

module.exports = ({ database }) => {
    const productModel = database.models.Product;
  
    return {
        productRepository: new ProductRepositoryImpl(productModel),
    }
}
