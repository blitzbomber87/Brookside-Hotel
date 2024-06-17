const resController = require('../../controllers/resController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

// POST route for creating a reservation
router.route('/').post(withAuth, resController.add);

// GET route for getting all reservations for guest
router.route('/').get(withAuth, resController.getReservations);

module.exports = router;
