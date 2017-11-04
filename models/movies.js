//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********Movies Model*****************
//*********./models/movies****

module.exports = function (sequelize, DataTypes) {
var Movies = sequelize.define("movies", {
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false
        validate: {
            len: [1, 10]
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
        validate: {
            len: [1, 160]
        }
    },
    genres: {
        type: DataTypes.STRING,
        allowNull: false
        validate: {
            len: [1, 100]
        }
    }
}, {
        timestamps: false
    });
};