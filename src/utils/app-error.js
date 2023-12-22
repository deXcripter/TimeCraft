class appError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4) ? 'Fail' : 'Error';
    this.message = message;
    this.isOperational = true;
  }
}

module.exports = appError;
