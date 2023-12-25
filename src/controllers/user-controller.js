const User = require('../models/user-model');
const appError = require('../utils/app-error');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = User.find();
  } catch (err) {
    next(err);
  }
};
