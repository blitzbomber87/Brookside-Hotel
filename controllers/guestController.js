const { Guest, Reservation } = require('../models');

module.exports = {
    signup: async (req, res) => {
        res.render('signup');
    },
    login: async (req, res) => {
        res.render('login');
    },
    profile: async (req, res) => {
        try {
            const reservations = await Reservation.findAll({
                where: { guestId: req.session.guestId },
                include: ['guest']
            });
            const plainReservations = reservations.map((reservation) => reservation.get({ plain: true }));
            res.render('profile', { reservations: plainReservations });
        } catch (error) {
            console.error('Error fetching reservations:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Error logging out');
            }
            res.redirect('/');
        });
    }
};
