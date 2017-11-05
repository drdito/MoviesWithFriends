//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********Reddit Controller*****************
//*********./controllers/redditController****

// Bringing in required dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models/movies.js");

// get reddit info
router.get("/", function (req, res) {
  db.reddit.findAll()
    .then(function (dbreddit) {
      var hbsObject = { reddit: dbreddit };
      return res.render("index", hbsObject);
    });
});

module.exports = router;
