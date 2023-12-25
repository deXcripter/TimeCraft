const express = require('express');

const {
  createTask,
  updateTask,
  tasks,
  deleteTask,
} = require('../controllers/tasks-controller.js');

const { protection } = require('../controllers/auth-controller.js');

const Router = express.Router();

Router.route('/:id').get(protection, tasks).post(createTask);

Router.route('/userId/:id').delete(deleteTask).patch(updateTask);

module.exports = Router;
