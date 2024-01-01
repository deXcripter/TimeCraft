const User = require('../models/user-model');
const appError = require('../utils/app-error');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendEmail } = require('../utils/emial');

// functions
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieDetails = {
    expires: new Date(Date.now() + 60 * 60 * 1000 * 24 * 90),
    secure: false,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieDetails.secure = true;

  res.cookie = ('jwt', token, cookieDetails);

  res.status(statusCode).json({
    status: 'success',
    user,
    token,
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

    if (!newUser) {
      throw new appError('An error occured while creating the user', 400);
    }

    sendToken(newUser, 201, res);
  } catch (err) {
    await User.findOneAndDelete({ email: req.body.email });
    return next(err);
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
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return next(
        new appError('There is no user with this email address', 404)
      );

    const resetToken = user.resetPasswordTokenFn();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forgotten password? Submit a fetch requrest with your new password and password confirm to: ${resetUrl}.\nIf you didn't initiate this, please feel free to ignore this email`;

    try {
      await sendEmail({
        email: req.body.email,
        subject: 'Valid for 10 minutes',
        message,
      });
    } catch (err) {
      // log the error and reset everything
      console.log(err);
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;

      return next(
        new appError('Error sending emial, please try again later', 500)
      );
    }

    res.status(200).json({
      status: 'success',
      message: 'please check your email',
    });

    // user
  } catch (err) {
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const token = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });

    console.log(user);

    if (!user) return next(new appError('Token is invalid or Expired', 400));

    this.password = req.body.password;
    this.passwordConfirm = req.body.passwordConfirm;

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetExpires = undefined;
    user.passwordResetToken = undefined;

    await user.save();

    res.status(2010).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};
