const { RoomType, Reservation } = require('../models');

module.exports = {
	homepage: async (req, res) => {
		const roomType = await RoomType.findAll();

		const types = roomType.map((type) => type.get({ plain: true }));
		console.log(req.session.logged_in);
		res.render('homepage', { types, logged_in: req.session.logged_in });
	},
    login: async (req, res) => {
        res.render('login');
    },
	signup: async (req, res) => {
		res.render('signup');
	},
	rooms: async (req, res) => {
		const roomType = await RoomType.findAll();

		const types = roomType.map((type) => type.get({ plain: true }));
		// console.log(req.session.logged_in);
		res.render('rooms', { types });
	},
	profile: async (req, res) => {
		const reservation = await Reservation.findAll({
			include: ['guest']
		});
		const reservations = reservation.map((res) => res.get({ plain: true }));

		res.render('profile', { reservations })
	}
};