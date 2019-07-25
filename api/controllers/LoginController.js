/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    var lang = 'sp';
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.loginStatic(),
      title: sails.config.contents.titles('login_index'),
      contents: sails.config.contents.get('login')[lang],
      message: '',
      message_status: '',
      lang: lang,
    };
    console.log(locals.contents);
    //return res.send('hola');
    return res.view('login/index', locals);
  }, 
};

