//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********User Controller*****************
//*********./controllers/userController****

//Bringing in required dependencies
var express = require("express");
var router = express.Router();
var db = require("../models/users.js");

//Getting raw login screen "http://server/login"
router.get("/", function(req, res) {
  res.render("login");
});

//If user selects to signup, page renders signup page through handlebars "http://server/login/new"
router.get("/new", function(req, res) {
    res.render("signup");
});

module.exports = router;
