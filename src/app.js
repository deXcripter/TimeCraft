// core packages
const express = require('express');
const morgan = require('morgan');

// third party packages
const version1 = require('./versioning/api1');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// api routing
app.use('/api/v1', version1);

// exporting the express application
module.exports = app;
