const { Reservation, Guest, ReservedRoom, RoomType } = require("../models");

module.exports = {
    add: async (req, res) => {
        try {
            const tempData = {
                guestId: req.session.guest_id,
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut
            }

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
    getReservation: async (req, res) => {
        try {
            const reservationData = await Reservation.findOne({
                include:
                    [{ model: Guest}, { model: ReservedRoom, include: [{ model: RoomType }]}],
                    where: {
                        guestId: req.session.guest_id
                    },
                    order: [['id', 'DESC'],]
            });

            res.json(reservationData)
        } catch(err) {
            res.status(500).json({ message: 'Internal server error!'})
        }
    }
}