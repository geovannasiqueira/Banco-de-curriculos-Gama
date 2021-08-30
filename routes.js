const express = require('express');
const userController = require('./controllers/userController');
const routes = new express.Router();

routes.post('/register', userController.register);

module.exports = routes;