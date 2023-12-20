const express = require('express');

const Router = express.Router();

Router.route('/id').get().post().delete().update();
Router.route('/');

module.exports = Router;
