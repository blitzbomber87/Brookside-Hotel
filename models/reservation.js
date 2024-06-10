const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const Guest = require('./guest');

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
            allowNull: false,
            references: {
                model: Guest,
                key: 'id'
            }
        },
        checkIn: {
            type: DataTypes.DATE,
            allowNull: false
        },
        checkOut: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'reservation', 
    }
);

Reservation.belongsTo(Guest, { foreignKey: 'guestId' });
Guest.hasMany(Reservation, { foreignKey: 'guestId' });

module.exports = Reservation;
