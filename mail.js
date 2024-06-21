//function to send email to the user
module.exports.sendMail = async({to, subject, html}) => { 

    try {
        let mailOptions = ({
            from: "test@example.com",
            to,
            subject,
            html
        })
    
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

        //return the Transporter variable which has the sendMail method to send the mail
        //which is within the mailOptions
        return await transporter.sendMail(mailOptions) 

    } catch (error) {
      console.log(error)
    }
      
  }
  