const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  guestId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Reservation;
