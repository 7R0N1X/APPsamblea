const { Router } = require('express');
const routes = Router();
const userControllers = require('../controllers/user-controllers');

routes.post('/register', userControllers.register);
routes.post('/vote', userControllers.authenticate);

module.exports = routes;