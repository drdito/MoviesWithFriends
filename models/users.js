var Sequelize = require('sequelize');
var passportLocalSequelize = require('passport-local-sequelize');

var mydb = new Sequelize('moviesWithFriends_db', 'root', 'Dantheman065$', {
  dialect: 'mysql',
  storage: 'mydb.mysql'
});

var User = passportLocalSequelize.defineUser(mydb, {
});

module.exports = User;