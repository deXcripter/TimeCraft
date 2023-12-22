const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';

  const developmentError = (res, err) => {
    return res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message, err });
  };

  const productionError = (res, err) => {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      return res
        .status(500)
        .json({ status: 'error', message: 'Something went wrong' });
    }
  };

  if (process.env.NODE_ENV === 'development') {
    developmentError(res, err);
  } else if (process.env.NODE_ENV === 'production') {
    productionError(res, err);
  }
};

module.exports = globalError;
