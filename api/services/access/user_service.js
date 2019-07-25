var unirest = require('unirest');

module.exports = {
  async access(user, pass){
    return unirest.post(sails.config.globals.services.access.url + 'user/check')
    .headers({
      [sails.config.globals.services.access.csrf_key]: 
        sails.config.globals.services.access.csrf_secret,
    })
    .send({
      user: user,
      pass: pass ,
    });
  },
};

