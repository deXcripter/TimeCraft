const Book = require('../models/book-model');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({ status: 'success', data: { books } });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const newBook = {
      name: req.body.name,
      title: req.body.title,
      // author: req.body.author,
    };

    const book = await Book.create(newBook);
    res.status(201).json({ status: 'success', data: book });
  } catch (err) {
    console.log(err.message);
  }
};
