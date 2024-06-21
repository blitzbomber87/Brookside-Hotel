const { Reservation } = require("../models");

module.exports = {
    add: async (req, res) => {
        try {
            const { checkIn, checkOut } = req.body;
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            if (checkInDate < today) {
                return res.status(400).json({ error: 'Check-in date cannot be in the past.' });
            }

            if (checkOutDate <= checkInDate) {
                return res.status(400).json({ error: 'Check-out date must be after the check-in date.' });
            }

            const tempData = {
                guestId: req.session.guest_id,
                checkIn: checkInDate,
                checkOut: checkOutDate
            };

            const reservationData = await Reservation.create(tempData);

            req.session.save(() => {
                req.session.reservation_id = reservationData.id;
            });

            res.json(reservationData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getReservations: async (req, res) => {
        try {
            const reservationData = await Reservation.findAll({
                where: {
                    guestId: req.session.guest_id
                }
            });
            res.json(reservationData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
