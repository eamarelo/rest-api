var express = require('express');
var app = express();
var db = require('./db');

/*
*Call the UserController
*/
var UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app;

/*
*Call the TrackController
*/
var TrackController = require('./track/TrackController.js');
app.use('/track', TrackController);
module.exports = app;

/*
*Call the AuthController
*/
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
module.exports = app;