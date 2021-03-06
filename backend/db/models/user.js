'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    isHost: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Spot, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Booking, { foreignKey: 'userId' });
  };

  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, firstName, lastName, isHost, image } = this; // context will be the User instance
    return { id, firstName, lastName, isHost, image };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const user = await User.scope('loginUser').findOne({
      where: { email: credential }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ email, firstName, lastName, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      firstName,
      lastName,
      hashedPassword,
      isHost: false,
      image: 'https://i.pinimg.com/originals/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.png'
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.becomeHost = async function ({ userId, password }) {
    const user = await User.scope('loginUser').findByPk(userId);

    if (user.validatePassword(password)) {
      user.isHost = true;
      await user.save();
      return user;
    }
  }

  return User;
};
