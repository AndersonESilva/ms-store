const CreateProductService = require('./CreateProductService');
const GetProductService = require('./GetProductService');
const GetAllProductsService = require('./GetAllProductsService');

module.exports = ({ repository }) => {
    return {
        create: new CreateProductService(repository),
        get: new GetProductService(repository),
        getAll: new GetAllProductsService(repository)
    }
}
