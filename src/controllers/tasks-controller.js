const Task = require('../models/task-model.js');
const appError = require('../utils/app-error.js');

// needed functions
async function handleInvalidId(req) {
  const taskId = await Task.findById(req.params.id);
  if (!taskId) throw new appError('This task does not exist', 400);

  return;
}

// create task
exports.createTask = async (req, res, next) => {
  try {
    if (!req.body.task) {
      next(new appError('Please enter a task', 400));
    }

    const body = { task: req.body.task, userID: req.decoded.id };
    const task = await Task.create(body);

    res.status(201).json({
      status: 'success',
      data: task,
    });
  } catch (err) {
    return next(err);
  }
};

// find task
exports.tasks = async (req, res, next) => {
  try {
    const task = await Task.find({ userID: req.decoded.id });
    return res.status(200).json({ status: 'success', data: task });
  } catch (err) {
    return next(err);
  }
};

// update task
exports.updateTask = async (req, res, next) => {
  try {
    await handleInvalidId(req);
    const body = req.body.task;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { task: body },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: 'success', data: updatedTask });
  } catch (err) {
    next(err);
  }
};

// delete task
exports.deleteTask = async (req, res, next) => {
  try {
    await handleInvalidId(req);
    const tasks = await Task.findOneAndDelete(req.params.id);
    tasks.save({ runValidators: true });

    res.status(204).json({ status: 'success', message: 'deleted' });
  } catch (err) {
    next(err);
  }
};
