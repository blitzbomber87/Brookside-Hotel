const router = require('express').Router();
const htmlContoller = require('../../controllers/htmlController');

router.route('/login').get(htmlContoller.signup);
router.route('/').get(htmlContoller.homepage);

module.exports = router;
