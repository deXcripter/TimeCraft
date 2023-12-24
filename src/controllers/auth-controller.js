const User = require('../models/user-model');
const appError = require('../utils/app-error');
const jwt = require('jsonwebtoken');

// functions
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};

exports.signup = async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.password || !req.body.passwordConfirm) {
      console.log('click');
      return next(new appError('Missing details', 400));
    }
    const userDetails = {
      name: req.body.name,
      email: req.body.email || null,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };

    const newUser = await User.create(userDetails);

    if (!newUser)
      return next(
        new appError('An error occured while creating the user', 400)
      );

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    next(new appError('Please input your email and password', 400));

  const user = await User.findOne({ email }).select('password');
  if (!user) return next(new appError('No user exist with this email', 404));

  const bool = await user.comparePasswords(password, user.password);
  if (!bool) return next(new appError('Incorrect password', 403));

  // const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
  //   expiresIn: process.env.TOKEN_EXPIRATION,
  // });

  const token = signToken(user._id);
  res.status(200).json({ status: 'success', token });
};
