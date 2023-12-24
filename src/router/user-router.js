const express = require('express');

const Router = express.Router();
const { signup } = require('../controllers/auth-controller');

Router.post('/signup', signup);

module.exports = Router;
