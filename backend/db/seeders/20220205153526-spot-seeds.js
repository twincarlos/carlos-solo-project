'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
    { name: 'Park Acres', userId: 1, address: '2474 Amparo Orchard', city: 'Troyview', state: 'Hawaii', country: 'United States', lat: -33.995364768304505, lng: 44.828918881725144, price: 1889.41, numOfGuests: 13, rating: 1.40, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Eagle Estates', userId: 1, address: '83932 Valeria Stream', city: 'Adeliafurt', state: 'New Jersey', country: 'United States', lat: 27.792509065424085, lng: -147.00874320997474, price: 2499.00, numOfGuests: 9, rating: 1.62, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Park Court', userId: 3, address: '271 Sterling Point', city: 'Barrowsbury', state: 'Delaware', country: 'United States', lat: 70.90648462015199, lng: -150.1650265852033, price: 1307.58, numOfGuests: 8, rating: 1.24, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Autumn Place', userId: 3, address: '802 Hilll Pike', city: 'Catinabury', state: 'Alabama', country: 'United States', lat: -46.56995889128504, lng: 52.76148547963834, price: 4217.90, numOfGuests: 12, rating: 2.65, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Royal Place', userId: 2, address: '941 Marquardt Way', city: 'South Merlinbury', state: 'Wyoming', country: 'United States', lat: -67.67600214292492, lng: 173.73050795510693, price: 1493.36, numOfGuests: 7, rating: 0.85, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Paradise Heights', userId: 2, address: '9825 Burl Crossroad', city: 'Nerissaville', state: 'Connecticut', country: 'United States', lat: -70.00599070412076, lng: 71.47471750504374, price: 4371.78, numOfGuests: 12, rating: 3.73, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Park Village', userId: 3, address: '42748 Larisa Haven', city: 'New Tatyanamouth', state: 'Wisconsin', country: 'United States', lat: -60.56553628702302, lng: -123.54481455374518, price: 4799.18, numOfGuests: 8, rating: 1.81, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Royal Village', userId: 2, address: '17962 Rene Garden', city: 'North Stepheniefurt', state: 'Georgia', country: 'United States', lat: 77.52501547057207, lng: 102.93530676561642, price: 1993.12, numOfGuests: 3, rating: 1.59, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Park Heights', userId: 2, address: '9895 Bartoletti Wall', city: 'Cesarshire', state: 'Minnesota', country: 'United States', lat: 85.37493632893688, lng: 132.53684550781486, price: 4015.29, numOfGuests: 9, rating: 1.33, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Summer Oaks', userId: 3, address: '465 Lucile Orchard', city: 'North Arthurside', state: 'Illinois', country: 'United States', lat: -11.573718343919111, lng: 97.28527038198547, price: 1806.75, numOfGuests: 9, rating: 2.24, createdAt: new Date(), updatedAt: new Date() }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
