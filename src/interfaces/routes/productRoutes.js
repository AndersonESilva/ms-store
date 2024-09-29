const express = require('express');
const ProductRepositoryImpl = require('../../infrastructure/repositories/ProductRepositoryImpl');
const CreateProductService = require('../../application/services/product/CreateProductService');
const GetProductService = require('../../application/services/product/GetProductService');
const GetAllProductsService = require('../../application/services/product/GetAllProductsService');
const ProductController = require('../controllers/ProductController');

const productRouter = (db) => {
    const router = express.Router();
  
    const productRepository = new ProductRepositoryImpl(db);

    const createProductService = new CreateProductService(productRepository);
    const getProductService = new GetProductService(productRepository);
    const getAllProductsService = new GetAllProductsService(productRepository);

    const productController = new ProductController(createProductService, getProductService, getAllProductsService);
  
    router.post('/products', (req, res) => productController.createProduct(req, res));
    router.get('/products/:id', (req, res) => productController.getProduct(req, res));
    router.get('/products', (req, res) => productController.getAllProducts(req, res));
  
    return router;
};

module.exports = productRouter;