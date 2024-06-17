const { roomController } = require('../../controllers');

const router = require('express').Router();

// GET route for getting all rooms
router.route("/").get(roomController.getRooms);

// PUT route for updating room
router.route("/:id").put(roomController.updateRoom)

module.exports = router;