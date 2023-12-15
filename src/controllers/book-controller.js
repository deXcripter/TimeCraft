exports.getAllBooks = (req, res, next) => {
  try {
    // res.status(200).json({ status: 'success', data: { books: 'books' } });
    res.send('<h1>Books</h1>');
  } catch (err) {}
};
