const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const globalError = require('./controllers/error-controller');
const versionOneApi = require('./versioning/version-one');
const appError = require('./utils/app-error');
const app = express();

// using middlewares
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// versioning the api
app.use('/api/v1', versionOneApi);

// routing
app.all('*', (req, res, next) => {
  next(new appError('This route does not exist', 404));
});
app.use(globalError);

module.exports = app;
