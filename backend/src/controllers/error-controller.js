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

  const handleValidationError = (err) => {
    err.message = err.message;
    err.statusCode = 400;
    err.status = 'invalid task';
    err.isOperational = true;

    return err;
  };

  function handleExistingUniqueCredentials(err) {
    const { key, email } = { ...err.keyValue };

    err.isOperational = true;
    err.message = `${email} has already been used. Please choose another`;
    err.statusCode = err.statusCode;
    return err;
  }

  function handleJsonWebTokenError(err) {
    err.isOperational = true;
    err.message = 'You are not logged in'; // invalid token
    err.statusCode = 500;

    return err;
  }

  // production error
  const productionError = (res, err) => {
    if (err.isOperational) {
      console.log('🌊');

      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      console.log(err);
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
    if (err.name === 'ValidationError') err = handleValidationError(err);
    if (err.code === 11000) err = handleExistingUniqueCredentials(err);
    if (err.name === 'JsonWebTokenError') err = handleJsonWebTokenError(err);

    productionError(res, err);
  }
};

module.exports = globalError;
