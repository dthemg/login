var connection = require("./connection");

const User = function(user) {
  this.username = user.username;
  this.password = user.password;
};

User.addNew = (newUser, result) => {
  console.log("Attempting to add new User: ", newUser);
  connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null); // How does this actually work?
      return;
    }
    console.log("Added user with username", newUser.username)
    result(null, { ...newUser });
  });
};

User.getAll = (result) => { // How do arrow functions actually work?
  connection.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Retrieved all: ", res);
    result(null, res);
  });
};

User.authenticate = (loginAttemptUser, result) => {
  var username = loginAttemptUser.username;
  var password = loginAttemptUser.password;
  console.log("Attempting to login user with username", username);

  var sqlQuery = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.query(sqlQuery, [username, password], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null); // What is going on here?
      return;
    }
    if (res.length > 1) {
      console.log("Login attempt successful");
      result(null, res);
    } else {
      console.log("Login attempt unsuccessful");
      return;
    }
  });
}

User.getProfile = (userId, result) => {
  var sqlQuery = "SELECT * FROM users WHERE user_id = ?";
  connection.query(sqlQuery, [userId], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Found user profile for " + userId);
    result(null, res);
  })
}

module.exports = User;