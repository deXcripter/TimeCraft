const express = require('express');

const {
  createTask,
  updateTask,
  tasks,
  deleteTask,
} = require('../controllers/tasks-controller.js');

const { protection } = require('../controllers/auth-controller.js');

const Router = express.Router();

Router.route('/').get(protection, tasks).post(protection, createTask);
// Router.route('/userId').get(protection, tasks).post(protection, createTask);
Router.route('/:id')
  .delete(protection, deleteTask)
  .patch(protection, updateTask);

module.exports = Router;
