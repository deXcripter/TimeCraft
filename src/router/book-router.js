const express = require('express');

const { getAllBooks } = require('../controllers/book-controller.js');

const Router = express.Router();

Router.route('/').get(getAllBooks).post();
Router.route('/:id').get().delete().patch();

module.exports = Router;
