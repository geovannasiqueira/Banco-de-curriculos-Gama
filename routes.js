const express = require('express');
const userController = require('./controllers/userController');
const routes = new express.Router();

routes.post('/register', userController.register);
routes.get('/', (req, res) => {
    res.send("Server funcionando");
});

module.exports = routes;