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

// TODO: Keep working here: how to we check username and password simultaneously here?
User.authenticate = (loginAttemptUser, result) => {
  console.log("Attempting to login user with username", loginAttemptUser.username);
  var sqlQuery = "SELECT * FROM users WHERE ?";
  connection.query(sqlQuery, loginAttemptUser, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null); // What is going on here?
      return;
    }
    if (res.length > 0) {
      // UUUUUUUUhh what do I do here...
    }
  }
    )
}

module.exports = User;