const router = require('express').Router();
const { htmlController } = require('../../controllers/index');

// router.route('/login').get(htmlContoller.signup);
router.route('/').get(htmlController.homepage);

module.exports = router;