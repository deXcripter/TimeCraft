const express = require('express');

const tasksRotuer = require('./router/tasks-router');

const app = express();

// app.use('/api/v1/tasks', tasksRotuer);

module.exports = app;
