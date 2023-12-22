const User = require('../models/user-model');
const appError = require('../utils/app-error');

exports.signup = (req, res, next) => {
  try {
    const userDetails = {
      name: req.body.name,
      email: req.body.email || null,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };

    const newUser = User.create(userDetails);
    res.status(201).json({
      status: 'success',
      data: {
        message: 'user created',
        user: userDetails,
      },
    });
  } catch (err) {
    return next(new appError('Error creating user', 500));
  }
};
