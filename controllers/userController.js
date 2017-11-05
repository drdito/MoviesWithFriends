//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********User Controller*****************
//*********./controllers/userController****

//Bringing in required dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

//Getting raw login screen "http://server/login"
router.get("/", function(req, res) {
  res.render("login");
});

//Posting user input from front end to check if exists in database "http://server/login/validation"
router.post("/validation", function(req, res) {
  var userFound = false;
  var passwordFound = false;
    db.User
    .findAll()
    .then (function(users) {
      for(var i = 0; i < users.length; i++) {
        if (users[i].dataValues.username === req.body.username) {
          userFound = true;
          if (users[i].dataValues.hash === req.body.password) {
            passwordFound = true;
            res.render("actualPage", {user: users[i].dataValues.username});
          }
        }
      }
      if (!userFound || !passwordFound) {
        res.sendFile(path.join(__dirname, "../public/error.html"));
      }
    });    
});

//If user selects to signup, page renders signup page through handlebars "http://server/login/create"
router.get("/create", function(req, res) {
    res.render("signup");
});

//Posts new user information into user table of the moviesWithFriends_db "http://server/login/create/new"
router.post("/create/new", function(req, res) {
    // if statement to check if fields are not blank
    if (req.body.newUser && req.body.newPass && req.body.movies1 && req.body.movies2 && req.body.movies3 && req.body.movies4 && req.body.movies5) {
    
    //restful call to create a new user
    db.User.create({
        username: req.body.newUser,
        hash: req.body.newPass,
        salt: "Hello User",
        favoriteMovie: req.body.movies1 + "," + req.body.movies2 + "," + req.body.movies3 + "," + req.body.movies4 + "," + req.body.movies5
    })
      .then(function(newUser) {
      
      // redirect back to log in page for user to login
      res.redirect("/");
      });
  }
});
module.exports = router;
