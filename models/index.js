const Guest = require('./guest');
const RoomType = require('./roomType');
const Room = require('./room');
const Reservation = require('./reservation');
const ReservedRoom = require('./reservedRoom');
const OccupiedRoom = require('./occupiedRoom');

Guest.hasMany(Reservation, { foreignKey: 'guestId' });
Reservation.belongsTo(Guest, { foreignKey: 'guestId' });

RoomType.hasMany(Room, { foreignKey: 'typeId' });
Room.belongsTo(RoomType, { foreignKey: 'typeId' });

Reservation.hasMany(ReservedRoom, { foreignKey: 'reservationId' });
ReservedRoom.belongsTo(Reservation, { foreignKey: 'reservationId' });

RoomType.hasMany(ReservedRoom, { foreignKey: 'roomTypeId' });
ReservedRoom.belongsTo(RoomType, { foreignKey: 'roomTypeId' });

Room.hasMany(OccupiedRoom, { foreignKey: 'roomId' });
OccupiedRoom.belongsTo(Room, { foreignKey: 'roomId' });

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
