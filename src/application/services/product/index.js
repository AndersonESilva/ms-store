const CreateProductService = require('./CreateProductService');
const GetProductService = require('./GetProductService');
const GetAllProductsService = require('./GetAllProductsService');
const DeleteProductService = require('./DeleteProductService');

module.exports = ({ repository }) => {
    return {
        create: new CreateProductService(repository),
        get: new GetProductService(repository),
        getAll: new GetAllProductsService(repository),
        delete: new DeleteProductService(repository)
    }
}
