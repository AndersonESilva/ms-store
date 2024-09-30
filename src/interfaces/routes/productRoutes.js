const express = require('express');

const productRouter = ({ controller }) => {
    const router = express.Router();

    const productController = controller.productController;
  
    router.post('/products', (req, res) => productController.createProduct(req, res));
    router.get('/products/:id', (req, res) => productController.getProduct(req, res));
    router.get('/products', (req, res) => productController.getAllProducts(req, res));
  
    return router;
};

module.exports = productRouter;