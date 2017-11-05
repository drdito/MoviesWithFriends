var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function(sequelize, DataTypes) {
  var User = passportLocalSequelize.defineUser(sequelize, {
    friends: DataTypes.STRING,
    favoriteMovie: DataTypes.STRING,
  });
  return User;
};