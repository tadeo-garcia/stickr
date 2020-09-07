'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 50],
      },
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {});


  Photo.associate = function (models) {
    Photo.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };

  Photo.prototype.toSafeObject = function () {
    const {
      id,
      url,
      userId
    } = this;

    return { id, url, userId };
  };


  return Photo;
};