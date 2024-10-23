const nodemailer = require("nodemailer");

const sendMail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aroraaryan997@gmail.com",
    pass: "Arora324(a)",
  },
});

module.exports = sendMail;
