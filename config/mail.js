var nodemailer = require('nodemailer'); 

module.exports.mail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'user@gmail.com',
    pass: 'pass'
  }
});
