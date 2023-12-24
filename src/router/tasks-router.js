const express = require('express');

const {
  createTask,
  updateTask,
  tasks,
  deleteTask,
} = require('../controllers/tasks-controller.js');

const Router = express.Router();

Router.route('/:id').get(tasks).post(createTask);

Router.route('/userId/:id').delete(deleteTask).patch(updateTask);

module.exports = Router;
