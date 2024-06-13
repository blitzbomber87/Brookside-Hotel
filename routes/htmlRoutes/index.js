const router = require('express').Router();
const { htmlController } = require('../../controllers/index');

router.route('/login').get(htmlController.login)
router.route('/signup').get(htmlController.signup);
router.route('/').get(htmlController.homepage);

module.exports = router;