//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********Reddit Model*****************
//*********./models/reddit****

module.exports = function (sequelize, DataTypes) {
    var reddit = sequelize.define("reddit", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
            timestamps: false
        });
    return reddit;
};