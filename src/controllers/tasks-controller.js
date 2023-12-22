const Task = require('../models/task-model.js');

exports.createTask = async (req, res, next) => {
  try {
    const newTask = {
      task: req.task,
      due: req.due,
      category: req.category,
    };

    const task = Task.create(newTask);
    res.status(201).json({
      status: 'success',
      data: task,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: 'an error occured' });
  }
};

exports.tasks = (req, res, next) => {
  try {
    const task = Task.find();

    res.status(200).json({});
  } catch (err) {
    res.status(401).json({ status: 'fail', message: err.message });
  }
};

exports.updateTask = (req, res, next) => {
  try {
    res.status(200).json({ status: 'success', message: 'updated' });
  } catch (err) {}
};

// exports.delteTask = (req, res, next) => {
//   const task = Task.find(req.body.taskId);

//   try {
//     if (!task) {
//       throw new Error('Task not found')
//     }

//     res.status(204).json({ status: 'success', message: 'deleted' });
//   } catch (err) {}
// };
