const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: [true, 'Please enter a task'],
    trim: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
