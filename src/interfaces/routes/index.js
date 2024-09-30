
const productRoutes = require('./productRoutes');

module.exports = ({ controller }) => {
    return {
        productRoutes: productRoutes({ controller: controller.productController}),
    }
}
