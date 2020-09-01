'use strict';
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [1, 50],
        },
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validates: {
          len: [60, 60],
        },
        aboutMe: {
          allowNull: true,
          type: DataTypes.STRING
        }
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
        profile: {
          attributes: {
            exclude: ["hashedPassword", "updatedAt"],
          }
        }
      },
    }
  );

  User.associate = function (models) {

  };

  User.prototype.toSafeObject = function () {
    const {
      id,
      username
    } = this;

    return { id, username };
  };

  User.login = async function ({ username, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        username
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.signup = async function ({ username, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      hashedPassword
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
