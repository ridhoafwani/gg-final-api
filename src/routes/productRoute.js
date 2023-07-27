const express = require('express');
const ProductController = require('../controllers/ProductController');
const ProductModel = require('../models/product');
const ProductService = require('../services/ProductService');

const service = new ProductService(ProductModel);
const controller = new ProductController(service);

const router = express.Router();

router.get('/', controller.getProducts);

router.get('/:id', controller.getProduct);

router.delete('/:id', controller.deleteProduct);

router.patch('/:id', controller.patchProduct);

module.exports = router;
