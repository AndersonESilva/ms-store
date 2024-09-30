const express = require('express');

const productRouter = ({ controller }) => {
    const router = express.Router();
  
    router.post('/products', (req, res) => controller.createProduct(req, res));
    router.get('/products/:id', (req, res) => controller.getProduct(req, res));
    router.get('/products', (req, res) => controller.getAllProducts(req, res));
    router.delete('/products/:id', (req, res) => controller.deleteProduct(req, res));
  
    return router;
};

module.exports = productRouter;