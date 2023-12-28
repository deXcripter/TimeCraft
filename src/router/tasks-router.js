const express = require('express');

const {
  createTask,
  updateTask,
  tasks,
  deleteTask,
} = require('../controllers/tasks-controller.js');

const { protection } = require('../controllers/auth-controller.js');

const Router = express.Router();

Router.route('/userId').get(protection, tasks).post(protection, createTask);
Router.route('/userId/:id').delete(deleteTask).patch(updateTask);

module.exports = Router;
