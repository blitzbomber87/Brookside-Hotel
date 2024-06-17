const { Room } = require("../models");

module.exports = {
    getRooms: async (req, res) => {
        try {
            const roomData = await Room.findAll();
            res.json(roomData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}