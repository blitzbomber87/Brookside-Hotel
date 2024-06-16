const roomTypeController = require('../../controllers/roomTypeController');

const router = require('express').Router();

router.get("/", roomTypeController.showAll);

module.exports = router;