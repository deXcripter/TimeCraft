const User = require('../models/user-model');
const appError = require('../utils/app-error');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteMe = async (req, res, next) => {
  try {
    const user = req.decoded.id;
    if (!user) return next(new appError('Please log in'));

    User.findByIdAndDelete(user);
  } catch (err) {
    return next();
  }
};

exports.updateMe = async (req, res, next) => {};
