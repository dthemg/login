var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

var userRouter = require('./routes/users.routes');

var app = express();

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