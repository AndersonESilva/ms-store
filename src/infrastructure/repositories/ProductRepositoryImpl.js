
const ProductRepository = require('../../domain/repositories/ProductRepository');

class ProductRepositoryImpl extends ProductRepository {
  constructor(model) {
    super();
    this.model = model;
  }

  async create(product) {
    return await this.model.create(product);
  }

  async findById(productId) {
    return await this.model.findByPk(productId);
  }

  async findAll() {
    return await this.model.findAll();
  }

  async update(product) {
    const productToUpdate = await this.model.findById(product.id);
    if (productToUpdate) {
      return productToUpdate.update(product);
    }
    return null;
  }
}

module.exports = ProductRepositoryImpl;
