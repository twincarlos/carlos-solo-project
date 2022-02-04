'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'Lition',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: false
      },
      {
        email: 'user1@user.io',
        firstName: 'Jack',
        lastName: 'Sparrow',
        hashedPassword: bcrypt.hashSync('password2'),
        isHost: false
      },
      {
        email: 'user2@user.io',
        firstName: 'John',
        lastName: 'Doe',
        hashedPassword: bcrypt.hashSync('password3'),
        isHost: false
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
