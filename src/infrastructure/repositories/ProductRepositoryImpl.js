
const ProductRepository = require('../../domain/repositories/ProductRepository');

class ProductRepositoryImpl extends ProductRepository {
  constructor(db) {
    super();
    this.Product = db.models.Product;
  }

  async create(product) {
    return await this.Product.create(product);
  }

  async findById(productId) {
    return await this.Product.findByPk(productId);
  }

  async findAll() {
    const products = await this.Product.findAll();
    return products.map(product => new Product(product.id, product.name, product.price));
  }

  async update(product) {
    const productToUpdate = await this.Product.findById(product.id);
    if (productToUpdate) {
      return productToUpdate.update(product);
    }
    return null;
  }
}

module.exports = ProductRepositoryImpl;
