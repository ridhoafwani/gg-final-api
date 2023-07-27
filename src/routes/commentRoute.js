const express = require('express');
const commentModel = require('../models/comment');
const CommentService = require('../services/CommentService');
const CommentController = require('../controllers/CommentController');

const service = new CommentService(commentModel);
const controller = new CommentController(service);

const router = express.Router();

router.patch('/:id', controller.patchComment);
router.delete('/:id', controller.deleteComment);

module.exports = router;
