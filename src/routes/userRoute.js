const express = require('express');
const userModel = require('../models/user');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const service = new UserService(userModel);
const controller = new UserController(service);

const router = express.Router();

router.get('/', controller.getUsers);

router.get('/:id', controller.getUser);

router.patch('/:id', controller.patchUser);

router.delete('/:id', controller.deleteUser);

router.post('/signin', controller.loginUser);

router.post('/signup', controller.signupUser);

module.exports = router;
