const ProductController = require("./ProductController")

module.exports = ({ service }) => {
    return {
        productController: new ProductController(service.productService)
    }
}
