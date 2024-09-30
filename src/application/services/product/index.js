const CreateProductService = require('./CreateProductService');
const GetProductService = require('./GetProductService');
const GetAllProductsService = require('./GetAllProductsService');
const DeleteProductService = require('./DeleteProductService');
const UpdateProductService = require('./UpdateProductService');

module.exports = ({ repository }) => {
    return {
        create: new CreateProductService(repository),
        get: new GetProductService(repository),
        getAll: new GetAllProductsService(repository),
        delete: new DeleteProductService(repository),
        update: new UpdateProductService(repository)
    }
}
