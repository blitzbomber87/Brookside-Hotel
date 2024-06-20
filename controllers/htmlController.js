const { RoomType, Reservation, Guest } = require('../models');

module.exports = {
	homepage: async (req, res) => {
		const roomType = await RoomType.findAll({
			order: [['name', 'ASC'],]
		});

		const types = roomType.map((type) => type.get({ plain: true }));		
		res.render('homepage', { types, logged_in: req.session.logged_in });
	},

    login: async (req, res) => {
        res.render('login', {logged_in: req.session.logged_in});
    },

	signup: async (req, res) => {
		res.render('signup', {logged_in: req.session.logged_in});
	},

	rooms: async (req, res) => {
		const roomType = await RoomType.findAll();

		const types = roomType.map((type) => type.get({ plain: true }));
		
		res.render('rooms', { types, logged_in: req.session.logged_in });
	},

	profile: async (req, res) => {
		const reservation = await Reservation.findAll({
			include: [{ model: Guest }],
			where: {guestId: req.session.guest_id}
		});

		const reservations = reservation.map((reserv) => reserv.get({ plain: true }));
		
		res.render('profile', { reservations, logged_in: req.session.logged_in })
	},

	booking: async (req, res)  =>  {
		const roomType = await RoomType.findAll();

		const types = roomType.map((type) => type.get({ plain: true }));
		
		res.render('booking', { types, logged_in: req.session.logged_in });
	},

	confirmation: async (req, res) => {
		const reservationData = await Reservation.findOne({
			include: [{ model: Guest }],
			where: {guestId: req.session.guest_id}
		});
		
		const reservation = reservationData.get({ plain: true });

		res.render('confirmation', { reservation, logged_in: req.session.logged_in });
	},
	
	contact: async (req, res) => {
        res.render('contact', {logged_in: req.session.logged_in});
    },
};