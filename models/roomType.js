const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class RoomType extends Model {}

RoomType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        maxOccupancy: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'roomType',
    }
);

module.exports = RoomType;
