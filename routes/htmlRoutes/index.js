const router = require('express').Router();
const { htmlController } = require('../../controllers/index');
const { withAuth } = require('../../utils/Auth');

router.route('/login').get(htmlController.login)
router.route('/signup').get(htmlController.signup);
router.route('/').get(htmlController.homepage);
router.route('/rooms').get(htmlController.rooms);
router.route('/profile').get(withAuth, htmlController.profile);
router.route('/booking').get(withAuth, htmlController.booking);
router.route('/confirmation').get(withAuth, htmlController.confirmation);
router.route('/contact').get(htmlController.contact);

module.exports = router;