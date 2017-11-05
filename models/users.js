//***************Robot Unicorn Attack*************
//***************Movies with Friends**************
//***************Users Model**********************
//***************./models/users.js****************

//Bringing in required dependeny that uses helper function to define common user fields
var passportLocalSequelize = require('passport-local-sequelize');

//Defining user model using "defineUser" helper function
module.exports = function(sequelize, DataTypes) {
  var User = passportLocalSequelize.defineUser(sequelize, {
    friends: DataTypes.STRING,
    favoriteMovie: DataTypes.STRING,
  });
  return User;
};