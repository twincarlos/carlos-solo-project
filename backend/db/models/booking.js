'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: { allowNull: false, type: DataTypes.INTEGER, references: { model: 'Spots' } },
    userId: { allowNull: false, type: DataTypes.INTEGER, references: { model: 'Users' } },
    checkIn: { allowNull: false, type: DataTypes.DATE },
    checkOut: { allowNull: false, type: DataTypes.DATE },
    status: { allowNull: false, type: DataTypes.STRING }
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' });
  };
  return Booking;
};
