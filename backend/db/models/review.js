'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    spotId: { allowNull:false, type: DataTypes.INTEGER, references: { model: 'Spots' } },
    userId: { allowNull:false, type: DataTypes.INTEGER, references: { model: 'Users' } },
    review: { allowNull:false, type: DataTypes.TEXT },
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};
