const roomController = require('../../controllers/roomController');

const router = require('express').Router();

router.get("/", roomController.getRooms);

module.exports = router;