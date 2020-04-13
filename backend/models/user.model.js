var connection = require("./connection");

const User = function(user) {
  this.username = user.username;
  this.password = user.password;
};

User.addNew = (newUser, result) => {
  console.log("Attempting to add new User: ", newUser);
  connection.query("INSERT INTO loginUsers SET ?", newUser, (err, res) => {
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
  connection.query("SELECT * FROM loginUsers", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Retrieved all: ", res);
    result(null, res);
  });
};

module.exports = User;