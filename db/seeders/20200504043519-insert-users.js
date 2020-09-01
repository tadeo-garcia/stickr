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
      r({ username: 'mkue', hashedPassword: createPassword(), aboutMe: null }),
      r({ username: 'horfe', hashedPassword: createPassword(), aboutMe: null }),
      r({ username: 'saieo', hashedPassword: createPassword(), aboutMe: null }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
