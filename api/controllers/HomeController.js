/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.homeStatic(),
      title: 'Home',
    };
    console.log(req.session);
    // return res.send('hola');
    return res.view('home/index', locals);
  }, 
};
