const User = require('../models/user-model');
const appError = require('../utils/app-error');

exports.signup = async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.password || !req.body.passwordConfirm) {
      console.log('click');
      next(new appError('Missing details', 400));
    }
    const userDetails = {
      name: req.body.name,
      email: req.body.email || null,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };

    const newUser = await User.create(userDetails);

    if (!newUser)
      next(new appError('An error occured while creating the user', 400));

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    next(err);
    // return next(new appError('Error creating user', 500));
  }
};
