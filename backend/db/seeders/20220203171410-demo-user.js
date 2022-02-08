'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'jeff@bezos.io',
        firstName: 'Jeff',
        lastName: 'Bezos',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg'
      },
      {
        email: 'elon@musk.io',
        firstName: 'Elon',
        lastName: 'Musk',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://cdn.vox-cdn.com/thumbor/e3etn9oj-bDsaMR-uEGtF50jCO0=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13372511/REC_Elon_LedeImage__1_.png'
      },
      {
        email: 'bill@gates.io',
        firstName: 'Bill',
        lastName: 'Gates',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg'
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
