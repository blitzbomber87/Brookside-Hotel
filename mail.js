require("dotenv").config();

const nodemailer = require("nodemailer");
const nodemailerHbs = require("nodemailer-express-handlebars");
const helpers = require('./utils/helpers');

//function to send email to the user
module.exports = {
    sendMail: async({to, context}) => { 
            try {
            
                const connection = {
                    host: process.env.MAIL_HOST,
                    port: process.env.MAIL_PORT,
                    auth: {
                        user: process.env.MAIL_USER,
                        pass: process.env.MAIL_PASSWORD,
                    }
                }
            
                //assign createTransport method in nodemailer to a variable
                //service: to determine which email platform to use
                //auth contains the senders email and password which are all saved in the .env
                const transporter = nodemailer.createTransport(connection);

                // configure handlebars plugin
                // src: https://www.youtube.com/watch?v=JbmZ86Ho01s
                const hbsOptions = {
                    viewEngine: {defaultLayout: false},
                    viewPath: "views",
                    helpers
                }

                transporter.use("compile", nodemailerHbs(hbsOptions));

                const mailOptions = ({
                    from: process.env.MAIL_FROM,
                    to,
                    subject: "Your reservation details at the Brookside Hotel",
                    template: "email",
                    context
                })

                //return the Transporter variable which has the sendMail method to send the mail
                //which is within the mailOptions
                return await transporter.sendMail(mailOptions) 

            } catch (error) {
            console.log(error)
            }
      
    }
}