const User = require('../models/user-model');
const appError = require('../utils/app-error');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// functions
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};

// controllers
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

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      newUser,
    });
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      next(new appError('Please input your email and password', 400));

    const user = await User.findOne({ email }).select('password');
    if (!user) return next(new appError('No user exist with this email', 404));

    const bool = await user.comparePasswords(password, user.password);
    if (!bool) return next(new appError('Incorrect password', 403));

    const token = signToken(user._id);
    res.status(200).json({ status: 'success', token });
  } catch (err) {
    return next(err);
  }
};

exports.protection = async (req, res, next) => {
  try {
    // check if header exists first
    const [bearer, token] = `${req.headers.authorization}`.split(' ');
    if (!`${bearer}`.startsWith('Bearer') || !token)
      return next(new appError('Please log in to access this route', 401));

    // verify if token hasn't been manupualated
    jwt.verify(token, process.env.SECRET_KEY);

    // check if user still exists
    const decoded = jwt.decode(token);
    const user = await User.findById(decoded.id);

    if (!user)
      return next(
        new appError('The user belonging to this token no longer exists')
      );

    // check if user has changed password since token generation
    if (user.changedPassword(decoded.iat))
      return next(new appError('Password changed. Please log in', 401));

    req.decoded = decoded;
    next();
  } catch (err) {
    return next(err);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    if (!req.body.email)
      return next(new appError('Please enter your email', 400));

    const user = await User.findOne({ email: req.body.email })?.select(
      'password'
    );
    if (!user) return next(new appError('No account with this email', 400));

    user.resetPasswordTokenFn();
    user.save({ validateBeforeSave: false });
    res.status(200).json({ status: 'success' });

    // user
  } catch (err) {
    next(err);
  }
};
