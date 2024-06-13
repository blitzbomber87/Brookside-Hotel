const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config'); 


class ReservedRoom extends Model {}

ReservedRoom.init({
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reservationId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'reservation', 
      key: 'id',
    },
    allowNull: false
  },
  roomTypeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'roomType', 
      key: 'id',
    },
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'reservedRoom'
});

module.exports = ReservedRoom;
