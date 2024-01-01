const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
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
    required: [true, 'Please provide your email to save your tasks'],
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
    select: false,
  },
  passwordResetToken: { type: String, select: false },
  passwordResetExpires: { type: Date, select: false },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// hashing the user password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 2500;
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

// send token for forgotten password
userSchema.methods.resetPasswordTokenFn = function () {
  const token = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(hashedToken)
    .digest('hex');
  this.passwordResetExpires = Date.now();

  // return
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
