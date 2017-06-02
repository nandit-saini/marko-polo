/* 
 * Created by Nandit
 */

// import the packages 
var express    = require('express'),
    bodyParser = require('body-parser'),
    morgan     = require('morgan');

var app        = express();
// app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importing routes
var routes = require('./app/routes.js');

// REGISTER OUR ROUTES 
app.use('/api', routes);

// Set up port
var port     = process.env.PORT || 9020; 
app.listen(port);
console.log('App is running on the port ' + port);

module.exports = app