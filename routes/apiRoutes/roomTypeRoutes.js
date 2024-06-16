const roomTypeController = require('../../controllers/roomTypeController');

const router = require('express').Router();

router.get("/", roomTypeController.getTypes);

module.exports = router;