var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var userRouter = require('./routes/users.routes');
var mysql = require('mysql');
var mysqlConfig = require('../config/config');

var app = express();

var connection = mysql.createConnection(mysqlConfig);
connection.connect(function(err) {
  if (err) throw err;
  console.log("DB connection establishd")
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// How do sessions work?
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", userRouter);

// Catch 404 errors:
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handling
app.use(function(err, req, res, next) {
  // Only provide error during development
  res.locals.messgae = err.message;
  res.locals.error = req.app.get("env") === "development" ? err: {};

  // Render error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
module.exports = connection;