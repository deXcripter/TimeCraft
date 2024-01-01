const nodemailer = require('nodemailer');

exports.sendEmail = async (options) => {
  // create transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const details = {
    from: 'Tasks API <indisputable.jay@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(details);
};
