const { Reservation, ReservedRoom } = require("../models");
const { isValidDate, isCheckInBeforeCheckOut } = require('../utils/helpers');

module.exports = {
    add: async (req, res) => {
        try {
            const { checkIn, checkOut, rooms } = req.body;

            if (!isValidDate(checkIn) || !isValidDate(checkOut)) {
                return res.status(400).json({ error: 'Invalid date format.' });
            }

            if (!isCheckInBeforeCheckOut(checkIn, checkOut)) {
                return res.status(400).json({ error: 'Check-out date must be after the check-in date.' });
            }

            const reservationData = await Reservation.create({
                guestId: req.session.guest_id,
                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut)
            });

            const reservedRooms = rooms.map(room => ({
                reservation_id: reservationData.id,
                room_type: room.room_type,
                quantity: room.quantity,
                confirmed: false
            }));

            await ReservedRoom.bulkCreate(reservedRooms);

            req.session.save(() => {
                req.session.reservation_id = reservationData.id;
                res.json(reservationData);
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getReservations: async (req, res) => {
        try {
            const reservationData = await Reservation.findAll({
                where: { guestId: req.session.guest_id },
                include: ['ReservedRooms']
            });
            res.json(reservationData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

