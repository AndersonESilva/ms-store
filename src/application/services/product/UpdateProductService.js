const Price = require('../../../domain/valueObjects/Price');
const Product = require('../../../domain/entities/Product');

class UpdateProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  
  async execute({ id, name, description, price }) {
    const productPrice = new Price(price);
    const product = { name, description, price: productPrice.value };

    const [ productUpdated ] = await this.productRepository.update(id, product);

    if (productUpdated) {
        const productData = await this.productRepository.findById(id);
        return new Product(productData.id, productData.name, productData.description, productData.price);
    } else {
        return {};
    }
  }
}
  
module.exports = UpdateProductService;
  