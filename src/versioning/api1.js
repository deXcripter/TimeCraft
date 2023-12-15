const express = require('express');
const app = express();
const books = require('../router/book-router.js');

app.use('/books', books);

module.exports = app;
