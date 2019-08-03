const nodemailer = require('nodemailer'); 
const path = require('path');
const ejs = require('ejs');
const fs   = require('fs');  

module.exports.mail = {
  transport: nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'user@gmail.com',
      pass: 'pass'
    }
  }),
  template: function(file, data){
    var templatePath = path.resolve(
      path.basename(__dirname), './../views/mails/', file + '.ejs'
    );
    var template = fs.readFileSync(templatePath, 'utf-8');
    return ejs.render(template, data);
  },
};
