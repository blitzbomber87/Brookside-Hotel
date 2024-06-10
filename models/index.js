const { Sequelize } = require('sequelize');
const sequelize = require('./config');
const Guest = require('./models/guest');
const RoomType = require('./models/roomType');
const Room = require('./models/room');
const Reservation = require('./models/reservation');
const ReservedRoom = require('./models/reservedRoom');
const OccupiedRoom = require('./models/occupiedRoom');

// Guest and Reservation
Guest.hasMany(Reservation, { foreignKey: 'guestId' });
Reservation.belongsTo(Guest, { foreignKey: 'guestId' });

// RoomType and Room
RoomType.hasMany(Room, { foreignKey: 'typeId' });
Room.belongsTo(RoomType, { foreignKey: 'typeId' });

// Reservation and ReservedRoom
Reservation.hasMany(ReservedRoom, { foreignKey: 'reservationId' });
ReservedRoom.belongsTo(Reservation, { foreignKey: 'reservationId' });

// RoomType and ReservedRoom
RoomType.hasMany(ReservedRoom, { foreignKey: 'roomTypeId' });
ReservedRoom.belongsTo(RoomType, { foreignKey: 'roomTypeId' });

// Room and OccupiedRoom
Room.hasMany(OccupiedRoom, { foreignKey: 'roomId' });
OccupiedRoom.belongsTo(Room, { foreignKey: 'roomId' });

// Reservation and OccupiedRoom
Reservation.hasMany(OccupiedRoom, { foreignKey: 'reservationId' });
OccupiedRoom.belongsTo(Reservation, { foreignKey: 'reservationId' });

// Sync database
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

module.exports = {
    sequelize,
    Guest,
    RoomType,
    Room,
    Reservation,
    ReservedRoom,
    OccupiedRoom
};
