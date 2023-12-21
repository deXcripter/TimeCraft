const express = require('express');

const {
  createTask,
  updateTask,
} = require('../controllers/tasks-controller.js');

const Router = express.Router();

Router.route('/id').get().post(createTask).delete().patch(updateTask);

module.exports = Router;
