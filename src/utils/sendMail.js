const nodeMailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const config = require("../config");
module.exports = async function send({ to, subject, message }) {
  let transporter = nodeMailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASSWORD,
      },
    })
  );

  const mailOptions = {
    from: config.GMAIL_USER,
    to,
    subject,
    html: message,
  };

  return await transporter.sendMail(mailOptions);
};
