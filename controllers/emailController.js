const {sendMail} = require("../mail");

module.exports = {
    sendEmail: async (req, res) => {
        sendMail({to: req.body.to, context: req.body.context});

        res.json("Success!")
    }
}