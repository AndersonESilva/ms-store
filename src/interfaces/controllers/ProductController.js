class ProductController {
    constructor(createProductService, getProductService) {
      this.createProductService = createProductService;
      this.getProductService = getProductService;
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
  }
  
  module.exports = ProductController;
  