const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A book must have a name'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'A tour must have an author'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'A tour must have an author'],
    trim: true,
  },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
