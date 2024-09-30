
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

  async update(id, product) {
    return await this.model.update(product, {
      where: {
        id: id
      }
    });
  }

  async delete(id) {
    return await this.model.destroy({
      where: {
        id: id
      }
    });
  }
}

module.exports = ProductRepositoryImpl;
