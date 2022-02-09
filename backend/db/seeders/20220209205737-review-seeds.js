'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      { spotId: 1, userId: 2, review: 'Great place.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 1, userId: 2, review: 'I loved it!', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 1, userId: 3, review: 'Just wow!', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 1, userId: 3, review: 'I fell in love.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 2, userId: 2, review: 'Had so much fun!', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 2, userId: 3, review: 'Want to come back.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 3, userId: 2, review: 'Will be coming back for sure...', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 3, userId: 3, review: 'Beautiful place.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 4, userId: 1, review: 'My friends loved it.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 4, userId: 3, review: 'This was so much fun.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 5, userId: 1, review: 'The view is fantastic.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 5, userId: 3, review: 'The host is handsome.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 6, userId: 1, review: 'Beds were comfotable.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 6, userId: 3, review: 'Host was attentive.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 7, userId: 1, review: 'Really worth my money.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 7, userId: 2, review: 'Surpassed my expectations.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 8, userId: 1, review: 'Clean place.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 8, userId: 2, review: 'So luxurious.', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 9, userId: 1, review: 'Incredible!', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 9, userId: 2, review: 'I\'m just a review', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 10, userId: 1, review: 'Oh, hey there!', rating: 1.00, createdAt: new Date(), updatedAt: new Date() },
      { spotId: 10, userId: 2, review: 'Yayyy!!!', rating: 1.00, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
