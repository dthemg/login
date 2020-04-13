var express = require('express');
var router = express.Router();
var connection = require('../models/connection');
const user = require('../controllers/user.controller');

router.get("/getAll", user.getAll);
router.post("/addNew", user.addNew);

module.exports = router

// Add connection 
// Add controller