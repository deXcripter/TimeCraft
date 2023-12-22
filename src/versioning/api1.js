const express = require('express');
const app = express();
const globalError = require('../controllers/error-controller');

const tasksRouter = require('../router/tasks-router');

app.use('/tasks', tasksRouter);
app.use(globalError);

module.exports = app;
