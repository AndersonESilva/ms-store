const productService = require('./product');

module.exports = ({ repository }) => {
    return {
        productService: productService({ repository: repository.productRepository})
    }
}