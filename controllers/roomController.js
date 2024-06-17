const { Room, RoomType } = require("../models");

module.exports = {
    // get all rooms and join room types
    getRooms: async (req, res) => {
        try {
            const roomData = await Room.findAll(
                {include: [{ model: RoomType }]});
            res.json(roomData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update room availability for a given id/number
    updateRoom: async (req, res) => {
        try {
            const roomData = await Room.update(
                {available: req.body.available}, 
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );

            if (!roomData[0]) {
                res.status(404).json({ message: 'No room with this id!' });
                return;
            }

            res.json(roomData);
        } catch (err) {
            res.status(500).json({ message: 'Internal server error!' });
        }
    },
}