/*
*connexion to the online db
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:echoboy@ds227469.mlab.com:27469/api-rest-nodejs');