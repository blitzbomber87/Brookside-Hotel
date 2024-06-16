const { RoomType } = require("../models");

module.exports = {
    showAll: async (req, res) => {
        try {
            const roomTypeData = await RoomType.findAll();
            res.status(json(roomTypeData));
        } catch (err) {
            res.status(500).json(err);
        }
    },
}