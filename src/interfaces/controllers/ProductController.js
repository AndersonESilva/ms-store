class ProductController {
    constructor(service) {
      this.createProductService = service.create;
      this.getProductService = service.get;
      this.getAllProductsService = service.getAll;
      this.deleteProductService = service.delete;
    }
  
    async createProduct(req, res) {
      const { name, description, price } = req.body;
      const result = await this.createProductService.execute({ name, description, price });
      res.status(201).json(result);
    }
  
    async getProduct(req, res) {
      const result = await this.getProductService.execute(req.params.id);
      res.json(result);
    }

    async getAllProducts(req, res) {
      const result = await this.getAllProductsService.execute();
      res.json(result);
    }

    async deleteProduct(req, res) {
      const result = await this.deleteProductService.execute(req.params.id);
      res.json(result);
    }
  }
  
  module.exports = ProductController;
  