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
      },
      {
        email: 'mark@zuck.io',
        firstName: 'Mark',
        lastName: 'Zuckerberg',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/640px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
      },
      {
        email: 'ariana@grande.io',
        firstName: 'Ariana',
        lastName: 'Grande',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://www.refinery29.com/images/10556884.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=65&sharpen=a3%2Cr3%2Ct0&optimize=low&width=1200&height=1200&crop=1%3A1%2Csmart&enable=upscale'
      },
      {
        email: 'cristiano@ronaldo.io',
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://www.biography.com/.image/t_share/MTc5OTQ5OTg4NjY5ODI2MTcw/gettyimages-971463110.jpg'
      },
      {
        email: 'larry@page.io',
        firstName: 'Larry',
        lastName: 'Page',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://www.wired.com/images_blogs/business/2012/04/larrypage.jpg'
      },
      {
        email: 'iron@man.io',
        firstName: 'Robert',
        lastName: 'Downey',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://pbs.twimg.com/media/FDMvicpWYAod-bW?format=jpg&name=large'
      },
      {
        email: 'steve@ballmer.io',
        firstName: 'Steve',
        lastName: 'Ballmer',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://images.squarespace-cdn.com/content/v1/5a1340ef914e6bf3c0764c0c/1536789061425-UG7GTFM3MYOLK0VM2L41/Steve+Ballmer_Randell_Walton_Photography_7R7A3416-Edit_edited.jpg?format=1000w'
      },
      {
        email: 'tim@cook.io',
        firstName: 'Tim',
        lastName: 'Cook',
        hashedPassword: bcrypt.hashSync('password'),
        isHost: true,
        image: 'https://s2.q4cdn.com/470004039/files/images/executive_profiles/retina/tim_cook_thumb_x2.jpg'
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
