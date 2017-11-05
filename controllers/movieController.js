//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********Movie Controller*****************
//*********./controllers/movieController****

//Bringing in required dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

//Getting main home profile page "http://server/profile"
router.get("/", function(req, res) {
  res.render("actualPage");
});

module.exports = router;