//***************Robot Unicorn Attack*************
//***************Movies with Friends**************
//***************Movies Model*********************
//***************./models/movies.js***************

module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("movies", {
      title: DataTypes.STRING,
      genre: DataTypes.STRING
    }, {
      timestamps: false
    });
    return Movie;
  };
  