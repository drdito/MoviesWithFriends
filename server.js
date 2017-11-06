//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//***************server.js*********************************

//Bringing in necessary dependencies.
var express = require('express'),
passport = require('passport'),
PORT = process.env.PORT || 8080;
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
exphbs = require("express-handlebars"),
db = require("./models");
app = express();

//Middleware declaration for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Allows us to use local styling from our public/assets folder.
app.use(express.static('public'));

//Handlebars Engine
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers: {
    json: function (context) {
      return JSON.stringify(context);
    }
  }
}));
app.set("view engine", "handlebars");

//Define controller to bring back our movie data from movie model
var movieRoutes = require("./controllers/movieController.js")
app.use("/profile", movieRoutes);

//Define controller to bring back our user data from user model
var userRoutes = require("./controllers/userController.js");
app.use("/", userRoutes);

//Middleware to authenticate through passport
app.use(require('connect-multiparty')());
app.use(cookieParser());
app.use(session({ secret: 'super-secret' }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(db.User.createStrategy());

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//Syncing with the database prior to listening on port 8080
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});