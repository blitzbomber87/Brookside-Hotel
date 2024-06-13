const resController = require('../../controllers/resController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(withAuth, resController.add);

module.exports = router;
