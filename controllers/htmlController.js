const { RoomType } = require('../models');

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
	}
};