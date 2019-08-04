/**
 * ErrorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async access(req, res) {
    // data
    var lang = 'sp';
    var error_number = req.param('error');
    var registered_errors = ['404', '5051'];
    // check if error content is not registered then, default error 404
    if (registered_errors.indexOf(error_number) == -1){
      error_number = '404';
    }
    // response
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.errorStatic(),
      title: sails.config.contents.titles()[lang]['error'],
      contents: sails.config.contents.get('error')[lang][error_number],
      lang: lang,
    };
    res.status(404);
    return res.view('error/access', locals);
  }, 
};

