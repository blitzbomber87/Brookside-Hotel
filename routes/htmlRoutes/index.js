const router = require('express').Router();
const { htmlController } = require('../../controllers/index');

router.route('/login').get(htmlController.login)
router.route('/signup').get(htmlController.signup);
router.route('/').get(htmlController.homepage);
router.route('/rooms').get(htmlController.rooms);
router.route('/profile').get(htmlController.profile);
router.route('/booking').get(htmlController.booking);
router.route('/confirmation').get(htmlController.confirmation);

module.exports = router;