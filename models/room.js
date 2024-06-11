const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const {RoomType } = require('./roomType')

class Room extends Model {}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'room',
  }
);

module.exports = Room;
