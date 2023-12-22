const mongoose = require('mongoose');
// const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Name should be longer than two characters'],
    maxlength: [30, 'Name shoule be less then 30 characters'],
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    unique: [true, 'Email already taken, please sign login or use a new email'],
    trim: true,
    required: [false, 'Please provide your email to save your tasks'],
  },
  password: {
    type: String,
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    validate: function (val) {
      return this.password === val;
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
