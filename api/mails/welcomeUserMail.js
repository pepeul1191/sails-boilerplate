module.exports = async function(user, email, user_id, activation_key){
  var mail = sails.config.mail;
  var link = sails.config.globals.data.base_url + 'user/activate/' + 
    user_id + '/' + activation_key;
  var mailOptions = {
    from: 'Soporte Software Web Perú <support@softweb.pe>',
    to: email,
    subject: 'Activación de Cuenta',
    html: mail.template('welcome', {
      name: user,
      link: link,
    }),
  };
  var response = {
    status: 'success',
    message: 'Correo de activación enviado',
  };
  try{
    response = await mail.transport.sendMail(mailOptions);
  }catch(err){
    console.log(err);
    response.status = 'error';
    response.message = 'No se pudo mandar el correo de activación';
  }
  return response;
};