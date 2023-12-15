const express = require('express');

const {
  getAllBooks,
  createBook,
} = require('../controllers/book-controller.js');

const Router = express.Router();

Router.route('/').get(getAllBooks).post(createBook);
Router.route('/:id').get().delete().patch();

module.exports = Router;
