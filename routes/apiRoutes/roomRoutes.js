const { roomController } = require('../../controllers');

const router = require('express').Router();

router.get("/", roomController.getRooms);

module.exports = router;