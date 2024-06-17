const resRoomController = require('../../controllers/resRoomController');

const router = require('express').Router();

// POST route for adding reserved rooms for a given reservation
router.route("/").post(resRoomController.add);

// GET route for getting all reserved rooms for a given reservation
router.route("/").get(resRoomController.getReservedRooms);

// PUT route for updating room
router.route("/:id").put(resRoomController.updateReservedRoom);

module.exports = router;