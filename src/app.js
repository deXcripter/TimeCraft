const express = require('express');
const morgan = require('morgan');

const globalError = require('./controllers/error-controller');
const versionOneApi = require('./versioning/version-one');
const app = express();

// using middlewares
app.use(express.json());
app.use(morgan('dev'));

// versioning the api
app.use('/api/v1', versionOneApi);
app.use(globalError);

module.exports = app;
