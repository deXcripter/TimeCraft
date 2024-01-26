const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    require: [true, 'Please enter a task'],
    trim: true,
    minlength: 3,
    maxlength: 300,
  },
  priority: {
    type: Number,
    required: [true, 'A task must have a priority'],
    enum: [1, 2, 3],
  },
  userID: {
    type: String,
    required: [true, 'A task must belong to a user'],
    select: false,
  },
  date: {
    type: Date,
    required: [true, 'Please specify a due date'],
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
