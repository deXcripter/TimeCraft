const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: [true, 'Please enter a task'],
    trim: true,
    minlength: 3,
    maxlength: 300,
  },
  userID: {
    type: String,
    required: [true, 'A task must belong to a user'],
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
