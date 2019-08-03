const mail = sails.config.mail;

module.exports = async function(email, _id, reset_key){
  mail.message({
    from: 'sender@example.net',
    to: [email],
    subject: 'Hello from Node.JS'
  })
  .body('Node speaks SMTP!')
  .send(function(err) {
    if (err) throw err;
    console.log('Sent!');
  });
}