const nodemailer = require('nodemailer');

exports.sendEmail = async (options) => {
  // create transporter
  const transporter = nodemailer.createTestAccount({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const details = {
    from: 'Tasks API <indisputable.jay@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendEmail(details);
};
