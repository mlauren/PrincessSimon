// server.js

// modules =================================================
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// configuration ===========================================

// set our port
var port = process.env.PORT || 3030; 

// Setup server
var server = require('http').createServer(app);           

// routes ==================================================
require('./routes')(app); // configure our routes

// Start server
server.listen(port, function () {
  console.log('Express server listening on %d', port);
});

// expose app
exports = module.exports = app;