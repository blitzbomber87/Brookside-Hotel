const router = require('express').Router();

const guestRoutes = require('./guestRoutes');
const resRoutes = require('./resRoutes');
const roomRoutes = require('./roomRoutes');
const roomTypeRoutes = require('./roomTypeRoutes');
const occRoomRoutes = require('./occRoomRoutes');
const resRoomRoutes = require('./resRoomRoutes');

router.use('/guest', guestRoutes);
router.use('/res', resRoutes);
router.use('/room', roomRoutes);
router.use('/roomType', roomTypeRoutes);
router.use('/occRoom', occRoomRoutes);
router.use('/resRoom', resRoomRoutes);

module.exports = router;
