const express = require('express');

const Router = express.Router();
const {
  signup,
  signin,
  forgotPassword,
} = require('../controllers/auth-controller');
const {} = require('../controllers/user-controller');

Router.post('/signup', signup);
Router.post('/signin', signin);
Router.post('/forgotpassword', forgotPassword);

Router.route('/').get();

module.exports = Router;
