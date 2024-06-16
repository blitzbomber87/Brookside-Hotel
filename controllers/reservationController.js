const { Reservation } = require("../models");

module.exports = {
    add: async (req, res) => {
        const tempData = {
            guestId: req.session.guest_id,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut
        }

        const reservationData = await Reservation.create(tempData);
        res.json(reservationData);
    }
}