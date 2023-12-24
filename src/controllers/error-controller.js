const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';

  const developmentError = (res, err) => {
    return res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message, err });
  };

  const handleCastError = (err) => {
    err.message = `${err.value} is an invalid ${err.path}`;
    err.statusCode = 400; // bad request
    err.status = 'failed request';
    err.isOperational = true;

    return err;
  };

  // production error
  const productionError = (res, err) => {
    if (err.isOperational) {
      console.log('🌊');

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

  // START
  if (process.env.NODE_ENV === 'development') {
    developmentError(res, err);
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'CastError') err = handleCastError(err);

    productionError(res, err);
  }
};

module.exports = globalError;
