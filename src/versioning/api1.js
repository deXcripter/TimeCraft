const express = require('express');
const app = express();
const books = require('../router/book-router.js');

app.use('/book', books);

module.exports = app;
