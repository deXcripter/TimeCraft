const express = require('express');

const Router = express.Router();
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  protection,
} = require('../controllers/auth-controller');
const {
  getAllUsers,
  updatePassword,
  deleteMe,
} = require('../controllers/user-controller');

Router.post('/signup', signup);
Router.post('/signin', signin);
Router.post('/forgotpassword', forgotPassword);
Router.post('/resetpassword/:token', resetPassword);
Router.delete('');

Router.route('/').get(getAllUsers).delete(protection, deleteMe);

module.exports = Router;
