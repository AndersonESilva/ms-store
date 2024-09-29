const Product = require('../../domain/entities/Product');

class GetProductService {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async execute(id) {
      const productData = await this.productRepository.findById(id);

      if (!productData) {
        return {};
      }

      return new Product(productData.id, productData.name, productData.description, productData.price); 
    }
  }
  
  module.exports = GetProductService;
  