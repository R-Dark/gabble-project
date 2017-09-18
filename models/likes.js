'use strict';
module.exports = function(sequelize, DataTypes) {
  var likes = sequelize.define('likes', {
    likesid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    postid: DataTypes.INTEGER
  }, {});
    // likes.associate = function(models) {
    //   likes.belongsTo(models.users,{as : 'likes', foreignKey : 'userid'})
    // }
    return likes;
  };
