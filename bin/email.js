const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com.ar",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
});

module.exports = transporter;