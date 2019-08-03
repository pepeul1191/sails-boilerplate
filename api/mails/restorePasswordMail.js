module.exports = async function(email, user_id, reset_key){
  var mail = sails.config.mail;
  var link = sails.config.globals.data.base_url + 'user/reset/' + 
    user_id + '/' + reset_key;
  var mailOptions = {
    from: 'Soporte Software Web Perú <support@softweb.pe>',
    to: email,
    subject: 'Cambio de Contraseña',
    html: mail.template('reset', {
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
}