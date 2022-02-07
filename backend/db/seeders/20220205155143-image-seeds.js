'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Images', [
      { spotId: 1, url: 'https://a0.muscache.com/im/pictures/8b5fb095-48fb-4bbc-9ddc-a075f9e4026b.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 2, url: 'https://a0.muscache.com/im/pictures/28fa5103-8897-4ee8-877e-d6139f6e6cdd.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 3, url: 'https://a0.muscache.com/im/pictures/ee7812fa-45dd-4ff6-9f5a-509c71286d5d.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 4, url: 'https://a0.muscache.com/im/pictures/d5672c5a-388e-4711-b5a3-9f5448f25a0a.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 5, url: 'https://a0.muscache.com/im/pictures/d6ccc8da-4f90-4bd3-82fe-31458fdfe593.jpg?im_w=1440', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 6, url: 'https://a0.muscache.com/im/pictures/5a1a00b5-5d9d-4925-87c2-397d02571928.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 7, url: 'https://a0.muscache.com/im/pictures/4a128381-ff26-4054-b710-e180db2836c5.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 8, url: 'https://a0.muscache.com/im/pictures/93f8f244-d44a-4738-b168-616adbe08b4e.jpg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 9, url: 'https://a0.muscache.com/im/pictures/ae874b2f-1291-4384-8820-0fac1b966352.jpg?im_w=1440', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 10, url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45234545/original/b10beb82-bb7a-4e65-8632-24c6759d402f.jpeg?im_w=1200', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
