class ProductController {
    constructor(service) {
      this.createProductService = service.create;
      this.getProductService = service.get;
      this.getAllProductsService = service.getAll;
    }
  
    async createProduct(req, res) {
      const { name, description, price } = req.body;
      const product = await this.createProductService.execute({ name, description, price });
      res.status(201).json(product);
    }
  
    async getProduct(req, res) {
      const product = await this.getProductService.execute(req.params.id);
      res.json(product);
    }

    async getAllProducts(req, res) {
      const products = await this.getAllProductsService.execute();
      res.json(products);
    }
  }
  
  module.exports = ProductController;
  