//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//***************server.js*********************************

//Bringing in necessary dependencies.
var express = require('express'),
passport = require('passport'),
port = process.env.PORT || 8080;
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
exphbs = require("express-handlebars");
User = require('./models/user'),
app = express();

//Middleware declaration for body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

//Allows us to use local styling from our public/assets folder.
app.use(express.static(__dirname + "./public"));

//Handlebars Engine
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Define controller to bring back our user data from user model
var userRoutes = require("./controllers/userController.js");
app.use("/login", routes);

//Middleware to authenticate through passport
app.use(bodyParser());
app.use(require('connect-multiparty')());
app.use(cookieParser());
app.use(session({ secret: 'super-secret' }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Syncing with the database prior to listening on port 8080
User.sequelize.sync().then(function() {
  app.listen(port);
});