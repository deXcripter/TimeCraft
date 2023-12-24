const Task = require('../models/task-model.js');
const appError = require('../utils/app-error.js');

// create task
exports.createTask = async (req, res, next) => {
  try {
    if (!req.body.task) {
      next(new appError('Please enter a task', 400));
    }

    const body = { task: req.body.task };
    const task = await Task.create(body);

    res.status(201).json({
      status: 'success',
      data: task,
    });
  } catch (err) {
    console.log(err.message);
    return next(new appError(`Error creating task`, 400));
  }
};

// find task
exports.tasks = async (req, res, next) => {
  try {
    const task = await Task.find();
    res.status(200).json({ status: 'success', data: task });
  } catch (err) {
    res.status(401).json({ status: 'fail', message: err.message });
  }
};

// update task
exports.updateTask = (req, res, next) => {
  try {
    res.status(200).json({ status: 'success', message: 'updated' });
  } catch (err) {}
};

exports.deleteTask = (req, res, next) => {
  const task = Task.find(req.body.taskId);

  try {
    // if (!task) throw new appError('Task not found', 400);
    const deletedTask = Task.deleteOne(req.params.id);
    res.status(204).json({ status: 'success', message: 'deleted' });
  } catch (err) {
    if (err.isOperational) {
      res
        .status(err.statusCode)
        .json({ status: err.status, message: err.message });
    } else {
      console.log(err.message);
      res
        .status(500)
        .json({ status: 'error', message: 'something went wrong' });
    }
  }
};
