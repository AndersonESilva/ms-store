const Price = require('../../domain/valueObjects/Price');
const Product = require('../../domain/entities/Product');

class CreateProductService {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async execute({ name, description, price }) {
      const productPrice = new Price(price);
      const product = { name, description, price: productPrice.value };
      const productData = await this.productRepository.create(product);
      return new Product(productData.id, productData.name, productData.description, productData.price);
    }
  }
  
  module.exports = CreateProductService;
  