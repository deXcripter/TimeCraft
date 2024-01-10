const express = require('express');

const Router = express.Router();
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth-controller');
const {
  getAllUsers,
  updatePassword,
} = require('../controllers/user-controller');

Router.post('/signup', signup);
Router.post('/signin', signin);
Router.post('/forgotpassword', forgotPassword);
// Router.post('/updatePassword', updatePassword);
Router.post('/resetpassword/:token', resetPassword);

Router.route('/').get(getAllUsers);

module.exports = Router;
