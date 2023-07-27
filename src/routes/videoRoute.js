const express = require('express');
const VideoController = require('../controllers/VideoController');
const VideoService = require('../services/VideoService');
const videoModel = require('../models/video');

const ProductController = require('../controllers/ProductController');
const productModel = require('../models/product');
const ProductService = require('../services/ProductService');

const commentModel = require('../models/comment');
const CommentService = require('../services/CommentService');
const CommentController = require('../controllers/CommentController');

const service = new VideoService(videoModel);
const controller = new VideoController(service);

const productService = new ProductService(productModel);
const productController = new ProductController(productService);

const commentService = new CommentService(commentModel);
const commentController = new CommentController(commentService);

const router = express.Router();

router.post('/', controller.postVideo);

router.get('/', controller.getVideos);

router.get('/:id', controller.getVideoById);

router.get('/thumbnails/', controller.getThumbnails);

router.delete('/:id', controller.deleteVideoById);

router.patch('/:id', controller.patchVideoById);

// Products releted

router.get('/:videoId/products', productController.getProductsByVideoId);

router.post('/:videoId/products', productController.postProduct);

// Comment releted

router.get('/:videoId/comments', commentController.getCommentsByVideoId);
router.post('/:videoId/comments', commentController.postComment);

module.exports = router;
