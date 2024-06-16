const resController = require('../../controllers/resController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(withAuth, resController.add);
router.route('/').get(withAuth, resController.showAll);

module.exports = router;
