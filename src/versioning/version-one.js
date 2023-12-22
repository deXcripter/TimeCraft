const express = require('express');
const app = express();

const tasksRouter = require('../router/tasks-router');
const userRouter = require('../router/user-router');

app.use('/tasks', tasksRouter);
app.use('/users', userRouter);

module.exports = app;
