const express = require('express');
const morgan = require('morgan');

const versionOneApi = require('./versioning/api1');
const app = express();

// versioning the api
app.use(morgan('dev'));
app.use('/api/v1', versionOneApi);

module.exports = app;
