const User = require("../models/user.model");


// Get all users from database
exports.getAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "getAll error"
      });
    } else {
      res.send(data);
    }
  });
};


// Add new user to database
exports.addNew = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "POST content empty"
    });
  } else {
    console.log("Received ", {...req.body});
  }

  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  User.addNew(newUser, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "addNew error"
      });
    res.send(data);
    }
  });
};

// Authetication function
exports.authenticate = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "authenticate POST message is empty"
    });
  } else {
    console.log("Received login attempt for user", req.body.username);
  }

  const loginAttemptUser = new User({
    username: req.body.username,
    password: req.body.password,
  })

  if (username && password) {
    User.authenticate(loginAttemptUser, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || "login attempt error"
        });
        res.send(data);
      }
    });
  }
}
