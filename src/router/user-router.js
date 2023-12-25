const express = require('express');

const Router = express.Router();
const { signup, signin } = require('../controllers/auth-controller');
const {} = require('../controllers/user-controller');

Router.post('/signup', signup);
Router.post('/signin', signin);

Router.route('/').get();

module.exports = Router;
