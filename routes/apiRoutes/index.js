const router = require('express').Router();

const guestRoutes = require('./guestRoutes');
const resRoutes = require('./resRoutes');
const roomRoutes = require('./roomRoutes');
const resRoomRoutes = require('./resRoomRoutes');
const emailRoutes = require('./emailRoutes')

router.use('/guest', guestRoutes);
router.use('/res', resRoutes);
router.use('/room', roomRoutes);
router.use('/resRoom', resRoomRoutes);
router.use('/send-email', emailRoutes)

module.exports = router;
