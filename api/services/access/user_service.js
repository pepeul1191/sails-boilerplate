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
      pass: pass, 
    });
  },
  async create(user, pass, email){
    return unirest.post(sails.config.globals.services.access.url + 'user/create')
    .headers({
      [sails.config.globals.services.access.csrf_key]: 
        sails.config.globals.services.access.csrf_secret,
    })
    .send({
      user: user,
      pass: pass,
      email: email,
    });
  },
  async activate(_id, activation_key){
    return unirest.post(sails.config.globals.services.access.url + 'user/activate')
    .headers({
      [sails.config.globals.services.access.csrf_key]: 
        sails.config.globals.services.access.csrf_secret,
    })
    .send({
      _id: _id,
      activation_key: activation_key,
    });
  },
  async reset(_id, pass, reset_key){
    return unirest.post(sails.config.globals.services.access.url + 'user/reset')
    .headers({
      [sails.config.globals.services.access.csrf_key]: 
        sails.config.globals.services.access.csrf_secret,
    })
    .send({
      _id: _id,
      pass: pass,
      reset_key: reset_key,
    });
  },
};

