const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

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
    validate: validator.isEmail,
    required: [false, 'Please provide your email to save your tasks'],
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    validate: function (val) {
      return this.password === val;
    },
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now(),
  },
});

// hashing the user password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;
  next();
});

// comparing user password using methods on the userSchema prototype
userSchema.methods.comparePasswords = async function (
  trialPassword,
  storedPassword
) {
  return await bcrypt.compare(trialPassword, storedPassword);
};

// checking whether password has been changed after token has been generated
userSchema.methods.changedPassword = function (JWTTimestamp) {
  const toNumber = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
  return toNumber > JWTTimestamp;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
