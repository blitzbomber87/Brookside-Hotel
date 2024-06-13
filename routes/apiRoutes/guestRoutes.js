const guestController = require('../../controllers/guestController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(guestController.add).get(withAuth, guestController.me);

router.route('/login').post(guestController.login);
router.route('/logout').get(guestController.logout);

module.exports = router;
