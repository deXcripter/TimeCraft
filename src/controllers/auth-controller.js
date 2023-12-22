const User = require('../models/user-model');

exports.signup = (req, res, next) => {
  const details = {
    name: req.body.name,
    email: req.body.email || null,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  };
};
