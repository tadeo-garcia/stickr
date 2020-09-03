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
      r({ username: 'mkue', hashedPassword: createPassword(), aboutMe: 'writer from the bay area' }),
      r({ username: 'horfe', hashedPassword: createPassword(), aboutMe: 'je suis de paris' }),
      r({ username: 'bicer', hashedPassword: createPassword(), aboutMe: 'escritor de méxico' }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
