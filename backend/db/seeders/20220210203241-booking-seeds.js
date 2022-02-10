'use strict';

function checkIn () {
  let num = Math.ceil(Math.random() * 28);
  if (num < 10) num = `2021-11-0${num}T11:00`;
  else num = `2021-11-${num}T11:00`

  return new Date(num);
}

function checkOut () {
  let num = Math.ceil(Math.random() * 28);
  if (num < 10) num = `2021-11-0${num}T11:00`;
  else num = `2021-12-${num}T11:00`

  return new Date(num);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Bookings', [
      { spotId: 1, userId: 2, checkIn: checkIn(), checkOut: checkOut(), status: 'booked', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 3, userId: 3, checkIn: checkIn(), checkOut: checkOut(), status: 'booked', createdAt: new Date(), updatedAt: new Date() },
      { spotId: 7, userId: 1, checkIn: checkIn(), checkOut: checkOut(), status: 'booked', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
