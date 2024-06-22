const { emailController } = require("../../controllers");

const router = require("express").Router();

// POST route to send email
router.route("/").post(emailController.sendEmail);

module.exports = router;