const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const Room = require('./room');
const Reservation = require('./reservation');

class OccupiedRoom extends Model {}

OccupiedRoom.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        roomId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Room,
                key: 'id'
            }
        },
        reservationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Reservation,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'occupiedRoom',
    }
);

module.exports = OccupiedRoom;
