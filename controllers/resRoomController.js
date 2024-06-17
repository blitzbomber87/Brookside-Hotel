const { ReservedRoom, Reservation, RoomType } = require("../models");

module.exports = {
    // add reserved rooms
    add: async (req, res) => {
        try {
            const tempData = {
                reservationId: req.session.reservation_id,
                typeId: req.body.typeId,
                quantity: req.body.quantity,
                confirmed: true
            }
            
            const resRoomData = await ReservedRoom.create(tempData);
            res.json(resRoomData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all reserved rooms for a given reservation
    getReservedRooms: async (req, res) => {
        try {
            const resRoomData = await ReservedRoom.findAll({
                include:
                    [{ model: Reservation }, {model: RoomType}],
                where: {
                    reservationId: req.body.reservationId
                },
            });
            res.json(resRoomData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update reserved room confirmation for a given id/number
    updateReservedRoom: async (req, res) => {
        try {
            const resRoomData = ReservedRoom.update(
                {confirmed: req.body.confirmed}, 
                {
                    where: {
                        id: req.params.id,
                    },
                }
        );

            if (!resRoomData[0]) {
                res.status(404).json({ message: 'No reserved room with this id!' });
                return;
            }

            res.json(resRoomData);
        } catch (err) {
            res.status(500).json({ message: 'Internal server error!' });
        }
    },
}