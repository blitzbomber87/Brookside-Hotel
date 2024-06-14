const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Reservation extends Model {}

Reservation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      guestId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'guest',
            key: 'id',
          },
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: false
      },
      checkOut: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'reservation'
    }
  );

module.exports = Reservation;