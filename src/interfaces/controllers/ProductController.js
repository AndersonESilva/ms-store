class ProductController {
    constructor(createProductService, getProductService, getAllProductsService) {
      this.createProductService = createProductService;
      this.getProductService = getProductService;
      this.getAllProductsService = getAllProductsService;
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
  