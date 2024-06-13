const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

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
                model: 'room',
                key: 'id'
            }
        },
        reservationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'reservation',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'occupiedRoom',
    }
);

module.exports = OccupiedRoom;