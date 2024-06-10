const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const { Guest } = require ('./guest')

class Reservation extends Model {}

Reservation.init (
    {
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
