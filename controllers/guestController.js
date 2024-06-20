const { Guest } = require('../models');
const { findByPk } = require('../models/guest');

module.exports = {
	add: async (req, res) => {
		const guestData = await Guest.create(req.body);
		req.session.save(() => {
			req.session.guest_id = guestData.id;
			req.session.logged_in = true;

			res.json({ guest: guestData, message: 'You are now logged in!' });
		});
	},
	login: async (req, res) => {
		try {
			// Find the guest who matches the posted e-mail address
			const guestData = await Guest.findOne({ where: { email: req.body.email } });

			if (!guestData) {
				res.status(400).json({ message: 'Incorrect email or password, please try again' });
				return;
			}

			// Verify the posted password with the password store in the database
			const validPassword = await guestData.checkPassword(req.body.password);

			if (!validPassword) {
				res.status(400).json({ message: 'Incorrect email or password, please try again' });
				return;
			}
			
			// Create session variables based on the logged in guest
			req.session.save(() => {
				req.session.guest_id = guestData.id;
				req.session.logged_in = true;
				
				res.json({ guest: guestData, message: 'You are now logged in!' });
			});
			
		} catch (err) {
			res.status(400).json(err);
		}
	},
	logout: (req, res) => {
		if (req.session.logged_in) {
			// Remove the session variables
			req.session.destroy(() => {
				res.status(204).end();
			});

		} else {
			res.status(404).end();
		}
	},
	me: async (req, res) => {
		const guestData = await Guest.findByPk(req.session.guest_id);
		res.json(guestData);
	}
};