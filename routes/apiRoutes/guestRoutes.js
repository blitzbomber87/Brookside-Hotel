const { guestController } = require('../../controllers');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(guestController.add).get(withAuth, guestController.me);

router.route('/login').post(guestController.login);
router.route('/logout').post(guestController.logout);

module.exports = router;