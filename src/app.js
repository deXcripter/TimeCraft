const express = require('express');
const morgan = require('morgan');

const globalError = require('./controllers/error-controller');
const versionOneApi = require('./versioning/version-one');
const appError = require('./utils/app-error');
const app = express();

// using middlewares
app.use(express.json());
app.use(morgan('dev'));

// versioning the api
app.use('/api/v1', versionOneApi);
app.all('*', (req, res, next) => {
  console.log('🔥');
  console.log(process.env.NODE_ENV);
  next(new appError('This route does not exist', 404));
});
app.use(globalError);

module.exports = app;
