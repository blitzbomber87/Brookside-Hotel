module.exports = {
	withAuth: (req, res, next) => {
		if (!req.session.guest_id) {
			res.redirect('/login');
		} else {
			next();
		}
	}
};
