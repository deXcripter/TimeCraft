const express = require('express');
const app = express();

const tasksRouter = require('../router/tasks-router');

app.use('/tasks', tasksRouter);

module.exports = app;
