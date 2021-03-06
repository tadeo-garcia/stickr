'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ username: 'horfe', hashedPassword: createPassword(), aboutMe: 'writer from paris' }),
      r({ username: 'tsoyok', hashedPassword: createPassword(), aboutMe: "i'm from dallas" }),
      r({ username: 'wolfup', hashedPassword: createPassword(), aboutMe: 'writer from sf' }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
