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

  if (loginAttemptUser.username && loginAttemptUser.password) {
    User.authenticate(loginAttemptUser, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || "login attempt error"
        });
      } else {
        // If user was found, set session user to this id:
        if (data.length > 0) {
          let user = data[0];
          req.session.user_id = user.user_id;
          req.session.loggedIn = true;
          console.log("Login successful, session user id set to", user.user_id);
        }
        res.send(data);
      }
    });
  }
}

// This should only redirect if the user has logged in already
exports.profile = (req, res) => {
  // Check if user is already logged in:
  console.log("Check if the user is already logged in here");
  if (req.session.loggedIn) {
    let userId = req.session.user_id;
    User.getProfile(userId, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || "could not retrieve profile with id " + userId
        });
      } else {
        console.log(data);
        res.send(data);
      }
    })
  } else {
    console.log("User was found not to be logged in");
  }
}

