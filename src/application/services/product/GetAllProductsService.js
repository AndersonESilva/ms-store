const Product = require('../../../domain/entities/Product');

class GetAllProductsService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  
  async execute() {
    const products = await this.productRepository.findAll();
    return products.map(product => new Product(product.id, product.name, product.description, product.price));
  }
}
  
module.exports = GetAllProductsService;
  