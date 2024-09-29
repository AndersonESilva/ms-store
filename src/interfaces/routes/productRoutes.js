const express = require('express');
const ProductRepositoryImpl = require('../../infrastructure/repositories/ProductRepositoryImpl');
const CreateProductService = require('../../application/services/CreateProductService');
const GetProductService = require('../../application/services/GetProductService');
const ProductController = require('../controllers/ProductController');

const productRouter = (db) => {
    const router = express.Router();
  
    const productRepository = new ProductRepositoryImpl(db);
    const createProductService = new CreateProductService(productRepository);
    const getProductService = new GetProductService(productRepository);
    const productController = new ProductController(createProductService, getProductService);
  
    router.post('/products', (req, res) => productController.createProduct(req, res));
    router.get('/products/:id', (req, res) => productController.getProduct(req, res));
  
    return router;
};

module.exports = productRouter;