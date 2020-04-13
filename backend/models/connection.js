var mysql = require('mysql');
var mysqlConfig = require('../config/config');

var connection = mysql.createConnection(mysqlConfig);
connection.connect(function(err) {
  if (err) throw err;
  console.log("DB connection establishd")
});

module.exports = connection;