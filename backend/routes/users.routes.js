var express = require('express');
var router = express.Router();
const user = require('../controllers/user.controller');


router.get("/getAll", user.getAll);
router.post("/addNew", user.addNew);
router.post("/authenticate", user.authenticate);

// TODO: Implement below, should only be visible if logged in
router.get("/profile", user.profile);

module.exports = router