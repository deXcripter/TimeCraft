const express = require('express');

const versionOneApi = require('./versioning/api1');
const app = express();

app.use('/api/v1', versionOneApi);

module.exports = app;
