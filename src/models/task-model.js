const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  task: {
    type: String,
    require: [true, 'Please enter a task'],
    trim: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
