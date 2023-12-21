const express = require('express');
const morgan = require('morgan');

const versionOneApi = require('./versioning/api1');
const app = express();

// using middlewares
app.use(express.json());
app.use(morgan('dev'));

// versioning the api
app.use('/api/v1', versionOneApi);

module.exports = app;
