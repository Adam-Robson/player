const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendConfirmationEmail(first, last, email, message) {
  const info = await transporter.sendMail({
    from: `Le Fog Contact <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: `New message from ${first} ${last}`,
    text: `From: ${first} ${last} <${email}>\n\n${message}`,
  });
  console.log("Email sent:", info.messageId);
}

module.exports = { sendConfirmationEmail };

