const { Guest, RoomType, Room, Reservation, ReservedRoom, OccupiedRoom } = require('./models');

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

module.exports = {
    Guest,
    RoomType,
    Room,
    Reservation,
    ReservedRoom,
    OccupiedRoom
};
